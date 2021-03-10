var someValue: any = 5;
someValue = 'hello';
someValue = 52;

// any타입은 추상적이라 개발자의 의도를 기술하기 어려움


let someValue2: number | string = 5;
someValue2 = 'free';
// someValue2 = true; 에러

// 유니언타입
type Str_Or_Num = string | number;

let test: Str_Or_Num
test = 5;
test = 'clear';
// test = true; 에러

let itemPrice: number;


/*  에러 price의 타입과 itemPrice의 타입에 문제가 있다
const setItemPrice = (price: Str_Or_Num): void => {
        itemPrice = price;
};
setItemPrice(50);
*/

const setItemPrice = (price: Str_Or_Num): void => {
        if(typeof price === 'string') // 타입가드를 활용해서 유니언타입을 검증
        {
                itemPrice = 0;
        }
        else {
                itemPrice = price;
        }
};
setItemPrice(50);