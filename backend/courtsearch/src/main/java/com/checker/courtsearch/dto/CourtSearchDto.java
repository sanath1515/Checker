package com.checker.courtsearch.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourtSearchDto {
    private Integer id;
    private String search;
    private String status;
    private Date verificationDate;
    private Integer candidateId;
}
