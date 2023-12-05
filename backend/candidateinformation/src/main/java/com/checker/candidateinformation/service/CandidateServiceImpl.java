package com.checker.candidateinformation.service;


import com.checker.candidateinformation.dto.CandidateDto;
import com.checker.candidateinformation.entity.Candidate;
import com.checker.candidateinformation.exception.CandidateNotFoundException;
import com.checker.candidateinformation.repository.CandidateRepository;
import com.checker.candidateinformation.utils.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.checker.candidateinformation.utils.Constants.*;

@Service
public class CandidateServiceImpl implements CandidateService{

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private Converters converters;

    @Override
    public String updatedCandidate(Integer candidateId, CandidateDto candidateDto) {
        Optional<Candidate> existedCandidate = candidateRepository.findById(candidateId);
        if(existedCandidate.isPresent()){
            existedCandidate.get().setAdjudication(candidateDto.getAdjudication());
            candidateRepository.save(existedCandidate.get());
            return UPDATED;
        }
        throw new CandidateNotFoundException("Candidate with Id - "+candidateId+NOTFOUND);
    }

    @Override
    public List<CandidateDto> getAllCandidates() {
        List<Candidate> candidatesList = candidateRepository.findAll();
        return candidatesList.stream().map(candidate -> converters.entityToDto(candidate)).toList();
    }

    @Override
    public CandidateDto getCandidateById(Integer candidateId) {
        Optional<Candidate> candidate = candidateRepository.findById(candidateId);
        if(candidate.isEmpty())
            throw new CandidateNotFoundException("Candidate with Id - "+candidateId+NOTFOUND);

        return converters.entityToDto(candidate.get());
    }
}
