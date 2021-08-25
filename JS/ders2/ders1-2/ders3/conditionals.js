/* var a = '12';
var b = '3';
var result = a/b;
​
console.log(typeof result);
​
// console.log(a / b); //2
​
 */
// let x = 100 + 50 * 3; // 450? 250?
// console.log(x);
// Logical Operators && || !
​
/* Logical operators
​
OR ||			And &&				Not  !
0 0 -> 0		0 0 -> 0			0 -> 1
0 1 -> 1		0 1 -> 0			1 -> 0
1 0 -> 1		1 0 -> 0
1 1 -> 1		1 1 -> 1
 */
​
// let  x = 0 && false;
// console.log(x); 
​
// let y = 0 || false
​
// console.log(y);
// console.log(!y); //verilen değerin boolean tersini döndürür
​
// let password = 'passwo'
​
​
//.lenght stringin uzunluğunu verir
//.includes('@') true veya false
// console.log(password.length > 5 && password.includes('@'));
​
​
// let password = 'p@sswo'
// console.log(password.length >= 8 || password.includes('@') && password.length >5 );
​
​
//Nullish operator
​
// var a = null
​
// console.log(a ?? 'Hello'); // null vs text output text
// console.log(a ?? 2); // null vs text output text
​
// var a;
​
// console.log(a ?? 'Hello'); // undefined vs text output text
// console.log(a ?? 2); // undefined vs text output text
​
// var a = '';
​
//  console.log(a ?? 2); // boş string vs text output text
​
​
//If else yapıları
​
// let score = 70;
// console.log(score >= 50);
// ​
// if (score >= 50){
//     console.log('Tebrikler');
// }
// ​
// if (score >= 50) console.log('Tebrikler2');
​
// if (score > 80) {
//     console.log('Tebrikler');
// }else{
//     console.log('Daha cok calismalisin');
// }
​
​
// //Ternary Operatör  condition ? exprIfTrue : exprIfFalse
// score > 80 ? console.log('Tebrikler2') : console.log('Daha cok calismalisin2');
​
// let score = 81;
/* 
let score = prompt("Sınavdan kaç aldın ? "); //notu kullanıcıdan al
​
if (score > 80) {
    console.log('Tebrikler');
}else if (score >=50){
    console.log('Fena degil');
}else{
    console.log('Daha cok calismalisin');
}
​
// console.log('if else gayet kolay') */
​
// let userName = null;
​
// userName ? console.log(`Hello ${userName}`) : console.log('Please login');
​
//if else if ternary
​
// let score = 49
// // score > 80 ? console.log('Tebrikler') : ( score >= 50 ?console.log('Fena  değil') :console.log('Daha cok calismalisin'));
​
​//****Switch Case Statements ****
// var text;
// var fruits = 'APple'; // ===
// fruits = fruits.toLocaleLowerCase;
// var text;
// var fruits2 = 'APple'; // ===
// fruits = fruits2.toLocaleLowerCase;
// switch (fruits){
//     case "banana":
//         text = "Banana is good";
//         break;
//     case "orange":
//         text = "I am not a fan of orange.";
//         break;
//     case "apple":
//         text = "How you like them apples?";
//         break;
//     default:
//         text = "I have never heard of that fruit...";
// }
// console.log(text,fruits2);
// console.log(text)
//toLowerCase()
// var text;
// var day2 = prompt("bugün günlerden ne");



// var day = prompt("Gün giriniz: ");
// var day = day.toLowerCase();
// var text;
//         switch (day) {
//             case "pazartesi":
//             case "carsamba":
//             case "persembe":
//             case "cumartesi":
//                 text = "In class var";
//                 break;
//             case "sali":
//             case "cuma":
//                 text = "Teamwork var";
//                 break;
//             case "pazar":
//                 text = "tatil";
//                 break;
//             default:
//                 text = "Yanlış girdiniz."
//         }
//         console.log(text); (edited) 
// day = Number(dayUser)
// let dayUser = prompt(" Pazartesi:1 , Salı: 2, Çarşamba: 3, Perşembe: 4, Cuma:5 Cumartesi:6, Pazar:7 -->Gün giriniz:");
// switch (day){
//     case 1:
//     case 3:
//     case 4:
//     case 6:
        //  text = "today we have in class";
//         break;
//     case 2:
//     case 6:
//         text = "we have TW ";
//         break;
//     case 7:
//     default:
        // text = "Pazar tatildir..";

// console.log("text2545");
 console.log("12")