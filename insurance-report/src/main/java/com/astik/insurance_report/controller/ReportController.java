package com.astik.insurance_report.controller;

import com.astik.insurance_report.dto.SearchRequest;
import com.astik.insurance_report.entity.CitizenPlan;
import com.astik.insurance_report.repository.CitizenPlanRepository;
import com.astik.insurance_report.service.ReportService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:4200")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private CitizenPlanRepository planRepo;

    @PostMapping("/save")
    public ResponseEntity<String> savePlan(@RequestBody CitizenPlan plan) {
        boolean isSaved = reportService.savePlan(plan);
        if (isSaved) {
            return new ResponseEntity<>("Citizen Plan Record Saved Successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to Save Record", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/search")
    public ResponseEntity<List<CitizenPlan>> search(@RequestBody SearchRequest request) {
        return new ResponseEntity<>(reportService.searchPlans(request), HttpStatus.OK);
    }

    @GetMapping("/excel")
    public void exportExcel(HttpServletResponse response) throws Exception {
        response.setContentType("application/octet-stream");
        String headerKey = "Content-Disposition";
        String headerValue = "inline; filename=Citizens_Plans_Report.xls";
        response.setHeader(headerKey, headerValue);
        reportService.exportExcel(response);
    }

    @GetMapping("/pdf")
    public void exportPdf(HttpServletResponse response) throws Exception {
        response.setContentType("application/pdf");

        String headerKey = "Content-Disposition";
        String headerValue = "inline; filename=Citizens_Plans_Report.pdf";
        response.setHeader(headerKey, headerValue);
        reportService.exportPdf(response);
    }

    @GetMapping("/analytics")
    public ResponseEntity<Map<String, Long>> getAnalytics() {
        Map<String, Long> analyticsData = new HashMap<>();

        analyticsData.put("approved", planRepo.countByPlanStatus("Approved"));
        analyticsData.put("denied", planRepo.countByPlanStatus("Denied"));
        analyticsData.put("terminated", planRepo.countByPlanStatus("Terminated"));

        analyticsData.put("cash", planRepo.countByPlanName("Cash"));
        analyticsData.put("food", planRepo.countByPlanName("Food"));
        analyticsData.put("medical", planRepo.countByPlanName("Medical"));
        analyticsData.put("employment", planRepo.countByPlanName("Employment"));

        return new ResponseEntity<>(analyticsData, HttpStatus.OK);
    }
}
