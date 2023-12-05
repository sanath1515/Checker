package com.checker.adverseaction.service;

import com.checker.adverseaction.dto.AdverseActionDTO;
import com.checker.adverseaction.entity.AdverseAction;
import com.checker.adverseaction.exception.AdverseNotFoundException;
import com.checker.adverseaction.repository.AdverseActionRepository;
import com.checker.adverseaction.utils.Converters;
import com.checker.adverseaction.vo.CandidateInformation;
import com.checker.adverseaction.vo.ResponseTemplateVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


import static com.checker.adverseaction.utils.Constants.*;

@Service
public class AdverseActionServiceImpl implements AdverseActionService {



    private Converters converters;

//    @Autowired
    private AdverseActionRepository adverseActionRepository;


    private RestTemplate candidateRestTemplate;



    @Autowired
    public AdverseActionServiceImpl(RestTemplate restTemplate,AdverseActionRepository adverseActionRepository,Converters converters) {
        this.candidateRestTemplate = restTemplate;
        this.adverseActionRepository=adverseActionRepository;
        this.converters = converters;

    }


    @Override
    public AdverseActionDTO getById(Integer adverseActionId) {
        Optional<AdverseAction> adverseAction = adverseActionRepository.findById(adverseActionId);
        if (adverseAction.isEmpty()) {
            throw new AdverseNotFoundException("Adverse action with Id - " + adverseActionId + NOT_FOUND);
        }

        AdverseActionDTO adverseActionDTO = converters.entityToDto(adverseAction.get());
        return adverseActionDTO;
    }

    @Override
    public String SaveAdverseActionData(AdverseActionDTO newAdverseActionDTO) {
        AdverseAction adverseAction = converters.dtoToEntity(newAdverseActionDTO);
        adverseActionRepository.save(adverseAction);
        return SAVE_DATA;
    }

    @Override
    public String deleteById(Integer adverseActionId) {
        adverseActionRepository.deleteById(adverseActionId);
        return DELETE_DATA;
    }

    @Override
    public List<ResponseTemplateVO> getAdverseWithName() {
        List<ResponseTemplateVO> responseList = new ArrayList<>();
        List<AdverseAction> adverseActionList = adverseActionRepository.findAll();

        try {
            List<CandidateInformation> candidateInformationList = Arrays.asList(
                    candidateRestTemplate.getForObject("https://be-bc119.bootcamp64.tk/api/v1/candidates", CandidateInformation[].class)
            );
            int maxSize = Math.min(candidateInformationList.size(), adverseActionList.size());
            int adverseIndex = 0;

            for (int i = 0; i < maxSize; i++) {
                CandidateInformation candidateInfo = candidateInformationList.get(i);
                ResponseTemplateVO vo = new ResponseTemplateVO();
                vo.setCandidateId(candidateInfo.getCandidateId());
                vo.setName(candidateInfo.getName());

                if (adverseIndex < adverseActionList.size()) {
                    AdverseAction adverseAction = adverseActionList.get(adverseIndex);
                    vo.setActionStatus(adverseAction.getStatus());
                    vo.setPreNoticeTime(adverseAction.getPostNoticeDate());
                    vo.setPostNoticeTime(adverseAction.getPostNoticeDate());

                    adverseIndex++;
                }
                responseList.add(vo);
            }


        } catch (Exception ex) {
            throw new AdverseNotFoundException(REST_CALL_ERROR);
        }


        return responseList;
    }


}
