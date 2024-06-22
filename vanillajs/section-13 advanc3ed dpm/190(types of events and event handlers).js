//types of events and event handlers

const h1 = document.querySelector('h1')
h1.addEventListener('mouseenter',function(e){
alert('addEventListener : great do it again to check')
})
// mouseenter works as the mouse cursor go over an element

h1.onmouseenter=function(e){
    alert('onmouseenter: hello')
}

// in modern js eventlistener is used 

const alertH1 = function(e){
    alert('addEventListener:hello')

    h1.removeEventListener('mouseenter',alertH1)//this will rempve the eventlistener as it happens one time
}
h1.addEventListener('mouseenter',alertH1)