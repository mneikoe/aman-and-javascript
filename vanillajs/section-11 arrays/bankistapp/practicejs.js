//creating dom elements in lec-148   we can use html and javascript functions and variables and use these in html for desired result
//to display movements in the html we use javascript we call foreach loop over predefined obejcts which has all movements array as a properties
const displayMovements = function(movements){
    movements.forEach(function(mov,i) {
        const type= mov > 0 ? 'deposit':'withdrawal'
        
        const html = ` 
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        
        <div class="movements__value">${mov}</div>
      </div>`
        

//insertAdjacentHtml  function we use this to add html over a html to display THIS MEthod accepts two parameters one is th position where we want to add html these are predefined 4 positionn
// position can be seen iin mdn docs 
document.querySelector('.movements').insertAdjacentHTML('afterbegin',html)
    });
}