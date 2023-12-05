package com.checker.courtsearch.service;

import com.checker.courtsearch.dto.CourtSearchDto;
import com.checker.courtsearch.entity.CourtSearch;
import com.checker.courtsearch.repository.CourtSearchRepository;
import com.checker.courtsearch.utils.Converters;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class CourtSearchesImpl implements CourtSearchService {

    @Autowired
    private CourtSearchRepository courtSearchRepository;

    @Autowired
    private Converters converters;

    @Override
    public List<CourtSearchDto> getAllCourtSearches() {
        List<CourtSearch> courtSearchList = courtSearchRepository.findAll();
        return courtSearchList.stream().map(courtSearch -> converters.entityToDto(courtSearch)).toList();
    }
}
