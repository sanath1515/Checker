package com.checker.adverseaction.repository;

import com.checker.adverseaction.entity.AdverseAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdverseActionRepository  extends JpaRepository<AdverseAction,Integer>{
}
