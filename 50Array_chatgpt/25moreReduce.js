//26. Calculate the factorial of a number (using array of single number)
// const n = 5;
// const factorial = Array.from({ length: n }, (_, i) => i + 1)
//                         .reduce((acc, val) => acc * val, 1);
// console.log(factorial); // Output: 120


//27. Group array elements by length

const arr27 = ['apple', 'banana', 'cherry', 'date'];
const groupBylength=arr27.reduce((acc,val)=>{
    const len=val.length;;
    if(!acc[len])
        acc[len]=[];
    acc[len].push(val);
    return acc;
},{})
console.log(groupBylength);//{ '4': [ 'date' ], '5': [ 'apple' ], '6': [ 'banana', 'cherry' ] }

//28. Find the sum of absolute values
const arr28 = [-1, -2, 3, 4];
const absSum = arr28.reduce((acc, val) => acc + Math.abs(val), 0);
console.log(absSum);

//29. Convert array of numbers to binary strings
// const arr = [1, 2, 3];
// const binaryStrings = arr.reduce((acc, val) => {
//   acc.push(val.toString(2));
//   return acc;
// }, []);
// console.log(binaryStrings); // Output: ['1', '10', '11']

//30. Extract unique values from an array of objects
const arr30 = [{ id: 1 }, { id: 2 }, { id: 1 }];
const uniqueValues = arr30.reduce((acc, obj) => {
  if (!acc.find(o => o.id === obj.id)) acc.push(obj);
  return acc;
}, []);
console.log(uniqueValues); // Output: [{ id: 1 }, { id: 2 }]

//31. Reverse an array
const arr31=[1, 2, 3, 4];
const reversed=arr31.reduce((acc,val)=>[val,...acc],[]);
console.log(reversed);//[ 4, 3, 2, 1 ]

//32. Count words in a sentence
const sentence = "Hello world, hello!";
const wordCount=sentence.split(/\s+/).reduce((acc,word)=>{
    word=word.toLowerCase().replace(/[^\w]/g, '');
    acc[word]=(acc[word] || 0) +1;
    return acc;
},{});//{ hello: 2, world: 1 }
console.log(wordCount);


//33. Calculate the sum of array elements up to a given index
const arr33 = [1, 2, 3, 4, 5];
const index=3;
const sumUptoIndex=arr33.reduce((acc,val,idx)=> idx<=index?acc+val:acc,0);
console.log(sumUptoIndex);//10

//34. Find the common properties in an array of objects
// const arr = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 30 }];
// const commonProperties = arr.reduce((acc, obj) => {
//   Object.keys(obj).forEach(key => {
//     if (acc[key] === undefined) acc[key] = obj[key];
//     else if (acc[key] !== obj[key]) acc[key] = null;
//   });
//   return acc;
// }, {});
// console.log(commonProperties); // Output: { name: null, age: null }

//35. Count frequency of words in an array of strings
const arr35 = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const wordFreq=arr35.reduce((acc,val)=>{
    acc[val]=(acc[val] || 0) +1;
    return acc;
},{});
console.log(wordFreq);//{ apple: 2, banana: 3, orange: 1 }


//36. Calculate total length of all strings in an array
const arr36=['apple', 'banana', 'cherry'];
const totalLength=arr36.reduce((acc,val)=>acc+val.length,0);
console.log(totalLength);//17

//37. Create a string of comma-separated values from an array
const arr37 = [1, 2, 3, 4];
const reducetoString=arr37.reduce((acc,val,idx)=>acc+(idx===0?'':',')+val,'');
console.log(reducetoString);


//38. Calculate total number of positive and negative numbers
const arr38 = [1, -2, 3, -4, 5];
const countPosneg=arr38.reduce((acc,val)=>{
    if(val>0)
        acc[0]++;
    else if(val<0)
        acc[1]++;
    return acc;
},[0,0]);
console.log(countPosneg);//[ 3, 2 ]


//39. Transform array of numbers to an object with indices as keys

const arr39 = [10, 20, 30];
const objconvert=arr39.reduce((acc,val,idx)=>{
    acc[idx]=val;
    return acc;
},{});
console.log(objconvert);//{ '0': 10, '1': 20, '2': 30 }


//40. Get total count of characters in an array of strings

const arr40 = ['a', 'ab', 'abc'];
const countChar=arr40.reduce((acc,val)=> acc+val.length,0);
console.log(countChar);//6


//41. Find the sum of the absolute values of negative numbers
const arr41 = [1, -2, -3, 4];
const sumofAbs=arr41.reduce((acc,val)=> val>0? Math.abs(val)+acc:acc,0);
console.log(sumofAbs);//5


//42. Combine multiple arrays into one
const arr42 = [[1, 2], [3, 4], [5]];
const multiplearr=arr42.reduce((acc,val)=>acc.concat(val),[])
console.log(multiplearr);//[ 1, 2, 3, 4, 5 ]


//43. Compute the total number of elements in an array of arrays
const arr43 = [[1, 2], [3, 4, 5], [6]];
const countArry=arr43.reduce((acc,val)=>acc+val.length,0)
console.log(countArry)//6

//44. Convert an array to an object where each element is a key with value 1
const arr44 = ['a', 'b', 'c'];
const keywithval=arr44.reduce((acc,val)=>{
    acc[val]=1;
    return acc;
},{})
console.log(keywithval);//{ a: 1, b: 1, c: 1 }

//45. Calculate cumulative product of an array
const arr45 = [1, 2, 3, 4];
const cumulativeProduct = arr45.reduce((acc, val) => {
  acc.push((acc.length ? acc[acc.length - 1] : 1) * val);
  return acc;
}, []);
console.log(cumulativeProduct); // Output: [1, 2, 6, 24]


//46. Create a nested array based on a key-value map
const pairs = [['a', 1], ['b', 2], ['c', 3]];
const objectnest=pairs.reduce((acc,[key,val])=> {
    acc[key]=val;
    return acc;
} ,{});

console.log(objectnest);//{ a: 1, b: 2, c: 3 }


//47. Count even and odd numbers separately
const arr47 = [1, 2, 3, 4, 5, 6];
const evenoddcount=arr47.reduce((acc,val)=>{
    if(val % 2==0)
        acc.even++;
    else
        acc.odd++;
    return acc;

},{even:0,odd:0});

console.log(evenoddcount);//{ even: 3, odd: 3 }

//48. Find the average length of strings in an array
const arr48 = ['apple', 'banana', 'cherry'];
const avglength=arr48.reduce((acc,val)=> acc+val.length,0)/arr48.length;
console.log(avglength);//5.666666666666667

//49. **Create a histogram of number frequencies
const arr49 = [1, 2, 2, 3, 3, 3];
const histogram=arr49.reduce((acc,val)=>{
    acc[val]=(acc[val] || 0)+1;
    return acc;
},{});
console.log(histogram);//{ '1': 1, '2': 2, '3': 3 }

//50. Concatenate an array of strings into a single sentence
const arr50 = ['Hello', 'world', 'from', 'reduce'];
const singlesen=arr50.reduce((acc,val)=> acc+' '+val,'')
console.log(singlesen)// Hello world from reduce



