var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var courseCompleted = false;
var student1 = {
    studentID: 454545,
    studentName: 'Bart Simpson',
    age: 10,
    gender: 'male',
    subject: 'Node JS',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark Jacobs',
        gender: 'male',
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
    gender: 'female',
    subject: 'Node JS',
    courseCompleted: false
});
saveStudentDetails(student1);
