'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements){
  containerMovements.innerHTML = ''
movements.forEach(function(mov,i){
const type = mov > 0 ? 'deposit':'withdrawal';
  
 const html =` 
 <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
  
  <div class="movements__value">${mov}$</div>
</div>`
  containerMovements.insertAdjacentHTML('afterbegin',html)
});
}






// calculating and print balance using reduce method

const calcDisplayBalance = (accs => {
  accs.balance = accs.movements.reduce((acc,curr)=> acc + curr,0)
   // this will create a property in account objects named as balance and the balance will be saved
  labelBalance.textContent = `${accs.balance} $`
})
// displaying summary 
const calcDisplaySummary = acc=>{
  const incomes = acc.movements.filter (mov => mov>0).reduce((acc,curr)=>acc+curr,0)
  labelSumIn.textContent = `${incomes}$`
  const out = acc.movements.filter(mov=>mov<0).reduce((acc,curr)=>acc+curr,0)
  labelSumOut.textContent = `${Math.abs(out)}$`
  const interest = acc.movements.filter(mov => mov>0).map(i=>i*acc.interestRate/100 ).reduce((acc,curr)=>acc+curr)
  labelSumInterest.textContent = `${interest}$`
}


////////////////////////////////////////////////////
//lec-152 creating username in the app


const createUserName = (accs)=>{
accs.forEach(acc=>{
     acc.userName = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('')
})}
createUserName(accounts)

const updateUI = acc => {
//Display Movements
displayMovements(acc.movements)

//Display balance
calcDisplayBalance(acc)

//Display summary
calcDisplaySummary(acc)
}


////////////////////////////////////////////////////
//lec-158 implementing login

let currentAccount

btnLogin.addEventListener('click',function(e){
//prevent form from submitting
  e.preventDefault()
  currentAccount = accounts.find(acc=>acc.userName === inputLoginUsername.value)
  console.log(currentAccount)
  if(currentAccount?.pin === Number(inputLoginPin.value)) {  //here ? is optional chaining means if the currentAccount exist then do next things
    //Display UI and message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100
    
    //clear input fields
    inputLoginUsername.value =inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUI(currentAccount)

    
  }
})

///////////////////////////////////////////////////
//  lec-159 implementing transfers

  
  btnTransfer.addEventListener('click', function(e){
    e.preventDefault()
    const amount = Number(inputTransferAmount.value)
    const receiverAcc = accounts.find(acc=>acc.userName === inputTransferTo.value)
    console.log(amount,receiverAcc)
    //receiverAcc.movements.push(inputTransferAmount.value).filter(mov=> mov>0).reduce((acc,curr)=>acc+curr,0)
    inputTransferAmount.value = inputTransferTo.value = ''
    inputTransferAmount.blur()
    if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.userName !== currentAccount.userName){
      currentAccount.movements.push(-amount)
      receiverAcc.movements.push(amount)
      updateUI(currentAccount)
    } 
  })


// implementing close account

btnClose.addEventListener('click', (e)=>{
  e.preventDefault()
  
   if(inputCloseUsername.value === currentAccount.userName && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.userName === currentAccount.userName)
    console.log(index)

    // delete account
    accounts.splice(index,1)

    // Hide UI
    containerApp.style.opacity = 0;
   }
   inputCloseUsername.value = inputClosePin.value = ''
})

