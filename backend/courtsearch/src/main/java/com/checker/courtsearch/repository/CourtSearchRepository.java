package com.checker.courtsearch.repository;

import com.checker.courtsearch.entity.CourtSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourtSearchRepository extends JpaRepository<CourtSearch,Integer> {

}
