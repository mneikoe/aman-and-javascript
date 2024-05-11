// nullish-coalescing operator this operator was introduced in ES-2020
// nullish coalescinng operator works on null and undefined0/ value not on falsy value

let reastaurant = {
    numGuest1 : 0,
    numGuest2 : null,
}
const guests1 = reastaurant.numGuest1 ?? 10;
console.log(guests1)//here the output is 0 because nulllish operator works on the nullsih value else it will return the falsy value 
// for short circuiting from nullish operator th first value should be null value
const guests2 = reastaurant.numGuest2 ?? 29;
console.log(guests2)