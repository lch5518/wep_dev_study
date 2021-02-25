//let studentID: number = 12345;
//let studentName: string = 'Jenny Kim';
//let age: number =21;
//let gender: string = 'female';
//let subject: string = 'Javascript';
//let courseCompleted: boolean = false;
var GenderType;
(function (GenderType) {
    GenderType[GenderType["male"] = 0] = "male";
    GenderType[GenderType["female"] = 1] = "female";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 454545,
    studentName: 'Bart Simpson',
    age: 10,
    gender: GenderType.male,
    subject: 'Node JS',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark Jacobs',
        gender: GenderType.male,
        subject: 'Node JS',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails({
    studentID: 121212,
    studentName: 'Janet Jackson',
    age: 30,
    gender: GenderType.female,
    subject: 'Node JS',
    courseCompleted: false
});
saveStudentDetails(student1);
