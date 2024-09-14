//
// Here are 50 JavaScript coding examples to practice using the reduce method, with explanations and solutions.

// 1. Sum of an array

const arr = [1, 2, 3, 4, 5];
const sum=arr.reduce((acc,num)=>acc+num,0);
console.log(sum);

// 2. Product of an array

const arr2=[1, 2, 3, 4];
const prod=arr2.reduce((acc,num)=>acc*num,1);
console.log(prod)

//3. Find maximum element

const arr3=[1, 3, 7, 2, 5];
const max=arr3.reduce((acc,num)=>(num>acc?num:acc),arr[0]);
console.log(max);

// 4. Find minimum element

const arr4=[1, 3, 7, 2, 5];
const min=arr4.reduce((acc,num)=>(num<acc?num:acc),arr[0]);
console.log(min);

//5. Count occurrences of elements
const arr5 = ['a', 'b', 'a', 'c', 'b', 'a'];
const count=arr5.reduce((acc,val)=>{
    acc[val]=(acc[val] || 0)+1;//acc['a'] = (acc['a'] || 0) + 1 → acc['a'] = 0 + 1 → acc = { a: 1 }
    return acc;
},{});
console.log(count)//{ a: 3, b: 2, c: 1 }

//6. Flatten a 2D array
const arr6=[[1, 2], [3, 4], [5]];
const falt=arr6.reduce((acc,val)=>acc.concat(val),[]);
//First iteration (val = [1, 2]):
// acc = [] (initial state)
// acc.concat([1, 2]) → [] + [1, 2] → acc = [1, 2]
// Second iteration (val = [3, 4]):
// acc = [1, 2]
// acc.concat([3, 4]) → [1, 2] + [3, 4] → acc = [1, 2, 3, 4]

console.log(falt);//[ 1, 2, 3, 4, 5 ]

//7. Sum of even numbers
const arr7=[1, 2, 3, 4, 5, 6];
const sumeven=arr7.reduce((acc,val)=>val%2==0? acc+val:acc,0);
console.log(sumeven);

//8. Sum of odd numbers
const arr8=[1, 2, 3, 4, 5, 6];
const sumodd=arr8.reduce((acc,val)=>val%2!=0?val+acc:acc,0);
console.log(sumodd)

//9. Group by age
const people=[
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
]

const age=people.reduce((acc,val)=>{
    acc[val.age]=(acc[val.age] || []).concat(val.name);
    return acc;
},{})
// First Iteration (person = { name: 'Alice', age: 25 }):

// acc[person.age] → acc[25] (currently undefined)
// (acc[25] || []) → [] (since acc[25] is undefined)
// .concat(person.name) → [].concat('Alice') → ['Alice']
// acc after this iteration:
//
// acc = { 25: ['Alice'] };
// Second Iteration (person = { name: 'Bob', age: 25 }):

// acc[person.age] → acc[25] (currently ['Alice'])
// (acc[25] || []) → ['Alice']
// .concat(person.name) → ['Alice'].concat('Bob') → ['Alice', 'Bob']

console.log(age) //{ '25': [ 'Alice', 'Bob' ], '30': [ 'Charlie' ] }

// group by name
const people2=[
    { name: 'Bob', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 26 }
]
const name=people2.reduce((acc,val)=>{
    acc[val.name]=(acc[val.name]|| []).concat(val.age);
    return acc;
},{})
console.log(name)//{ Bob: [ 21, 25 ], Charlie: [ 26 ] }


//10. Remove duplicates from an array

const arr10 = [1, 2, 3, 1, 2, 4];
const removeDup=arr10.reduce((acc,val)=>{
    if(!acc.includes(val))
        acc.push(val);
    return acc;
},[])
console.log(removeDup)