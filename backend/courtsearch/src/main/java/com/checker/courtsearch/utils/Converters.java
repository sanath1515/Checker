package com.checker.courtsearch.utils;


import com.checker.courtsearch.dto.CourtSearchDto;
import com.checker.courtsearch.entity.CourtSearch;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converters {
    @Autowired
    private ModelMapper modelMapper;

    public CourtSearchDto entityToDto(CourtSearch courtSearch){
        return modelMapper.map(courtSearch,CourtSearchDto.class);
    }

    public CourtSearch dtoToEntity(CourtSearchDto courtSearchDto){
        return modelMapper.map(courtSearchDto,CourtSearch.class);
    }
}
