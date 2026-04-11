package com.astik.insurance_report.controller;

import com.astik.insurance_report.entity.AuditLog;
import com.astik.insurance_report.service.AuditLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/logs")
@CrossOrigin(origins = "http://localhost:4200")
public class AuditLogController {
    @Autowired
    private AuditLogService auditLogService;

    @GetMapping
    public ResponseEntity<List<AuditLog>> getSystemLogs() {
        return new ResponseEntity<>(auditLogService.getAllLogs(), HttpStatus.OK);
    }
}
