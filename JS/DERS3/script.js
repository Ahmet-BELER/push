// 1. WHILE LOOPS

/*let i = 0,
  sum = 0;
while (i < 6) {
  sum += i;
  console.log(i);
  i++;
}
console.log(`Total is : ${sum}`);*/

// 2. DO WHILE

/*let i = 4,
  sum = 0;
do {
  sum += i;
  i++;
} while (i < 5);
console.log(sum);*/

// 3. For Loops

/*let i = 4;
for (; i < 8; ) {
  console.log("i", i);
  i++;
}
*/

/*
let counter = 0;
for (i = 0; i <= 50; i++) {
  // console.log("i", i);
  i % 10 === 0 ? (counter += i) : null;
}
console.log(counter);
*/

/*let brand = "Clarusway";
// console.log(brand.length);
for (let i = 0; i < brand.length; i++) {
  console.log(i, brand[i], brand.length - i, brand[brand.length - i - 1]);
}
*/
/*
let brand = "Clarusway";
for (let i = 0 , j =  brand.length; i < brand.length; i++ ,j--) {
  console.log(i+1, brand[i],j, brand[j-1]);
}*/
/*
let bests = ["Clarusway", "Google", "Amazon", "Tesla"];
let len = bests.length;
for (let i = 0; i < len; i++) {
  document.write("<h1>", i + 1, " : ", bests[i], "</h1>");
}*/


/*let i = 0;
while (i <= 10) {
  if (!(i % 3 === 0)) {
    console.log(i);
    // break;
  }
  i++;
}
*/
/*let brand = "Clarusway";
console.log(brand.length);
for (let i = 0; i < brand.length; i++) {
  console.log( brand[-i]);*/

  /*
  text = "clarusway"  
for(let i = text.length; i > 0 ; i--){
    console.log(text[i-1])
}*/

/*for (let i=0;i<=10;i++){
    for(let j =0; j<=10;j++)
    console.log(`${i}*${j} = ${i*j}`);

}
const number = [13,34,24,67,23,90]
let faktör =1
for(let i = 5; i>0 ; i--){
    faktör = faktör*i
}
console.log(faktör);
*/

/*const number = [13, 34, 24, 67, 23, 90];
let result = 0;
for (let i = 0; i < number.length; i++) {
  result += number[i];
}
console.log(result);
*/


//  let x = 5;
/*const x = prompt("Enter a number");
result = 1;
for (i = 1; i <= x; i++) {
  result = result * i;
}
console.log(result);
document.write(result);*/

/*let bests = ["Clarusway", "Google", "Amazon", "Tesla"];
for(i=0 ; i <bests.length; i++){
    console.log(i+1, bests[i]);
}

for(let i = 0; i<=10 ;  i++){
    for(j=0; j<= 10; j++){
        console.log(`${i}*${j}=${i*j}`)
    }

}*/
