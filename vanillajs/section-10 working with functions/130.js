//how passing arguments works value vs reference
const Flight ={
    one : 'LH334',
    
}
const Aman ={
    name : 'Aman Raj',
    passport:23475862046,
}
const checkin = function(FlightNum,Passenger){
    FlightNum ='LH887'
    Passenger.name = 'Mr.'+ Passenger.name
    if (Passenger.passport===23475862046)
        console.log('Checked In')
    else
    console.log('wrong Passport')
}
console.log("first output")
checkin(Flight,Aman)
console.log(Flight)
console.log(Aman)
