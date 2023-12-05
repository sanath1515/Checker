package com.checker.adverseaction.entity;

import com.checker.adverseaction.Enum.ActionStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "adverse_action")
public class AdverseAction {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private ActionStatus  status;
    @Column(name = "pre_notice_date")
    private Date preNoticeDate;
    @Column(name = "post_notice_date")
    private Date postNoticeDate;
    @Column(name = "candidate_candidate_id")
    private long candidateId;
}
