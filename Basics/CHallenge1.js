//Declare variable "myObject" and
// assign value {}.
// Print this variable to the console
// NOTE: variable "myObject" will NOT
// be reassigned in the future

let myObject={};
console.log(myObject);

// * CHALLENGE 2
// * Declare "x" and assign value 10 to
// it.
// * Declare "y" and assign value true
// to it
// * Declare "myObject" and assign
// object with two name-value pairs
// */

let x=10;
let y=true;
let obj={x,y};
console.log(obj)


//* EXAMPLE 1 - Create object and
// modify its properties
// */
let myObjet;
myObjet = {
a: 10,
b: "abc"
};
console.log(myObjet);
myObjet.a =  15;
console.log(myObjet);
 
// * CHALLENGE 1
// * Create variable called "myPost".
// * Initial value should be {}
// * Add property called "postTitle" and
// value "Object is reference_type"
// * Add one more property "postLikes" with
// value 0
// * Add third property "shared" and set its
// value to "false"
// * Increase value of the "postLikes" by 1
// * Delete property "shared"
// *
let myPost={};
myPost.postTitle="Object is reference_type";
myPost.postLikes=0;
myPost.shared=false;
myPost.postLikes+=1;

console.log(myPost);
delete myPost.shared;
console.log(myPost);

///**
// * CHALLENGE 2
// * Create variable "myObject" and add
// property "a" – 10.
// * Create another variable
// "copyOfMyObject" and its value should be
// myObject.
// * Add new property "b" with value false
// to the "copyOfMyObject".
// * Print to the console "myObject" and
// "copyOfMyObject" and interpret results.
// */

let myob={
    a:10

};
let copyOfMyObject=myob;
copyOfMyObject.b=false;
console.log(copyOfMyObject)