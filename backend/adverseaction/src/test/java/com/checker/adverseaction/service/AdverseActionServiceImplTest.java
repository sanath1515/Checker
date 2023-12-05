package com.checker.adverseaction.service;

import com.checker.adverseaction.Enum.ActionStatus;
import com.checker.adverseaction.dto.AdverseActionDTO;
import com.checker.adverseaction.entity.AdverseAction;
import com.checker.adverseaction.exception.AdverseNotFoundException;
import com.checker.adverseaction.repository.AdverseActionRepository;
import com.checker.adverseaction.utils.Converters;
import com.checker.adverseaction.vo.CandidateInformation;
import com.checker.adverseaction.vo.ResponseTemplateVO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.stubbing.Answer;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.checker.adverseaction.utils.Constants.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.mockito.Mockito;
class AdverseActionServiceImplTest {

    @Mock
    private AdverseActionRepository adverseActionRepository;

    @Mock
    private Converters converters;
    @Mock
    private ModelMapper modelMapper;

    @Mock
    private RestTemplate candidateRestTemplate;

    @InjectMocks
    private AdverseActionServiceImpl adverseActionService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetByIdExistingId() {
        Integer existingId = 1;
        AdverseAction mockAdverseAction = new AdverseAction();
        AdverseActionDTO adverseActionDTO=new AdverseActionDTO();
        when(adverseActionRepository.findById(existingId)).thenReturn(Optional.of(mockAdverseAction));
        when(adverseActionService.getById(existingId)).thenReturn(adverseActionDTO);

        AdverseActionDTO result = adverseActionService.getById(existingId);

        assertNotNull(result);
    }

    @Test
    void testGetByIdNonExistingId() {
       Integer nonExistingId = 100;
        when(adverseActionRepository.findById(nonExistingId)).thenReturn(Optional.empty());

        assertThrows(AdverseNotFoundException.class, () -> adverseActionService.getById(nonExistingId));
    }



    @Test
    void testSaveAdverseActionData() {
        AdverseActionDTO newAdverseActionDTO = new AdverseActionDTO();
        AdverseAction mockAdverseAction = new AdverseAction();

        when(converters.dtoToEntity(newAdverseActionDTO)).thenReturn(mockAdverseAction);
        when(adverseActionRepository.save(mockAdverseAction)).thenReturn(mockAdverseAction);

        String result = adverseActionService.SaveAdverseActionData(newAdverseActionDTO);

        assertEquals(SAVE_DATA, result);
    }

    @Test
    void testDeleteById() {
        Integer adverseActionId = 1;

        String result = adverseActionService.deleteById(adverseActionId);

        assertEquals(DELETE_DATA, result);
        verify(adverseActionRepository, times(1)).deleteById(adverseActionId);
    }

    @Test
    void testGetAdverseWithName() {
        List<AdverseAction> mockAdverseActionList = new ArrayList<>();
        mockAdverseActionList.add(new AdverseAction());
        when(adverseActionRepository.findAll()).thenReturn(mockAdverseActionList);

        CandidateInformation candidateInfo = new CandidateInformation();
        candidateInfo.setCandidateId(1);
        candidateInfo.setName("John Doe");
        List<CandidateInformation> mockCandidateInformationList = Arrays.asList(candidateInfo);
        when(candidateRestTemplate.getForObject("http://localhost:9000/api/v1/candidates", CandidateInformation[].class))
                .thenReturn(mockCandidateInformationList.toArray(new CandidateInformation[0]));

        List<ResponseTemplateVO> result = adverseActionService.getAdverseWithName();
        assertEquals(1, result.size());
        assertEquals(1, result.get(0).getCandidateId());
        assertEquals("John Doe", result.get(0).getName());
    }
}


