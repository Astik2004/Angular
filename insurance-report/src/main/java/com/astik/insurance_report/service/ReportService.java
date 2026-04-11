package com.astik.insurance_report.service;

import com.astik.insurance_report.dto.SearchRequest;
import com.astik.insurance_report.entity.CitizenPlan;
import com.astik.insurance_report.repository.CitizenPlanRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import com.lowagie.text.Row.*;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReportService {

    @Autowired
    private CitizenPlanRepository planRepo;

    @Autowired
    private AuditLogService auditLogService;

    public boolean savePlan(CitizenPlan plan) {
        CitizenPlan savedPlan = planRepo.save(plan);
        if (savedPlan.getCitizenId() != null) {
            auditLogService.logAction("CREATE", "Created new " + plan.getPlanName() + " plan for " + plan.getCitizenName(), "Admin");
            return true;
        }
        return false;
    }

    public List<CitizenPlan> searchPlans(SearchRequest request) {
        CitizenPlan entity = new CitizenPlan();

        if (request.getPlanName() != null && !request.getPlanName().isEmpty())
            entity.setPlanName(request.getPlanName());

        if (request.getPlanStatus() != null && !request.getPlanStatus().isEmpty())
            entity.setPlanStatus(request.getPlanStatus());

        if (request.getGender() != null && !request.getGender().isEmpty())
            entity.setGender(request.getGender());

        Example<CitizenPlan> example = Example.of(entity);
        return planRepo.findAll(example);
    }

    public void exportExcel(HttpServletResponse response) throws Exception {
        List<CitizenPlan> plans = planRepo.findAll();

        XSSFWorkbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Citizens Info");

        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("ID");
        headerRow.createCell(1).setCellValue("Citizen Name");
        headerRow.createCell(2).setCellValue("Plan Name");
        headerRow.createCell(3).setCellValue("Status");
        headerRow.createCell(4).setCellValue("Start Date");
        headerRow.createCell(5).setCellValue("End Date");

        int dataRowIndex = 1;
        for (CitizenPlan plan : plans) {
            Row dataRow = sheet.createRow(dataRowIndex);
            dataRow.createCell(0).setCellValue(plan.getCitizenId());
            dataRow.createCell(1).setCellValue(plan.getCitizenName());
            dataRow.createCell(2).setCellValue(plan.getPlanName());
            dataRow.createCell(3).setCellValue(plan.getPlanStatus());
            dataRow.createCell(4).setCellValue(plan.getPlanStartDate().toString());
            dataRow.createCell(5).setCellValue(plan.getPlanEndDate() != null ? plan.getPlanEndDate().toString() : "N/A");
            dataRowIndex++;
        }

        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();
        outputStream.close();
    }

    public void exportPdf(HttpServletResponse response) throws Exception {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();

        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setSize(18);
        Paragraph p = new Paragraph("Citizens Plan Report", font);
        p.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(p);

        PdfPTable table = new PdfPTable(6);
        table.setWidthPercentage(100f);
        table.setSpacingBefore(10);

        table.addCell("ID");
        table.addCell("Name");
        table.addCell("Plan");
        table.addCell("Status");
        table.addCell("Start Date");
        table.addCell("End Date");

        List<CitizenPlan> plans = planRepo.findAll();
        for (CitizenPlan plan : plans) {
            table.addCell(String.valueOf(plan.getCitizenId()));
            table.addCell(plan.getCitizenName());
            table.addCell(plan.getPlanName());
            table.addCell(plan.getPlanStatus());
            table.addCell(plan.getPlanStartDate().toString());
            table.addCell(plan.getPlanEndDate() != null ? plan.getPlanEndDate().toString() : "N/A");
        }

        document.add(table);
        document.close();
    }
}