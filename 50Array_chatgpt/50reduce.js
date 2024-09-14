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
console.log(removeDup);




//11. Get distinct objects by property
const arr11=[{ id: 1 }, { id: 2 }, { id: 1 }];
const distinctob=arr11.reduce((acc,val)=>{
    if(!acc.find(o=>o.id===val.id))
        acc.push(val);
    return acc;
},[]);
console.log(distinctob);//[ { id: 1 }, { id: 2 } ]

//12. Concatenate strings
const arr12= ['Hello', 'world', '!'];
const concaStr=arr12.reduce((acc,val)=>
    acc+' '+val

)
console.log(concaStr)


//13. Calculate average of an array

const arr13 = [10, 20, 30, 40];
const avg=arr13.reduce((acc,val)=>
    acc+val/arr13.length,0)
console.log(avg)

//14. Get the longest string in an array

const arr14 = ['apple', 'banana', 'cherry'];
const longest=arr14.reduce((acc,val)=>
    val.length>acc.length?val:acc
,'');
console.log(longest)


//15. Count total number of characters in an array of strings
const arr15 = ['apple', 'banana', 'cherry'];
const totalchars=arr15.reduce((acc,val)=>acc+val.length,0);
console.log(totalchars)

//16. Flatten an array of arrays


const arr16 = [[1], [2, [3, 4]], [5]];
const flat = arr16.reduce((acc, val) => acc.concat(val.flat()), []);
console.log(flat); // Output: [1, 2, 3, 4, 5]

//17. Convert array of objects to a single object
const arr17 = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];

const single=arr17.reduce((acc,{key,value})=>{
    acc[key]=value;
    return acc;
},{})

// First Iteration ({ key: 'a', value: 1 }):

// key = 'a'
// value = 1
// acc[key] = value → acc['a'] = 1
// acc after this iteration:
// js
// Copy code
// acc = { a: 1 };
// Second Iteration ({ key: 'b', value: 2 }):

// key = 'b'
// value = 2
// acc[key] = value → acc['b'] = 2
// acc after this iteration:
// js
// Copy code
// acc = { a: 1, b: 2 };

console.log(single)

//18. Merge two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergeofobj=[obj1,obj2].reduce((acc,o)=>({...acc,...o}),{});
console.log(mergeofobj);

//19. Find common elements between two arrays
const arr19 = [1, 2, 3];
const arr29 = [2, 3, 4];
const common=arr19.reduce((acc,val)=>arr19.includes(val)?acc.concat(val):acc,[]);
console.log(common)

//20. Sum of squares
const arr20 = [1, 2, 3];
const sumofsq=arr20.reduce((acc,val)=>acc+val*val,0)
console.log(sumofsq)

//21. Convert a string into a character frequency map