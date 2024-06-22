/* 

Selecting, Creating, Deleting Elements

*/

// selecting 

console.log(document.documentElement) // this selects the entire web page
console.log(document.head)
console.log(document.body)

document.querySelector('.header')
document.querySelectorAll('.section')// selects all the classes named with seciton


document.getElementById('only-id-name')
document.getElementsByTagName(button) // selects all button named elements
document.getElementsByClassName('only0-class-name')


//creating and inserting elements
//.insertAdjacentHTML

document.createElement('div')// create a element div

const message = document.createElement('div')
message.classList.add('cookie-message')
message.textContent = "I am a billionaire"
message.innerHTML = 'i am a trillionaire <button class="btn">click to get 10000000 lakh crore dollars </button>'