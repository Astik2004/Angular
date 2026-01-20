import { College } from "./college";

export class Student implements College {
    studentId: number;
    studentName: string;
    studentRank : number;
    studentMarks: number;
  

    constructor(id: number, name: string, rank: number, marks: number){
        this.studentId = id;
        this.studentName = name;
        this.studentRank = rank;
        this.studentMarks = marks;
    }
    getCollegeName(): string {
        return "Ashok IT";
    }
    getCollegeAddress(): string {
        return "Mumbai, India";}
    getDetails(): string{
        return `Student Details: ID = ${this.studentId}, Name = ${this.studentName}, Rank = ${this.studentRank}, Marks = ${this.studentMarks}`;
    }   
    getGrade(): string{
        if(this.studentMarks >= 90){
            return 'A';
        } else if(this.studentMarks >= 75){
            return 'B';
        } else if(this.studentMarks >= 50){
            return 'C';
        } else {
            return 'D';
        }       
    }
    getStudentMarks(): number{
        return this.studentMarks;
    }   
    getStudentRank(): number{
        return this.studentRank;
    }   
    getStudentName(): string{
        return this.studentName;
    }
    getStudentId(): number{
        return this.studentId;
    }   
}