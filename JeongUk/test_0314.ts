let fullName: string = `JeongUk Bae`
let age: number = 29;
let sentence: string = `Hello, my name is ${fullName}.
        I'll be ${age + 1} years old next year.`

let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
        "I'll be " + (age + 1) + "years old next year."



let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


let x: [string, number]; // 튜플
x = ["hello", 10];
// x = [10, "hello"];   에러

enum Color {Red, Blue, Green}
let c: Color = Color.Red;

// unknown 타입은 any타입처럼 모든 타입을 한다
let test_unknown: unknown = 30;
let b = test_unknown === 123;
// let d = test_unknown + 10;   unknown타입은 비교연산이나 반전에 쓰임

