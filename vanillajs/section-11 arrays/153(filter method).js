/* FILTER method

*/

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
const deposit = movements.filter(i=> i>0)// here filter method will filter out all the elements which are >0 and return a new array with these elements
console.log(deposit)