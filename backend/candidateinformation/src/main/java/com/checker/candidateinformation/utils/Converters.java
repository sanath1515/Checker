package com.checker.candidateinformation.utils;


import com.checker.candidateinformation.dto.CandidateDto;
import com.checker.candidateinformation.entity.Candidate;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Converters {

    @Autowired
    private ModelMapper modelMapper;

    public CandidateDto entityToDto(Candidate candidate){
        return modelMapper.map(candidate, CandidateDto.class);
    }

    public Candidate dtoToEntity(CandidateDto candidateDTO){
        return modelMapper.map(candidateDTO,Candidate.class);
    }

}
