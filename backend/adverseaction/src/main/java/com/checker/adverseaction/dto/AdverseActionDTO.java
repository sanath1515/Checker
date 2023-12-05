package com.checker.adverseaction.dto;

import lombok.*;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdverseActionDTO {
    private Integer id;
    private String status;
    private Date preNoticeDate;
    private Date postNoticeDate;
    private Integer candidateCandidateId;

}