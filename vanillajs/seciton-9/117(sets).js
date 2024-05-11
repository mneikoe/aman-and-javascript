//sets

// set is a collection of unique value that it cannot have an duplicate value
// to create a set we use new Set() and pass a iterable as a parameter like an array
 // set is also an iterable in set there is no index like  array 

// array as parameter

console.log('-----------array as parameter-----------')
const arr = ['aman','prem','diksha']

const orderSet = new Set (arr)
console.log(orderSet)

// string is also iterable 

console.log('-----------string as parameter-----------')

console.log(new Set('AMAN'))

// size of the set by .size

console.log(orderSet.size)

//check an element is existing in a set or not  using .has   it returns bollean true/false

console.log(orderSet.has('aman'))
console.log(orderSet.has('pizza'))

// adding and delete element in a set using .add 

orderSet.add('rahul')
console.log(orderSet)
orderSet.delete('rahul')
console.log(orderSet)

//looping over sets using for of loop

for (const order of orderSet) console.log(order);  

// use set if an array contains any unique element