// default parameters in functions
// we can use default parameters as 
const createBooking = function (FlightNum,NumPassengers=1,price=199*NumPassengers)
{
    const booking ={
        FlightNum,
        NumPassengers,
        price,
    };
    console.log(booking)
}
//createBooking('Lh239',200)
createBooking('Lh559',2,800)