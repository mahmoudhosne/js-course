// // let jsMsg = 'We love js';
// // console.log(jsMsg);

// //5 is value

// // let firstName = "Mahmoud";
// // let first_name = 'Mahmoud';

// // let 3years = 3;
// // let x&y = 4;
// // let new = 4;
// // let function = 5;
// // let _item = 5;
// // let x$y = 5;

// // let PI = 3.14;

// //Data Types
// // Number => let x= 10;
// // String => let x = 'test'
// // Boolean => let x = true;
// // unddefined => let x;
// // null
// // Symbol (ES2015)
// // Bigint (ES2020)

// // let isFoundInItems = true;
// // console.log(typeof isFoundInItems);

// // let year;
// // console.log(typeof typeof year);
// // console.log(typeof null); //bug in js

// // let  canTest = true;
// // var job = 'programmer';

// // const birthYear = 1989;

// // // can mutate => var sure will  change

// // //Math Operators
// // // +,-,/,*

// // let x = 10;
// // const y = 20;
// // console.log(x*y);

// // console.log('Mahmoud' +' '+'Ali')

// // // Assignment operators
// // x +=1;
// // x++;
// // x--;
// // x-=1;

// // //Comparison Operators
// // // > < >= <=</>
// // let now = 2023;
// // let ahmedAge = now - 1989; 3
// // let aliAge = now - 1980; 4

// // console.log(ahmedAge > aliAge);

// // console.log(ahmedAge); //34
// // console.log(aliAge); //43

// // console.log( (ahmedAge + aliAge) /  2);

// // // BMI = mass / height * height **2 <height im m>
// // // ahmed => mass = 78 height 169CM
// // // mahmoud => mass = 92 height 195CM

// // let ahmed = 78;
// // let mahmoud = 92;

// const firstName = 'Mahmoud'; //'123'
// const job = 'Programmer';
// const birthYear = 1980;
// const now = 2023;

// // const msg =
// //   "i'm " + firstName + ', my job is ' + job + ' my age is ' + (now - birthYear);
// const msg = `i'm ${firstName}, my job is ${job} my age is ${now - birthYear}`; //backtec - template literals
// console.log(msg);

// // {id:1, birthYear: 1990}
// const age = 18;

// // if (boolean) {
// // } else if (boolean) {
// // } else {
// // }
// // ==================================================================

// if (age >= 18) {
//   console.log('Mahmoud can start driving license');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Mahmoud is yound , wait ${yearsLeft} years`);
// }
// const year = '1991';
// console.log(Number(year) - 20);
// console.log(Number('m'));
// console.log(String(3), 3);

// // type coercion
// console.log('my age is ' + 23);
// console.log('23' + '10' - 3);
// console.log('10' / '2');
// let n = '1' + 1;
// ('11');
// n = n - 1;
// console.log(n);

// console.log(true + 1);

// console.log('1' + true);

// console.log('1' - true);

// //faLST VALUES : 0 , '',UNDEFINED, NULL,NAN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Mahmoud'));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const input = '';
// if (input) {
//   console.log(111111);
// }
// let height;
// console.log(height);
// if (height) {
//   console.log('Height is ok from backend');
// } else {
//   console.log('height is undefined');
// }

// // ==================================================================
// // let obj = {};
// // let dataOfClient = {
// //   name: 'mahmoud',
// //   birthYear: 2000,
// //   now: 2023,
// //   notAllowed: 18,
// //   calc: function () {
// //     let clientAge = this.now - this.birthYear;
// //     if (clientAge >= this.notAllowed) {
// //       return `sir ${this.name} you can drive
// //       drive cars and get license `;
// //     } else {
// //       return `sir ${this.name} you can't drive cars
// //       be cause you must waite ${this.notAllowed - clientAge}
// //       years `;
// //     }
// //   },
// // };

// // console.log(dataOfClient.calc());

// equality operators == , ===

// const age = '18';

// if (age === '' + 18) console.log('(Strict equal)');
// if (age == 18) console.log('(loosely equal)');

// const favourite = Number(prompt('whats is your favourite number ?'));
// // console.log(typeof favourite);
// if (favourite === 8) {
//   console.log('you entered 8, it is ok');
// } else if (favourite === 9) {
//   console.log('you entered 9, it is ok');
// } else if (favourite === 10) {
//   console.log('you entered 10, it is ok');
// } else {
//   console.log('number is not 8 or 9 or 10');
// }

// logical operators && and   || or    !not truth table
// const hasDriverLicense = true;
// const hasGoodVision = true;

// // console.log(hasDriverLicense && hasGoodVision);
// // console.log(hasDriverLicense || hasGoodVision);
// // console.log(!(hasDriverLicense && hasGoodVision));

// if (hasDriverLicense && hasGoodVision) {
//   console.log('mahmoud can drive');
// } else {
//   console.log('mahmoud can not drive');
// }

// const day = 'saturday';

// switch (day) {
//   default:
//     console.log('Not a valid day');
//   case 'saturday':
//     console.log('C++');
//     break;
//   case 'sunday':
//   case 'monday':
//     console.log('JAVA');
//     break;
// }

// if (day === 'saturday') {
// } else if (day === 'sunday' || day === 'monday') {
//   console.log('');
// } else {
//   console.log('');
// }

// statement not produce a value       expresion produce a value
// the conditional operator ternay
const name = 'mahmoud';
const age = 5; //statement
// console.log(age >= 18);
let applyToJob = age >= 18 ? 'apply' : 'not apply';
if (age >= 18) {
  applyToJob = 'apply';
} else {
  applyToJob = 'not apply';
}

console.log(
  `my name is ${name} and ${
    age >= 18 ? 'i can apply to the job' : 'i can not apply to the job'
  }`
);
