package com.checker.courtsearch.controller;

import com.checker.courtsearch.dto.CourtSearchDto;
import com.checker.courtsearch.service.CourtSearchService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

class CourtSearchControllerTest {

    @Mock
    private CourtSearchService courtSearchService;

    @InjectMocks
    private CourtSearchesController courtSearchesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFetchAllCourtSearches() {
        CourtSearchDto dto1= new CourtSearchDto();
        CourtSearchDto dto2 = new CourtSearchDto();
        List<CourtSearchDto> expectedDtos = Arrays.asList(dto1,dto2);
        when(courtSearchService.getAllCourtSearches()).thenReturn(expectedDtos);
        List<CourtSearchDto> result = courtSearchesController.fetchAllCourtSearches();
        assertEquals(expectedDtos,result);
    }
}
