package com.checker.candidateinformation.service;

import com.checker.candidateinformation.dto.CandidateDto;
import com.checker.candidateinformation.entity.Candidate;
import com.checker.candidateinformation.exception.CandidateNotFoundException;
import com.checker.candidateinformation.repository.CandidateRepository;
import com.checker.candidateinformation.utils.Converters;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.checker.candidateinformation.utils.Constants.UPDATED;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
class CandidateInformationServiceImplTest {

    @Mock
    private CandidateRepository candidateRepository;
    @Mock
    private Converters converters;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private CandidateServiceImpl candidateService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testUpdate_WithExistingCandidate_ReturnsUpdatedCandidateInformationDTO() {
        Integer candidateId = 1;
        CandidateDto candidateDto = new CandidateDto();
        candidateDto.setCandidateId(1);
        candidateDto.setAdjudication("engage");

        Candidate existingCandidate = new Candidate();
        existingCandidate.setCandidateId(1);
        existingCandidate.setAdjudication("-");

        when(candidateRepository.findById(candidateId)).thenReturn(Optional.of(existingCandidate));
        when(modelMapper.map(candidateDto,Candidate.class)).thenReturn(existingCandidate);
        when(converters.dtoToEntity(candidateDto)).thenReturn(existingCandidate);

        String result = candidateService.updatedCandidate(candidateId, candidateDto);

        assertEquals(UPDATED, result);
        assertEquals("engage", existingCandidate.getAdjudication());
    }

    @Test
    void testUpdate_WithNonexistentCandidate_ThrowsCandidateNotFound() {
        Integer candidateId = 1;
        CandidateDto candidateDto = new CandidateDto();

        when(candidateRepository.findById(candidateId)).thenReturn(Optional.empty());

        assertThrows(CandidateNotFoundException.class, () -> {
            candidateService.updatedCandidate(candidateId, candidateDto);
        });
    }

    @Test
    void testFindAll_ReturnsListOfCandidateInformationDTOs() {
        Candidate candidate1 = new Candidate();
        candidate1.setCandidateId(1);
        candidate1.setName("John Smith");

        Candidate candidate2 = new Candidate();
        candidate2.setCandidateId(2);
        candidate2.setName("Serene");

        List<Candidate> candidatesList = Arrays.asList(candidate1, candidate2);

        when(candidateRepository.findAll()).thenReturn(candidatesList);

        CandidateDto candidateDto1 = new CandidateDto();
        candidateDto1.setCandidateId(1);
        candidateDto1.setName("John Smith");

        CandidateDto candidateDto2 = new CandidateDto();
        candidateDto2.setCandidateId(2);
        candidateDto2.setName("Serene");

        List<CandidateDto> expectedDtos = Arrays.asList(candidateDto1, candidateDto2);

        when(converters.entityToDto(candidate1)).thenReturn(candidateDto1);
        when(converters.entityToDto(candidate2)).thenReturn(candidateDto2);

        List<CandidateDto> result = candidateService.getAllCandidates();

        assertEquals(expectedDtos, result);
    }


    @Test
    void testFindById_WithValidId_ReturnsCandidateInformationDTO() {
        Integer candidateId = 1;
        Candidate candidate = new Candidate();
        CandidateDto expectedDto = new CandidateDto();

        when(candidateRepository.findById(candidateId)).thenReturn(Optional.of(candidate));
        when(candidateService.getCandidateById(candidateId)).thenReturn(expectedDto);

        CandidateDto result = candidateService.getCandidateById(candidateId);

        assertEquals(expectedDto, result);
    }

    @Test
    void testFindById_WithInvalidId_ThrowsCandidateNotFound() {
        Integer candidateId = 1;

        when(candidateRepository.findById(candidateId)).thenReturn(Optional.empty());

        assertThrows(CandidateNotFoundException.class, () -> {
            candidateService.getCandidateById(candidateId);
        });
    }
}
