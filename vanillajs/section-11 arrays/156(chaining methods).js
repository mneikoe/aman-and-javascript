
const incomes = movements.filter (mov => mov>0).reduce((acc,curr)=>acc+curr,0)
labelSumIn.textContent = `${incomes}$`//an example of chaining methods