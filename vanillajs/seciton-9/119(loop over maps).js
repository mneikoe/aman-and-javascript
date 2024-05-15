
// we can make map by makng array of array first element will be key and the second will be value
const question = new Map([
    ['question', 'what is the best programming language in the world'],
    ['1','c'],
    ['2','java'],
    ['3','javascript'],
    ['correct','3'],
    [true,'correct'],
    [false,'try again'],
])

console.log(question)

//maps ar iterable


for (const [key,value] of question){
    if (typeof key ==='number')
        console.log('answer '+ key + value)
}


//convert map to array using spread operator

console.log(...question)

console.log(question.entries())
console.log(question.keys())
console.log(question.values())