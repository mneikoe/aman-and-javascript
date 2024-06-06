//lec-152 creating shortform of name

const user = 'Aman Raj Aman' // convert to ara

const userName = user.toLowerCase().split(' ').map(name=>name[0]).join('')
console.log(userName)


//practicing the code

console.log( user.toLowerCase().split(' '))
console.log(user.toLowerCase().split(' ').map(name=>name[0]))

const str='aman raj'
console.log(str[0])
console.log(str.split(' '))// this is returning an array and here we can use map method


const createUserName = (user)=>{
    const userName = user.toLowerCase().split(' ').map(name=>name[0]).join('')
    return userName
}
console.log(createUserName('Aman Raj Raj'))
 