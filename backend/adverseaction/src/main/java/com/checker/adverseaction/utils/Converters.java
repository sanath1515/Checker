package com.checker.adverseaction.utils;

import com.checker.adverseaction.dto.AdverseActionDTO;
import com.checker.adverseaction.entity.AdverseAction;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converters {

    @Autowired
    private ModelMapper modelMapper;

    public AdverseActionDTO entityToDto(AdverseAction adverseAction){
        return modelMapper.map(adverseAction,AdverseActionDTO.class);
    }
    public AdverseAction dtoToEntity(AdverseActionDTO adverseActionDTO){
        return modelMapper.map(adverseActionDTO,AdverseAction.class);
    }
}
