/*
REDUCE method it takes 4 arguments (accumulator,current-element,index,array)
accumulator is like a snowball 
*/

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
const balance = movements.reduce((acc,curr)=> acc+curr)
console.log(balance)



const blnc = movements.reduce((acc,curr)=>Math.abs(acc*curr*0))
console.log(blnc)

const prac = movements.map((i)=>Math.abs(i*0))
console.log(prac)