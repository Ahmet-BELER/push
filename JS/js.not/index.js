// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// 1
// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =
// for each
//



// function result(array){
//     const plus = [];
//     const minus = [];
//     let sumPlus = 0;
//     let sumMinus = 0;
//     for(i =0 ; i < array.length ; i++){
//         if(array[i] < 0){
//             minus.push(array[i])
//         }
//         else{
//             plus.push(array[i])
//         }
//     }

//     for(i=0;i< plus.length;i++){
//         sumPlus += plus[i]
//     }
//     for(i=0;i< minus.length;i++){
//         sumMinus += minus[i]
//     }
//     return [`bize yatan para ${sumPlus} ve bizden çıkan para ${sumMinus} `]

// }
// console.log(result(movements))


//2. çözümmmmmmm2.çözümmmmmmm2. çözümmmmmmm2.çözümmmmmmm2. çözümmmmmmm2.çözümmmmmmm

// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// let pozitiv = [];
// let negative= [];
// movements.forEach(element => element >0 ? pozitiv.push(element): negative.push(element))
// console.log(pozitiv)
// console.log(negative)
// sumP = 0;
// sumN =0 ;
// pozitiv.forEach(element =>sumP += element )
// console.log((sumP))
// negative.forEach(element =>sumN += element )
// console.log(sumN)
// console.log(sumN+sumP)
// /******** */

// // map initials
//  const str = 'Clarusway Online Career IT Training School';
//  const arraystr = str.split(" ");
//  console.log(arraystr);
//  const newarry = arraystr.map(element => element[0]);
//  console.log(newarry)
//  const and = newarry.join("");
//  console.log(and)
// const the = str.split(" ").map(element=> element[0]).join("");
// console.log(the)








// /***** */
// // map

// const strx = 'The Quick Brown Fox'; 
// tHe YeLLoW fOx 
// // Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// function lower (x){
    
//     const str1 = str.split(" ");
//     const newstr = [];
    
    
//     for ( i =0 ; i < str1.length;i++){
//         if (str1[i]===str1[i].toUpperCase()){
//             newstr.push(str[i].toLowerCase());
//         }
//         else {
//             newstr.push(str1[i].toUpperCase())
//         }
        
//     }
//     return newstr
// }
// console.log(lower(str))

// const strx = 'The Quick Brown Fox'; 
// function lowerUpper(x){
//     let str = x.split("");
//     let xxx = [];
//     console.log(str);
//     for(i=0 ; i < str.length;i++){
//         if(str[i] === str[i].toUpperCase()){
//             xxx.push(str[i].toLowerCase());
//         }
//         else{
//             xxx.push(str[i].toUpperCase())
//         }
//     }
//     return xxx 
// }
// console.log(lowerUpper(strx).join(""))
 


// const strx = 'The Quick Brown Fox'; 

 













// // filter words longer than 6 letters
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'Clarusway',
  'Future',
];

let newwords = [];
// for (i=0; i<words.length;i++){
//     if (words[i].length>6){
//         newwords.push(words[i])
//     }
// }

//başka çözüm-----------

// words.map((elem)=>{if(elem.length>6) {newwords.push(elem)}})

// console.log(newwords)

//başka çözüm---------

// const filteredWords=words.filter(element=>element.length>6)
// console.log(filteredWords)



const cart = [
  {
    item: "🍫",
    price: 5,
    vat: 8,
  },
  {
    item: "🍌",
    price: 5,
    vat: 8,
  },
  {
    item: "🥐",
    price: 7,
    vat: 18,
  },
  {
    item: "🍰",
    price: 15,
    vat: 18,
  },
  {
    item: "🎂",
    price: 25,
    vat: 1,
  },
  {
    item: "🥧",
    price: 20,
    vat: 1,
  },
];
// 1
let sum = 0;
for (let i = 0; i < cart.length; i++) {
  const element = cart[i];
  sum += element.price;
}
console.log(sum);
// 2
sum = 0;
for (const el of cart) {
  sum += el.price;
}
console.log(sum);
// 3
sum = 0;
cart.forEach((element) => {
  sum += element.price;
});
// 4
const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
console.log("result :>> ", result);

// 5
const re = cart.reduce((sum, curItem) => {
  return sum + curItem.price;
}, 0);
console.log("re :>> ", re);

const vat = cart.reduce((sum, curItem) => {
  return sum + (curItem.price * curItem.vat) / 100;
}, {});
console.log("vat :>> ", vat);


///for of 1a çözüm
sum = 0;
for (const el of cart) {
  sum += el.price;
}
console.log(sum);

sum = 0 ;
for (const [index,el] of cart.entries()){
  console.log(index);
  sum+=el.price;
}
console.log(sum);



// for in example
// --------------

const parent = {
  firstName: "Mike",
  lastName: "Doe",
  profession: "Barber",
};

function Baby() {
  this.firstName = "unnamed";
  this.weight = 3.4;
}

Baby.prototype = parent;

var sally = new Baby();
sally.firstName = "Sally";

for (const prop in sally) {
  if (Object.hasOwnProperty.call(sally, prop)) {
  }
  const element = sally[prop];
  console.log(prop, ":>>", element);
}