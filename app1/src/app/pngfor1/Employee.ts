export class Employee {
    empId:number;
    empName:string;
    empSalary:number;   

    constructor(id:number,name:string,salary:number){
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
    }
}