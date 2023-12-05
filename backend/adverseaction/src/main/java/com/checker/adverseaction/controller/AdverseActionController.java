package com.checker.adverseaction.controller;
import com.checker.adverseaction.dto.AdverseActionDTO;
import com.checker.adverseaction.service.AdverseActionService;
import com.checker.adverseaction.vo.ResponseTemplateVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


import static com.checker.adverseaction.utils.Constants.BASEURL;

@RestController
@RequestMapping(BASEURL)
@CrossOrigin
public class AdverseActionController {

    @Autowired
    private AdverseActionService adverseActionService;


    @PostMapping()
    public String saveAdverseActionData(@RequestBody AdverseActionDTO newAdverseActionData){
        String customResponse=adverseActionService.SaveAdverseActionData( newAdverseActionData);
        return customResponse;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdverseActionDTO> getById(@PathVariable("id") Integer id){

        AdverseActionDTO adverseActionDTO = adverseActionService.getById(id);
        return ResponseEntity.ok(adverseActionDTO);

    }


    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Integer id) {

        String customResponse= adverseActionService.deleteById(id);
        return customResponse;

    }


    @GetMapping("/allCandidates")
    public List<ResponseTemplateVO> getCandidateName(){
        return adverseActionService.getAdverseWithName();
    }

}
