package com.checker.adverseaction.vo;


import com.checker.adverseaction.Enum.ActionStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseTemplateVO {

    private Integer candidateId;

    private String name;

    private ActionStatus actionStatus;

    private Date preNoticeTime;

    private Date postNoticeTime;

    public ResponseTemplateVO(Integer candidateId,String name) {
        this.candidateId = candidateId;
        this.name=name;
    }
}
