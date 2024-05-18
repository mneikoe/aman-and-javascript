// Looping array : ForEach loop
// the forEach loop method is a higher order function hence it require a callback function
// forEach mthod loop over the array and in each iteration it will execute the callback function
// as the forEach method calls this callback function in eaach iteration it will pass in the current element of array as an argument of callback function

let arr=[3,6,1,8,4]

arr.forEach(function(x)// x is the iterator of loop
{
   if (x>0)
    console.log(`element is ${x}`)
    else 
    console.log('Anything')
   
})

// entries method
let item = [33,55,77,22]
console.log(arr.entries())