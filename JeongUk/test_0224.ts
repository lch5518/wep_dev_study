//let studentID: number = 12345;
//let studentName: string = 'Jenny Kim';
//let age: number =21;
//let gender: string = 'female';
//let subject: string = 'Javascript';
//let courseCompleted: boolean = false;

enum GenderType {
        male,
        female
}

let student1 = {
        studentID: 454545,
        studentName: 'Bart Simpson',
        age: 10,
        gender: GenderType.male,
        subject: 'Node JS',
        courseCompleted: false
}

interface Student {
        studentID: number;
        studentName: string;
        age?: number;
        gender: GenderType;
        subject: string;
        courseCompleted: boolean;

        //addComment (comment: string): string;
        //addComment: (comment: string) => string;
}

function getStudentDetails(studentID: number): Student {
        return {
                studentID: 123456,
                studentName: 'Mark Jacobs',
                gender: GenderType.male ,
                subject: 'Node JS' ,
                courseCompleted: true
        };
}

function saveStudentDetails (student: Student): void {

}

saveStudentDetails({
        studentID: 121212,
        studentName: 'Janet Jackson',
        age: 30,
        gender: GenderType.female ,
        subject: 'Node JS' ,
        courseCompleted: false
})

saveStudentDetails(student1);