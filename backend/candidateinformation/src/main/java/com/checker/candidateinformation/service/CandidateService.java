package com.checker.candidateinformation.service;

import com.checker.candidateinformation.dto.CandidateDto;

import java.util.List;

public interface CandidateService {

    String updatedCandidate(Integer candidateId,CandidateDto candidateDto);

    List<CandidateDto> getAllCandidates();

    CandidateDto getCandidateById(Integer candidateId);

}
