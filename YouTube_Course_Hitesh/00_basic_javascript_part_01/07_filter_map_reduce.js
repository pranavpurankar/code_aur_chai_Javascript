const myNumbers= [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => num+10);

// console.log(newNums);

// We know that forEach always returns undefined
// 1. Create an empty array
// 2. Apply conditionals and push each element in the new array

const newArr = [];
myNumbers.forEach( (item) => {
    newArr.push(item*10);
})

// console.log("Array generated by forEach: ",newArr);

// Map chaining
const newNums = myNumbers
    .map( (num) => num*10 )
    .map( (num) => num+1)
    .filter( (num) => num >= 40);

console.log(newNums);