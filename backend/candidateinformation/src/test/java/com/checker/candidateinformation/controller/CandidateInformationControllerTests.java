package com.checker.candidateinformation.controller;

import com.checker.candidateinformation.dto.CandidateDto;
import com.checker.candidateinformation.service.CandidateService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static com.checker.candidateinformation.utils.Constants.UPDATED;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CandidateInformationControllerTests {

    @Mock
    private CandidateService candidateService;
    @InjectMocks
    private CandidateController candidateController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testFetchById_WithValidId_ReturnsCandidateInformationDTO() {
        Integer candidateId = 1;
        CandidateDto candidateDto = new CandidateDto();
        when(candidateService.getCandidateById(candidateId)).thenReturn(candidateDto);

        CandidateDto result = candidateController.fetchCandidateById(candidateId);

        assertEquals(candidateDto, result);
    }

    @Test
    void testFetchAll_ReturnsListOfCandidateInformationDTOs() {
        CandidateDto candidateDto1 = new CandidateDto();
        CandidateDto candidateDto2 = new CandidateDto();
        List<CandidateDto> expectedDtos = Arrays.asList(candidateDto1, candidateDto2);
        when(candidateService.getAllCandidates()).thenReturn(expectedDtos);

        List<CandidateDto> result = candidateController.fetchAllCandidates();

        assertEquals(expectedDtos, result);
    }

    @Test
    void testUpdate_WithExistingCandidate_ReturnsUpdatedCandidateInformationDTO() {
        Integer candidateId = 1;
        CandidateDto candidateDto = new CandidateDto();
        String expectedResult = UPDATED;
        when(candidateService.updatedCandidate(candidateId, candidateDto)).thenReturn(expectedResult);

        String result = candidateController.updateTheCandidate(candidateDto, candidateId);

        assertEquals(expectedResult, result);
    }
}
