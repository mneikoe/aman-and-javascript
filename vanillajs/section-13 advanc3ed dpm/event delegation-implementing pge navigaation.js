//implementing page navigation using event bubbling

//page navigation
document.querySelectorAll('.nav__link').forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault();
        const id =this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    })
})
// the above implementation is not vey efficient as it works on one element nd if we have 1000 elements ton add this event we have tyo write this function that much times

// we will use event delegation means bubbling and event to parent is the concept it will add events to all the child elements 
// imoplementing event delegation
// basicallly two steos is needed
//first we add event listener to a common parent element of all the element iun which we are interested
//second determine what element originated the event
document.querySelector('.navb__links').addEventListener('click',function(e){
   // console.log(e.target)//this e.target gives at which the event is happened
   e.preventDefault();
    //matching strategy
    if(e.target.classList.contains('nav__link')){
       
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})