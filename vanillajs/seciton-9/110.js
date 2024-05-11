

// logical assignment operators introduced in ES-2021 more modern than nullish operator
// 0 is a falsy value
console.log('----------- Or assignment operator----------')
// or assingment operator ||= this operator assings a value to a variable if that variable is currently falsy
const rest1 = {
    Name : 'diksha',
    numGuest : 20
}

const rest2 = {
    Name : 'Aman',
    ownr : 'diksha'
}

rest1.numGuest ||= 10;// here the logical  assingmentoperator does ot assings a new vlaue to the varaiable bcz it is a truthy value

rest2.numGuest ||=50;// here the logical assgmnt oprtr assigned a value 50 to the variable as it si nort defined and it was a falsy value

console.log(rest1)
console.log(rest2)

console.log('----------and assignment operator----------')

rest1.numGuest &&= 14;
rest2.numGuest &&= 33;

console.log(rest1)
console.log(rest2)

