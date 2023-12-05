package com.checker.adverseaction.service;

import com.checker.adverseaction.dto.AdverseActionDTO;
import com.checker.adverseaction.vo.ResponseTemplateVO;

import java.util.List;

public interface AdverseActionService {


   AdverseActionDTO getById(Integer adverseActionId);
   String SaveAdverseActionData(AdverseActionDTO newAdverseActionDTO);

  String deleteById(Integer adverseActionId);
  List<ResponseTemplateVO> getAdverseWithName();

}
