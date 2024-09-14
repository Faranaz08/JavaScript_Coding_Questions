//1. Find the largest number in an array.
const arr=[1,4,2,3];
console.log(Math.max(...arr));

//2. Find the smallest number in an array.
const arr2=[1,4,2,3];
console.log(Math.min(...arr2))


//3. Sum of all elements in an array.
const arr3=[1,2,3,7,2,3,2,56,7,4];
const sum=arr3.reduce((acc,num)=>acc+num,0);// (accumulator ,curreentvalue,currentIndex,array),initial value;


