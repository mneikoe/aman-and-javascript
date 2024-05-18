// the call and apply method 
// call method is called on function which specifies which function to call first

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


const TATA_AIRLINES ={
    airLine : 'TATA',
    iataCode : 'JH',
    bookings : [],
}
book.call(TATA_AIRLINES,1265,"PRMRJ")
console.log(TATA_AIRLINES)

const swiss = {
    airLine: 'Swiss AirLines',
    iataCode: 'LX',
    bookings :[],
}
book.call(swiss,569,'Shivm kr.')
console.log(swiss)

//apply method
// apply method does not receive  a lsit of arguments after this keyword but it takes array of arguments and pass elemnts to the functions
//syntax of apply is fn.apply(this.arg(object),array of arguments)
const flightData = [583,'Aman Raj']
book.apply(swiss,flightData)

// in modern js apply is not used call is used and the array is  passed with spread operator
book.call(swiss,...flightData)