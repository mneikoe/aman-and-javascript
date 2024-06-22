// if we click a button then it will scroll to the that part onn thwe same page

const btnScrollTO = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector("#section--1")

btnScrollTO.addEventListener('click',function(e){
    const s1coords = section1.getBoundingClientRect(); // this will get the co-ordinates of the section1 


    // scrollling
    window.scrollTo(s1coords.left+ window.pageXOffset, s1coords.top + window.pageYOffset)
})