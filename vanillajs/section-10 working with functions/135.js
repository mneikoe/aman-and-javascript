// bind method
// bind also is same as call method which allows to manually set this keyword for any function call
//bind does not immediately call the function it just return a new function where this keyword is bound, so it sets to whatever value we pass into bind
const Lufthansa = {
    airLine : 'Lufthansa',
    iataCode : 'LH',
    bookings : [],

    book (FlightNum, Name){
        console.log(`${Name} booked a seat on ${this.airLine} flight ${this.iataCode}${FlightNum}`)
    

    this.bookings.push( {flight : `${this.iataCode}${FlightNum}`,Name})
    },
}

Lufthansa.book(249,'Aman Raj')
const book = Lufthansa.book

const EuroWIngs ={
    airLine : 'EuroWings',
    iataCode:'EW',
    bookings :[],
}
book.call (EuroWIngs,23,"AMNRJ")
console.log(EuroWIngs)

console.log ('-----------bind method--------')
const bookEw = book.bind(EuroWIngs)
bookEw(23,'aman raj')

// bind method set a this keyword to the eurowings object and return it an then we pass arguments in return function
// in call method we have to pass object as a this argument but in this bind method this keyword is set and it is not requred to set it again and again just pass different arguments many time
const bookLh = book.bind(Lufthansa)
bookLh(556,'aman raj')
// we can pass multiple arguments in bind method 
const bookEW23 = book.bind(EuroWIngs,3334455)
bookEW23('aman raj')
bookEW23('diksha')
bookEW23('prem raj')


