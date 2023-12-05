package com.checker.candidateinformation.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Entity
@Table(name="candidate")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "candidate_id")
    private Integer candidateId;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "zipcode")
    private String zipcode;

    @Column(name = "social_security")
    private String socialSecurity;

    @Column(name = "driver_licence")
    private String driverLicence;

    @Column(name = "candidate_created_at")
    private Date candidateCreatedAt;

    @Column(name = "location")
    private String location;

    @Column(name = "date")
    private Date date;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "status")
    private String status;

    @Column(name = "adjudication")
    private String adjudication;

    @Column(name = "package")
    private String packageData;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "completed_date")
    private Date completedDate;

    @Column(name = "turn_around_time")
    private String turnAroundTime;
}
