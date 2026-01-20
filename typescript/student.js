"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name, rank, marks) {
        this.studentId = id;
        this.studentName = name;
        this.studentRank = rank;
        this.studentMarks = marks;
    }
    Student.prototype.getCollegeName = function () {
        return "Ashok IT";
    };
    Student.prototype.getCollegeAddress = function () {
        return "Mumbai, India";
    };
    Student.prototype.getDetails = function () {
        return "Student Details: ID = ".concat(this.studentId, ", Name = ").concat(this.studentName, ", Rank = ").concat(this.studentRank, ", Marks = ").concat(this.studentMarks);
    };
    Student.prototype.getGrade = function () {
        if (this.studentMarks >= 90) {
            return 'A';
        }
        else if (this.studentMarks >= 75) {
            return 'B';
        }
        else if (this.studentMarks >= 50) {
            return 'C';
        }
        else {
            return 'D';
        }
    };
    Student.prototype.getStudentMarks = function () {
        return this.studentMarks;
    };
    Student.prototype.getStudentRank = function () {
        return this.studentRank;
    };
    Student.prototype.getStudentName = function () {
        return this.studentName;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}());
exports.Student = Student;
