import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './Employee';

@Component({
  selector: 'app-pngfor1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pngfor1.html',
  styleUrl: './pngfor1.css',
})
export class Pngfor1 {

  employees: Employee[] = [
    new Employee(101, 'Alice', 45000),
    new Employee(102, 'Bob', 55000),
    new Employee(103, 'Charlie', 65000),
  ];

  newEmp: Employee = new Employee(0, '', 0);
  editIndex: number | null = null;

  // CREATE / UPDATE
  onSave(): void {

    if (!this.newEmp.empId || !this.newEmp.empName || !this.newEmp.empSalary) {
      alert('All fields are required');
      return;
    }

    if (this.editIndex === null) {
      // CREATE
      this.employees.push(
        new Employee(
          this.newEmp.empId,
          this.newEmp.empName,
          this.newEmp.empSalary
        )
      );
    } else {
      // UPDATE
      this.employees[this.editIndex] = new Employee(
        this.newEmp.empId,
        this.newEmp.empName,
        this.newEmp.empSalary
      );
      this.editIndex = null;
    }

    this.newEmp = new Employee(0, '', 0);
  }

  // EDIT
  onEdit(index: number): void {
    this.newEmp = { ...this.employees[index] };
    this.editIndex = index;
  }

  // DELETE
  onDelete(index: number): void {
    if (confirm('Are you sure?')) {
      this.employees.splice(index, 1);
    }
  }
}
