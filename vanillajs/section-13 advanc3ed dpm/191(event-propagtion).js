//event propagation : bubblinh and capturing
// js events has capturing and bubbling properties
// as we put a event it proapgates form the parent to the child in dom tree and go to the target element
// event int he start of the dom tree this is called as capturing phase
// as event reaches to the target element that is called as target phase
//and as it reaches the target it goes back to the top of the dom tree that is called as bubbling phase


//event propagation in practice
//generating random colors 

const randomInt = (min,max )=>
    Math.floor(Math.random()*(max-min+1)+min)
const randomColor = () =>
    `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

//event added to child element tis will only effec the child element means this will give a random color to this child element only
document.querySelector('.nav_link').addEventListener('click',function(e){
    this.style.backgroundColor = randomColor()
})

//event added to parent element this will effect all the child elements in this parent element this will random colors to every child element in this parent element
document.querySelector('.nav_links').addEventListener('click',function(e){
    this.style.backgroundColor = randomColor()
})
