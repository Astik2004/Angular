package com.astik.insurance_report.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class SearchRequest {
    private String planName;
    private String planStatus;
    private String gender;
    private LocalDate startDate;
    private LocalDate endDate;
}
