'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});







// implementing smooth scrolling


const btnScrollTO = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector("#section--1")

btnScrollTO.addEventListener('click',function(e){
   const s1coords = section1.getBoundingClientRect(); // this will get the co-ordinates of the section1 


    // scrollling
     window.scrollTo(s1coords.left+ window.pageXOffset, s1coords.top + window.pageYOffset)

   // modern way of imolementing smooth scrolling
   //section1.scrollIntoVIew({behavior : 'smooth'})
    
})



//implementing page navigation to the navbar


document.querySelector('.nav__links').addEventListener('click',function(e){
  
  e.preventDefault();
   
   if(e.target.classList.contains('nav__link')){
      
       const id = e.target.getAttribute('href');
       document.querySelector(id).scrollIntoView({behavior:'smooth'})
   }
})