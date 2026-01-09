// // // // // // // // // // // // // // // // // // /*const student = {
// // // // // // // // // // // // // // // // // //     fullname: "Muhammad HAssann Saaeed",
// // // // // // // // // // // // // // // // // //     age: 21,
// // // // // // // // // // // // // // // // // //     gender: "male",
// // // // // // // // // // // // // // // // // //     Location: "Karachi",
// // // // // // // // // // // // // // // // // //     isPass : true,
// // // // // // // // // // // // // // // // // // };
// // // // // // // // // // // // // // // // // // console.log(student)
// // // // // // // // // // // // // // // // // // console.log(typeof student)*/
// // // // // // // // // // // // // // // // // // let a = 5;
// // // // // // // // // // // // // // // // // // let b = 10;
// // // // // // // // // // // // // // // // // // console.log("Table Of 5")
// // // // // // // // // // // // // // // // // // console.log("a =", a, "& b =",b);
// // // // // // // // // // // // // // // // // // console.log("a + b =", a + b );
// // // // // // // // // // // // // // // // // // console.log("a - b =", a - b);
// // // // // // // // // // // // // // // // // // console.log("a * b =", a * b);
// // // // // // // // // // // // // // // // // // console.log("a / b =", a / b);
// // // // // // // // // // // // // // // // // // console.log("5 * 1 =",a);
// // // // // // // // // // // // // // // // // // console.log("5 * 2 =",a * 2);
// // // // // // // // // // // // // // // // // // console.log("5 * 3 =",a * 3);
// // // // // // // // // // // // // // // // // // console.log("5 * 4 =",a * 4);
// // // // // // // // // // // // // // // // // // console.log("5 * 5 =",a * 5);
// // // // // // // // // // // // // // // // // alert("HELLO BABY")

// // // // // // // // // // // // // // // // // //UNARY OPERATOR//

// // // // // // // // // // // // // // // // // //INCREAMENT//
// // // // // // // // // // // // // // // // // let a = 5;
// // // // // // // // // // // // // // // // // let b = 10;
// // // // // // // // // // // // // // // // // let sub = ("a++ =", a++ + b--) //POST INCREMENT / DECREMENT//
// // // // // // // // // // // // // // // // // console.log(sub)
// // // // // // // // // // // // // // // // // console.log("++A =", ++a + --b) //PRE-INCREMENT / DECREMENT//


// // // // // // // // // // // // // // // // //COMPARISON OPERATOR

// // // // // // // // // // // // // // // // // console.log("a == c", a == c );
// // // // // // // // // // // // // // // // // console.log("b == d", b == d);
// // // // // // // // // // // // // // // // // console.log("a == b", a == b);
// // // // // // // // // // // // // // // // // console.log("c == d", c == d);
// // // // // // // // // // // // // // // // // console.log("a != b", a != b);
// // // // // // // // // // // // // // // // // console.log("c != d", c != d);
// // // // // // // // // // // // // // // // // console.log("a != c", a != c);
// // // // // // // // // // // // // // // // // console.log("b != d", b != d);
// // // // // // // // // // // // // // // // // console.log("a === b", a === b);
// // // // // // // // // // // // // // // // // console.log("a === c", a === c);
// // // // // // // // // // // // // // // // // console.log("a === d", a === d);
// // // // // // // // // // // // // // // // // console.log("b === d", b === d);
// // // // // // // // // // // // // // // // // console.log("b === e", b === e);
// // // // // // // // // // // // // // // // // console.log("a !== b", a !== b);
// // // // // // // // // // // // // // // // // console.log("a !== c", a !== c);
// // // // // // // // // // // // // // // // // console.log("a !== e", a !== e);
// // // // // // // // // // // // // // // // // console.log("b !== e", b !== e);
// // // // // // // // // // // // // // // // // console.log("b !== d", b !== d);
// // // // // // // // // // // // // // // // // console.log("a > b", a > b);
// // // // // // // // // // // // // // // // // console.log("a < b", a < b);
// // // // // // // // // // // // // // // // // console.log("a == e", a == e);
// // // // // // // // // // // // // // // // // console.log("a > b", a > b);
// // // // // // // // // // // // // // // // // console.log("d > b", d > b);
// // // // // // // // // // // // // // // // // console.log("e > b", e > b);
// // // // // // // // // // // // // // // // // console.log("a >= b", a >= b);
// // // // // // // // // // // // // // // // // // console.log("a <= b", a <= b);
// // // // // // // // // // // // // // // // // // console.log("e >= b", e >= b);
// // // // // // // // // // // // // // // // // let a = 5;
// // // // // // // // // // // // // // // // // let b = "10";
// // // // // // // // // // // // // // // // // let c = 5;
// // // // // // // // // // // // // // // // // let d = "10";
// // // // // // // // // // // // // // // // // let e = "5";
// // // // // // // // // // // // // // // // // console.log("a=5, b=10, c=5, d=10, e=5")

// // // // // // // // // // // // // // // // // //LOGICAL OPERATORS
// // // // // // // // // // // // // // // // // console.log("a === c, c == e", a ===c && c == e );
// // // // // // // // // // // // // // // // // console.log("b == d, a == c", b === d && a == c );
// // // // // // // // // // // // // // // // // console.log("a === c, a == c", a === c || a == c );
// // // // // // // // // // // // // // // // // console.log("b != d, b === e", b != d || b === e );
// // // // // // // // // // // // // // // // // console.log("a === c", !(a === c) );
// // // // // // // // // // // // // // // // // console.log("a === e", !(a === e) );

// // // // // // // // // // // // // // // // //CONDITIONAL STATEMENTS
// // // // // // // // // // // // // // // // (let age = 24;)
// // // // // // // // // // // // // // // // // if(age > 18, age < 23){
// // // // // // // // // // // // // // // // //     console.log("You can vote")
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // if( age > 23){
// // // // // // // // // // // // // // // // //     console.log("you are too old")
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // //    CONDITIONAL STATEMENTS
// // // // // // // // // // // // // // // let age = 23.5;
// // // // // // // // // // // // // // // let result;
// // // // // // // // // // // // // // // if(age === 18) {
// // // // // // // // // // // // // // //     result = "Your are eligible";
// // // // // // // // // // // // // // // } else if (age < 18){
// // // // // // // // // // // // // // //     result = "Your are Junior";
// // // // // // // // // // // // // // // } else if (age > 18 && age <= 24 ) {
// // // // // // // // // // // // // // //     result = "Your are perfect";
// // // // // // // // // // // // // // // } else {
// // // // // // // // // // // // // // //     result = "You are too old";
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log(result);

// // // // // // // // // // // // // // //TERNARY OPERATOR *******
// // // // // // // // // // // // // // let age = 15;
// // // // // // // // // // // // // // result = age > 18? "Eligle" : "Not Elgible";
// // // // // // // // // // // // // // console.log(result)


// // // // // // // // // // // // // // PROMPT *********
// // // // // // // // // // // // // let age = Number(prompt("Entre Your Age"));
// // // // // // // // // // // // // if (age === 18){
// // // // // // // // // // // // //     console.log("Your Are Eligible");
// // // // // // // // // // // // // } else if (age > 18 && age <= 24) {
// // // // // // // // // // // // //     console.log("Your Are Perect");
// // // // // // // // // // // // // } else if ( age < 18) {
// // // // // // // // // // // // //     console.log("Your Are Junior");
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("Your Are Too Old");
// // // // // // // // // // // // // };
// // // // // // // // // // // // let score = prompt("Enter Your Marks")
// // // // // // // // // // // // let Grade;
// // // // // // // // // // // // if (score >= 90 && score <= 100 ) {
// // // // // // // // // // // //     console.log("According to your score your grade is 'A'")
// // // // // // // // // // // // } else if ( score >= 70 && score <= 89 ){
// // // // // // // // // // // //     console.log("According to your score your grade is 'B'")
// // // // // // // // // // // // } else if ( score >= 60 && score <= 69) {
// // // // // // // // // // // //     console.log("According to your score your grade is 'C'")
// // // // // // // // // // // // } else if ( score >= 50 && score <= 59) {
// // // // // // // // // // // //     console.log("According to your score your grade is 'D'")
// // // // // // // // // // // // } else if ( score >= 0 && score <= 49) {
// // // // // // // // // // // //     console.log("According to your score your grade is 'F'")
// // // // // // // // // // // // }
// // // // // // // // // // // var a = 1;
// // // // // // // // // // // var b = 1;
// // // // // // // // // // // // var result = ++a + a++ + b++ + ++b + a + b
// // // // // // // // // // // // //         = 2   + 2   + 1   +  3  + 3 + 3;
// // // // // // // // // // // // console.log("Wrong Answer",result)
// // // // // // // // // // // // let result1 = b++ + ++b + ++a + a++ + a++ + a + b;
// // // // // // // // // // // // //         =  1   +  3  +  2  + 2   + 3   + 4 + 3 ;
// // // // // // // // // // // // console.log("Wrong Answer"result1)
// // // // // // // // // // // // let result = a++ + b++ + ++a + ++b + ++a + ++b + a + b ;
// // // // // // // // // // // // // //         = 1   + 1   + 3   + 3   + 4   + 4   + 4 + 4 ;
// // // // // // // // // // // // // console.log( "Correct Answer"result);
// // // // // // // // // // // // let result = ++a + ++a + ++b + ++b + b++ + a++ + a + b + b;
// // // // // // // // // // // // //         = 2   + 3   + 2   + 3   + 3   + 3   + 4 + 4 + 4 ;
// // // // // // // // // // // // console.log(result);

// // // // // // // // // // let a = 2;
// // // // // // // // // // result = --a + --a + a-- + a;
// // // // // // // // // // //     =  1  +  0  + 0   + -1; ans = 0
// // // // // // // // // // console.log(result)
// // // // // // // // // // result = ++a + a++ + a++ + ++a + --a + a-- + ++a + a;
// // // // // // // // // // ans = 11  + 11  + 12  + 13  + 12  + 12  + 13  + 13= 97
// // // // // // // // // // let a = 10;
// // // // // // // // // // result = a++ + ++a + a
// // // // // // // // // // console.log(result)

// // // // // // // // // let a = 10;
// // // // // // // // // result= ++a + ++a + a++ + ++a + ++a + a;
// // // // // // // // // // //    = 11  + 12  + 12  + 14  + 15  + 15 = 79
// // // // // // // // // // console.log(result)
// // // // // // // // // let prompt = require('prompt-sync')();
// // // // // // // // // let num1 = Number(prompt("Entre Your Number"));
// // // // // // // // // let num2 = Number(prompt("Entre Your  Second Number"));
// // // // // // // // // let sum = num1 + num2;
// // // // // // // // // console.log("sum is",sum);
// // // // // // // // let name = prompt("Enter Your Name");
// // // // // // // // alert("Hello " + name);
// // // // // // // // alert(" How Are you " + name);
// // // // // // // let num = 10;
// // // // // // // let popnum = num * 200;
// // // // // // // console.log(popnum);

// // // // // // // LOOPS =>

// //     //FOR LOOP <==
// // //     for (let i =1; i=10; i++) {
// // //          console.log("2"+"*"+ i + "=" ,(i*2));
// // // // // //     }
// // // // // alert("hello");
// // // // sum=0;
// // // // n= 1000;
// // // // for(let i=1; i<=n; i++){
// // // //     sum= sum + i;
// // // // }
// // // // console.log("sum =", sum);

// // //  // WHILE LOOP <==
// // // let i=1;
// // // let sum = 0;
// // // let n =5;
// // // while (i<=n){
// // //     sum = sum +i;
// // //     i++;
// // // }
// // // console.log(sum)

// // // (FOR'OF) LOOP <== USING FOR "STRINGS" AND ARRAYS
// // // uName = "Hassan";
// // // size =0;
// // // for (let val of uName) {
// // //     console.log("val =",uName);
// // //     size++;
// // // }
// // // console.log("size =", size);
// //  // (FOR'IN) LOOP <== USING FOR OBJECT
// // //  let student = {
// // //     sName: "Muhammad Hassan",
// // //     age : 21,
// // //     cgpa : 7.5,
// // //     isPass : true
// // //  };
// // //  for (let key in student) {
// // //     console.log("key =",  key,  "value =",  student[key],typeof student[key]);
// // //  }
// // for( let i =10; i>=1; i--) {
// //     console.log("2" + "*" + i + "=" + (2*i));
// // }
// for(let i=0; i<=100; i++) {
//     if (i%2!==0) {
//         console.log("Odd Numbers",i)
//     }

// }
// if(3%3 ==0) {
//     console.log("Reminder")
// }

// // GAMEE <===
// let gameNum = 22    ;
// let userNum = prompt("Guess The Correct Number");
// while (userNum != gameNum) {
//     userNum = prompt("You Entered Wrong Number, Try Again");

// }
//     alert("Congratulation You Entered The Correct Number");

//  TABEL OF THE ENTERED BY THE USER

// let userNum = Number(prompt("Enter Your Number"));
// // let i = 1;
// for (i = 1; i <= 10; i++) {
//     console.log(userNum + "*" + i + "=", (userNum * i));
// }

// let str = "MUHAMMAD HASSAN SAEED";
// console.log(str);
// let str2 = str.toUpperCase();
// console.log(str2);
// console.log(str.toLowerCase());

// let fullName = prompt("Enter Your Full Name");
// fullName = fullName.toLowerCase();
// let userNam = "@"+ fullName + fullName.length;
// alert(userNam);

//ARRAYS PRACTICE <====

// let marks = [97, 85, 76, 64, 55, 43, 36];
// let sum = 0;
// // FOR OF LOOP// <========
// // for (let val of marks) {
// //     sum = sum + val;
// // }
// // avgMrks = sum / marks.length
// // console.log(`avg Marks = ${avgMrks}`);

// FOR LOOP <======
// let studntMrks = [99,87,76,65,43,31];
// sum = 0;
// for (i =0 ; i <studntMrks.length ; i++) {
//     sum = sum + studntMrks[i];
// }
// avg = sum / studntMrks.length
// console.log(avg);

// FOR OF LOOP
// let i = 0;
// for ( let price of items) {
//     // console.log(`price of ${i} = ${price}`);
// let offer = price /10;
// items[i] = items[i] -offer
// console.log(`price of items after offer = ${items[i]}`);
//     i++;
// }
// console.log(items);
// let items = [250, 350, 420, 560, 680];
// for (i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -=offer
// }
// console.log(items);

// let heros = ["ironman", "batman","spiderman"];
// heros.push("superman","batman","shaktiman");
// console.log(heros);
// let dltHero=heros.pop()
// console.log(heros);
// console.log("dleted herp =",dltHero);

// let hero1 = ["superman", "batman", "spiderman"];
// let hero2 = ["ironman","thor"];
// let hero3 = ["venom","greenman"];
// let Hero3 = hero3.shift()
// let rHero = hero2.concat(hero1,Hero3);
// console.log(rHero);
// console.log("dlt hro",Hero3);

// let heros = ["spiderman","batman","superman","actman","hulk","venom","greenman"];
// let dheros = heros.shift();
// console.log(dheros);
// console.log(heros);

//  let heros = ["spiderman","batman","superman","actman","hulk","venom","greenman"];
//  let mhero = heros.slice(1,5);
//  console.log(mhero);

// let heros = ["spiderman","batman","superman","actman","hulk","venom","greenman"];
//  heros.splice(2,0,10,11,12)
// console.log(heros);
//PRACTICE ARRAYS SHIFT/POP METHODS <====

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.shift();
// arr.pop();
// console.log(arr);
// // PRACTICE ARRAYS SPLICE METHODS <=====

// let arr1 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(arr1);
// arr1.splice(2, 1, "Ola")
// console.log(arr1);
// //PRACTICE ARRAYS PUSH & UNSHIFT METHODS <=====

// let arr2 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr2.push("Amazon");
// console.log(arr2);
// arr2.unshift("Amazon");
// console.log(arr2);

//PRACTICE FUCTIONS <========
// function myFunction() {
//     console.log("Hello");
//     console.log("World");
// }
// myFunction();

// function myfunction(msg) {
//     console.log(msg);  //<===PARAMETER
// }
// myfunction("This is Hassan")   //ARGUMENTS

// function myfunction(m, n) {
//     console.log(m, n);
// }
// myfunction(5, 5 + 10);

// function myFunction(val) {
//     prompt("val");
// }
// function sum(x,y) {
//     console.log(x*y);
// }

// function sum (x,y){
//     s = x + y;
//     return s;
// }
// let val = sum(3,7);
// console.log(val);
// SUM FUNCTION

// function sum(a, b) {
//     return a+b;
// }

// MULTIPLICATION FUNCTION
// function mul(a,b) {
//     return a*b;
// }

// //ARROW FUNCTION SUM
// const arrowSum = (a,b) => {
//     console.log(a+b);
// }

// //ARROW FUNCTION MULTIPLICATION
// const arrowMul = (a,b) =>{
//     console.log(a*b);
// }

// function vowels(str){
// let count = 0;
// for(let char of str){
//     if(char === "a" ||char === "e" ||char === "i"||char === "o"||char === "u"){
//         count++
//         console.log(`${char} is a vowel`);
//     }
// }
// return count;
// }
// function vowels(str) {
// let count = 0;
// for(let char of str){
//     if(char === "a" ||char === "e" ||char === "i"||char === "o"||char === "u"){
//         count++
//         console.log(`${char} is a vowel`);
//     }
// }
// return count;
// // }
// let arr = ["a","b","c","d","e","f","g"];
// arr.forEach((val) => 
//     {console.log(val);}
// );

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// let num = 7;

// if (num % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }
// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));
// const greet = (name) => {
//     console.log("Hello " + name);
// };

// greet("Hassu");
// let marks = [85, 72, 90, 66];

// let total = 0;
// for (let mark of marks) {
//     total += mark;
// }

// let average = total / marks.length;
// // console.log("Average =", average);
// let arr = ["Karachi","Hyderabad","Larkana","Islamabad"];
// arr.forEach((val,idx) => {
//     console.log(val.toUpperCase(),idx);
// // })
// let numx = [84,45,86,68,94,73];
// // numx.forEach((numx) => {
// //     console.log(numx**4);
    
// // })
// let calcSquare = (numx) => {
//     console.log(numx**2);
// }
// // numx.forEach(calcSquare);
// let num = [2,4,9,8,6];
// let newNum = num.map((val) => {
//     // return val*val ;
//     return val * 2;
// });
// console.log(newNum);
// FILTER METHOD 
// let arr = [1,2,3,4,5,6,7];
// let evenArray = arr.filter((value) => {
//     return value > 2 ;
// });
// console.log(evenArray);
// // console.log(arr);
// let arr = [4,9,101,65,685,464,785];
// const output = arr.reduce((prev,curr) => {
//     return prev + curr ;
// });
// console.log(output);
let arr = [1,2,3,8,9,10,15];
const output = arr.reduce((prev,curr) =>{
    return prev > curr ? prev : curr;
});
console.log(output);
