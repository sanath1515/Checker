package com.checker.courtsearch.service;

import com.checker.courtsearch.dto.CourtSearchDto;
import com.checker.courtsearch.entity.CourtSearch;
import com.checker.courtsearch.repository.CourtSearchRepository;
import com.checker.courtsearch.service.CourtSearchesImpl;
import com.checker.courtsearch.utils.Converters;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CourtSearchesImplTest {

    @Mock
    private CourtSearchRepository courtSearchRepository;

    @Mock
    private Converters converters;

    @InjectMocks
    private CourtSearchesImpl courtSearchesService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllCourtSearches() {
        // Arrange
        List<CourtSearch> courtSearchList = new ArrayList<>();
        courtSearchList.add(new CourtSearch(1, "Search1", "CLEAR", null, 1));
        courtSearchList.add(new CourtSearch(2, "Search2", "CONSIDER", null, 2));

        List<CourtSearchDto> courtSearchDtoList = new ArrayList<>();
        courtSearchDtoList.add(new CourtSearchDto(1, "Search1", "CLEAR", null, 1));
        courtSearchDtoList.add(new CourtSearchDto(2, "Search2", "CONSIDER", null, 2));

        when(courtSearchRepository.findAll()).thenReturn(courtSearchList);
        when(converters.entityToDto(any())).thenReturn(courtSearchDtoList.get(0), courtSearchDtoList.get(1));

        // Act
        List<CourtSearchDto> result = courtSearchesService.getAllCourtSearches();

        // Assert
        assertEquals(courtSearchDtoList.size(), result.size());
        assertEquals(courtSearchDtoList, result);

        // Verify that repository and converters were called
        verify(courtSearchRepository, times(1)).findAll();
        verify(converters, times(2)).entityToDto(any());
    }
}
