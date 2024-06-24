//Dom traversing
/*<h1>
        When
        <!-- Green highlight effect -->
        <span class="highlight">banking</span>
        meets<br />
        <span class="highlight">minimalist</span>
      </h1>*/

      const h1 =- document.querySelector('h1')

      //Goinh Downwards: child
      h1.querySelectorAll('.highlight')// selects all the child elemnt with class name highlight in th h1
      h1.childNodes
      h1.children
      h1.firsetElementChild.style.color = 'white'
      h1.lastElementCHild.style.color = 'orange'


      //going upwards: parents
      h1.parentNode
      h1.parentElement
      h1.closest('.header').style.background = 'any color'