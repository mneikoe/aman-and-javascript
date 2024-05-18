//Functions returning FUnctions
const greet = function (greeting){
    return function(n){
        console.log(`${greeting} ${n}`)
    }
}
const greetHey = greet ('Hey')
greetHey('Aman')
greet('Hello')('Aman')

