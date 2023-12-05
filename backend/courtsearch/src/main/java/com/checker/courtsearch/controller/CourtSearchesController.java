package com.checker.courtsearch.controller;

import com.checker.courtsearch.dto.CourtSearchDto;
import com.checker.courtsearch.service.CourtSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/courtSearches")
@CrossOrigin
public class CourtSearchesController {


  @Autowired
  private CourtSearchService courtSearchService;

    @GetMapping
    public List<CourtSearchDto> fetchAllCourtSearches(){
        return courtSearchService.getAllCourtSearches();
    }

}
