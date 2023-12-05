package com.checker.candidateinformation.controller;

import com.checker.candidateinformation.dto.CandidateDto;
import com.checker.candidateinformation.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.checker.candidateinformation.utils.Constants.BASEURL;

@RestController
@RequestMapping(BASEURL)
@CrossOrigin
public class CandidateController {


    @Autowired
    private CandidateService candidateService;

    @GetMapping("/{id}")
    public CandidateDto fetchCandidateById(@PathVariable Integer id){
        return candidateService.getCandidateById(id);
    }

    @GetMapping
    public List<CandidateDto> fetchAllCandidates(){
        return candidateService.getAllCandidates();
    }

    @PatchMapping("/{id}")
    public String updateTheCandidate(@RequestBody CandidateDto candidateDto, @PathVariable Integer id){
        return candidateService.updatedCandidate(id,candidateDto);
    }

}
