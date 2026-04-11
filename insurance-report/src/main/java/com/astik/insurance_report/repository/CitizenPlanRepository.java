package com.astik.insurance_report.repository;


import com.astik.insurance_report.entity.CitizenPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CitizenPlanRepository extends JpaRepository<CitizenPlan, Integer> {
    long countByPlanStatus(String planStatus);
    long countByPlanName(String planName);
}
