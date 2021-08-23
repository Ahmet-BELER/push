const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
function result(array){
    const plus = [];
    const minus = [];
    let sumPlus = 0;
    let sumMinus = 0;
    for(i =0 ; i < array.length ; i++){
        if(array[i] < 0){
            minus.push(array[i])
        }
        else{
            plus.push(array[i])
        }
    }
//    console.log(plus.forEach((a,b) => {
//     a + b
//     })
    for(i=0;i< plus.length;i++){
        sumPlus += plus[i]
    }
    for(i=0;i< minus.length;i++){
        sumMinus += minus[i]
    }
    return [`bize yatan para ${sumPlus} ve bizden çıkan para ${sumMinus} `]
}
console.log(result(movements))

const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'



const str = 'Clarusway Online Career IT Training School';
const splittedSentece = str.split(" ")
 const result = splittedSentece.map(e => e[0].toUpperCase())
 const newStr = result.join("")
console.log(newStr)




// ---------- Başka bir çözüm
// const x = Array.from(a).map(i => i==i.toUpperCase() ? i : '').join('')
// console.log
// ---------
const strx = 'The Quick Brown Fox'; 
function lowerUpper(x){
    let str = x.split("");
    let xxx = [];
    console.log(str);
    for(i=0 ; i < str.length;i++){
        if(str[i] === str[i].toUpperCase()){
            xxx.push(str[i].toLowerCase());
        }
        else{
            xxx.push(str[i].toUpperCase())
        }
    }
    return xxx
}
console.log(lowerUpper(strx).join(""))












// filter words longer than 6 letters
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













// filter words longer than 6 letters
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













// filter words longer than 6 letters
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