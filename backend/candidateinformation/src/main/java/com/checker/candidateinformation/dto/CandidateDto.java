package com.checker.candidateinformation.dto;

import jakarta.persistence.Column;
import lombok.*;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CandidateDto {

    private Integer candidateId;

    private String name;

    private String email;

    private String phone;

    private String zipcode;

    private String socialSecurity;

    private String driverLicence;

    private Date candidateCreatedAt;

    private String location;

    private Date date;

    private Date dob;

    private String status;

    private String adjudication;

    private String packageData;

    private Date createdAt;

    private Date completedDate;

    private String turnAroundTime;
}
