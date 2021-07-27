let numbers1 = [4,8,15,16,23,42];
let numbers2 = [25,42,58,6,3,12];
let result = [];
function numberSort(){
result = result.concat(numbers1,numbers2)
let sortedResult = result.sort((a,b) => a-b);
console.log(sortedResult)
}
numberSort()