// create Array
let arr=[1,2,3,4];
console.log(arr);

//
let nums=new Array(1,2,3,4,5);
console.log(nums);

//
console.log(nums[1]);
console.log(nums.length)

// push 
nums[5]="true";
nums.push("false")
console.log(nums);
// pop 
nums.pop()
console.log(nums)
//shift - array first elemenet is removed

console.log(nums.shift());
//unshift - add element at first

nums.unshift("faranaz");
console.log(nums);

//adding {} object
nums[6]={};
console.log(nums);
nums[6].newProp=12;
console.log(nums)

// delete pop shift
delete nums[1];
console.log(nums)
//eleement with 1 index is empty [ 'faranaz', <1 empty item>, 3, 4, 5, 'true', { newProp: 12 } ]

//comparison
let myar1=[1,2,3];
let myarr2=[1,2,3];
console.log(myar1==myarr2);//false
console.log(myar1===myarr2);//false
let copy=myar1;
console.log(copy==myar1);//true
console.log(copy===myar1);//true
console.log(copy.toString()===myar1.toString());//true
console.log(copy.toString()==myar1.toString());//true

// Add elements at the beginning of the Array
// First add string "Hello"
// Second add number 100
let c1=[];
c1.push("Hello");
c1.push(100);
console.log(c1)






