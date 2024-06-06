//creating dom elements in lec-148   we can use html and javascript functions and variables and use these in html for desired result
//to display movements in the html we use javascript we call foreach loop over predefined objects which has all movements array as a properties
const displayMovements = function(movements){
    movements.forEach(function(mov,i) {
        const type= mov > 0 ? 'deposit':'withdrawal'
        
        const html = ` 
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        
        <div class="movements__value">${mov}</div>
      </div>`
        

//insertAdjacentHtml  function we use this to add html over a html to display THIS MEthod accepts two parameters one is th position where we want to add html these are predefined 4 position
// position can be seen iin mdn docs 
document.querySelector('.movements').insertAdjacentHTML('afterbegin',html)
    });
}

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