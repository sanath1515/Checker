package com.checker.adverseaction.controller;

import com.checker.adverseaction.dto.AdverseActionDTO;
import com.checker.adverseaction.service.AdverseActionService;
import com.checker.adverseaction.vo.ResponseTemplateVO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class AdverseActionControllerTest {

    private MockMvc mockMvc;

    @Mock
    private AdverseActionService adverseActionService;

    @InjectMocks
    private AdverseActionController adverseActionController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(adverseActionController).build();
    }

//    @Test
//    void testGetAllAdverseActions() throws Exception {
//
//        List<ResponseTemplateVO> mockAdverseActions = new ArrayList<>();
//
//        when(adverseActionService.getAdverseWithName()).thenReturn(mockAdverseActions);
//
//        mockMvc.perform(get("/adverse_action"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
//                .andExpect(jsonPath("$.length()").value(mockAdverseActions.size()));
//    }
//

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSaveAdverseActionData() {
        AdverseActionDTO newAdverseActionDTO = new AdverseActionDTO(); // Create your DTO object here
        when(adverseActionService.SaveAdverseActionData(newAdverseActionDTO)).thenReturn("Data saved successfully");

        String response = adverseActionController.saveAdverseActionData(newAdverseActionDTO);

        assertEquals("Data saved successfully", response);
    }

    @Test
    public void testGetById() {
        int id = 1; // Set the ID you want to test
        AdverseActionDTO mockAdverseActionDTO = new AdverseActionDTO(); // Create a mock DTO object
        when(adverseActionService.getById(id)).thenReturn(mockAdverseActionDTO);

        ResponseEntity<AdverseActionDTO> response = adverseActionController.getById(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockAdverseActionDTO, response.getBody());
    }

    @Test
    public void testDelete() {
        int id = 1; // Set the ID you want to test
        when(adverseActionService.deleteById(id)).thenReturn("Data deleted successfully");

        String response = adverseActionController.delete(id);

        assertEquals("Data deleted successfully", response);
    }


    @Test
    void testGetCandidateName() {
        List<ResponseTemplateVO> expectedList = Arrays.asList(
                new ResponseTemplateVO(1, "John"),
                new ResponseTemplateVO(2, "Serene")
        );
        when(adverseActionService.getAdverseWithName()).thenReturn(expectedList);

        List<ResponseTemplateVO> actualList = adverseActionController.getCandidateName();
        assertEquals(expectedList, actualList);
    }

    private String asJsonString(final Object obj) {
        try {
            return new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
