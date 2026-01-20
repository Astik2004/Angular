import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
@Component({
  selector: 'app-pngfor1',
  imports: [CommonModule],
  templateUrl: './pngfor1.html',
  styleUrl: './pngfor1.css',
})
export class Pngfor1 {
  employees=[
    {empId:101,empName:"Alice",empSalary:45000},
    {empId:102,empName:"Bob",empSalary:55000},
    {empId:103,empName:"Charlie",empSalary:65000},
    {empId:104,empName:"David",empSalary:75000},
    {empId:105,empName:"Eve",empSalary:85000},
    {empId:106,empName:"Frank",empSalary:95000},
    
  ];
}
