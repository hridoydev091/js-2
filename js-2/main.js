//  // --------Artimetic Operators
// // let a = 5;
// // let b = 2;
// // console.log("a =",a,"& b = ",b);
// // console.log("a + b =",a + b);// joog
// // console.log("a - b =",a - b);// biyoog
// // console.log("a * b =",a * b);// gun
// // console.log("a / b =",a / b);// vaag
// // console.log("a % b =",a % b);// persenttise
// // console.log("a ** b =",a ** b);// too the power


// //Unary Operator
// let a = 5; //------Post Increment 
// let b = 2;

// console.log("a = ", " & b = ",b);
// // a = a +1;//6 2 ta niom ye kora jai
// a++;//6
// console.log("a = ",a);//6


// let x = 5;// ----- Post Decrement 
// let y = 2;

// console.log("x = ", " & y = ",y);
// // a = a -1;//4 2 ta niom ye kora jai
// x--;//4
// console.log("x = ",x);//4



// //--------------Assainment opretor

// let ab = 5;
// let bc = 2;
// ab +=4;// a= a +4
// console.log("ab = ", ab);//9

// // jog bioyog gun vag persentse sob ei niom ye kora jai




// // ------------Comparison Operator
// /*
// > -------------65 > 65----false

// >--------------25 > 25------false

// >=------------86 >= 86-----true

// <=-----------25 <= 25-----true

// ==----------- 5== 0 ----false

// !=------------ 25 != 25-----true
//  */
// console.log(65 > 65);



 // ------------Logical Operator
//  let a = 10;
//  let b = 8;
//  // && Logical And Operator
//  let c = (a>b)&&(b<a);// sob gula  valu soman hobe thokn true dekhabe
//  console.log( c);



// let a = 10;
// let b = 8;
// // -----Logical || or operator
// let c =(a>b)||(b<a);// || or operator je kono ekta stto holei true
// console.log(c);


// let a = 10;
// let b = 8;
// let c = !(a<b);
// console.log(c);// ! not er khetre sotto hole mittha hobe ,r mittha hole sotto hobe, 


//------------- conditional statement----------
// let myName = "Raj";
// if (myName == "Raj") {
//     console.log("Hello JavaScipt");// jodi my name Raj true hooi,tahole javascript lekhata asbe.
// } 

// let a;
// if (a="hello") {
//     console.log("Hello javascript");
// }


// let myname = prompt ("Enter your name")// prommpt diye input hoi banai

// if (myname == "something") {
//     console.log("Your Name is" + myname);
// }



// let age = 28;
// if (age> 18) {
//     console.log("you cannot vote");
// }


// let age1 = 16;
// if (age1 >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }


// if else er bebohar shikbo ekhon
// let amount = 21;
// if (amount > 10) {
//     console.log("Hello");
// } else {
//     console.log("Baye");//false hole els asbe ,r ture hole if asbe
// }


// else if er bebohar shikbo ekhon
// let amount = 21;

// if (amount == 10) {
//     console.log("10");  
// } else if (amount == 20) {
//   console.log("20");
// } else{
//     console.log("something");// sob gula jhokn false hobe thokn eita run korbe
// }



// //else if er bebohar shikbo ekhon
// let amount = 21;

// if (amount == 10) {
//     console.log("10");  
// } else if (amount == 20) {
//   console.log("20");
// } else if (amount == 21) {// ekhon eita true hobe
// console.log("true");

// }
//  else{
//     console.log("something");// sob gula jhokn false hobe thokn eita run korbe
// }




// let monthName = prompt ("Enter month name")
// if ( monthName == "jan") {
//     console.log("january");
// }
// else if (monthName == "feb") {
//     console.log("february");
// } else if (monthName == "mar") {
//     console.log("march");
// } else {
//     console.log("invalid month.name");
// }


// let amount1 = prompt("Enter amount")
// if (amount1 > 100) {
//     console.log("Amount is greatr than 100");
// } else if (amount1 < 100) {
//     console.log(" amount is less than too 100");
// } else {
//     console.log("Amount is equel too 100");
// }



// ------------tarnary operator---------
// let userAcces ;
// let username = prompt ("Enter Username");

// if (username == "sumon"){
//     userAcces = "Admin";// jodi username sumon hoi ,tahole asbe admin
// } else {
//  userAcces = "Modarator";//  r jodi sumon na hoi ,tahole modarator asbe
// }
// console.log("userAcces");
// let firstName = "Raj";
// let lastName = "Rajish";

// userAcces = (username == "sumon") ? "Admin": "Modarator";
// console.log("userAcces");



let age = 25;
let result = age >= 18 ?"adult":"not adult";
console.log(result);

let age1 = 16 ;
age1 >= 18 ? console.log("adult"):console.log("not adult");// simpler ,compact if-else

alert ("hello");// one time popup
 let name =prompt ("hello");
 console.log(name);
 






