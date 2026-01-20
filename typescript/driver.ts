import { Student } from "./student";

let s=new Student(101,"John Doe",5,88);
console.log(s.getDetails());
console.log("Grade of the student is :: "+s.getGrade());    
console.log("Student Name is :: "+s.getStudentName());

console.log("Student ID is :: "+s.getStudentId());
console.log("Student Rank is :: "+s.getStudentRank());
console.log("Student Marks is :: "+s.getStudentMarks());  
console.log("College Name is :: "+s.getCollegeName());
console.log("College Address is :: "+s.getCollegeAddress());      