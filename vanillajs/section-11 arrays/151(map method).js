/*
MAP method - 

the callback fn accepts three parameters (value,index,array)

*/

const movements= [200, 450, -400, 3000, -650, -130, 70, 1300]

const euroToUSD = 2

const newArr = movements.map(i=>i * euroToUSD + 500  )
console.log(newArr)


const newExample = movements.map((i,j)=>
     `Movements ${j+1}: You ${i>0 ? 'Deposited':'WithDrew'} ${Math.abs(i)}`
)
console.log(newExample)// here a array is logged in the console
console.log(...newExample)// here we used spread operator to destructure the array and put avery element out of it