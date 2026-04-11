package com.astik.insurance_report.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "SYSTEM_AUDIT_LOGS")
@Data
public class AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer logId;
    private String action;
    private String description;
    private LocalDateTime timestamp;
    private String username;
}
