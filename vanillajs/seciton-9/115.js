//looping objects
const Hours = {
    thu : {
        open : 12,
        close : 22,
    },
    fri : {
        open : 11,
        close : 23,
    },
    sat : {
        open : 10,
        close : 24,
    },
}


console.log('-------only values-------')
for (const day of Object.values(Hours)){
    console.log(day);
}
console.log('-------only keys-------')
for (const day of Object.keys(Hours)){
    console.log(day);
}
console.log('-------both keys and values-------')
for (const day of Object.entries(Hours)){
    console.log(day);
}