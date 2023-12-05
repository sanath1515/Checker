package com.checker.courtsearch.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "court_searches")
@Data
public class CourtSearch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "court_searches_id")
    private Integer id;

    @Column(name = "search",nullable = false)
    private String search;

    @Column(name = "status",nullable = false)
    private String status;

    @Column(name = "verification_date",nullable = false)
    private Date verificationDate;

    @Column(name="candidate_candidate_id",nullable = false)
    private Integer candidateId;



}
