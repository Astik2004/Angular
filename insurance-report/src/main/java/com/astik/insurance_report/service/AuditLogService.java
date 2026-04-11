package com.astik.insurance_report.service;

import com.astik.insurance_report.entity.AuditLog;
import com.astik.insurance_report.repository.AuditLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AuditLogService {
    @Autowired
    private AuditLogRepository repo;

    public void logAction(String action, String description, String username) {
        AuditLog log = new AuditLog();
        log.setAction(action);
        log.setDescription(description);
        log.setUsername(username);
        log.setTimestamp(LocalDateTime.now());
        repo.save(log);
    }

    public List<AuditLog> getAllLogs() {
        return repo.findAllByOrderByTimestampDesc();
    }
}