//forEach loop with maps and sets
// map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach(function(value,key,map){
    console.log(`${key} ${value}`)
  })


  console.log('---------sets------------')
const uniqueCurrencies = new Set(['usd','gbp','eur','usd','eur'])
console.log(uniqueCurrencies)

uniqueCurrencies.forEach(function(value,key,Set){
    console.log(`${key}: ${value} `)
})