//CallBack Function is a fuction that is passed as an argument in another function
// this technique allows a function to call another function
// js functions are executed in the sequence they are called and not in the sequence they are defined
function Display(x){
  console.log('this is a callback function and it returns'+x)
}
function Calculate(n1,n2,fn)
{
    let sum = n1+n2
    fn(sum)
    
}
Calculate(12,4,Display)

// same in arrow function
const Dis = (x) =>console.log('this is arrow callback function with value = '+ x)

const calc = (s1,s2,fnc) => {
    let s = s1+s2
    fnc(s)
}
calc(3,3,Dis)