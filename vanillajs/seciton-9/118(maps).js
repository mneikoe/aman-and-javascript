//map is a data structure which is used to map values to keys  just like an object data is stored in key value pairs
// in objects keys are only a string but in maps keys could of any data type

// creation of map

const restaurant = new Map()
restaurant.set('name','aman foods')// here syntax is like .set(key,value)
restaurant.set(1,'jamshedpur')
console.log(restaurant.set(2,'bhopal'))// .set method also returns the map 

// chaining using .set method

restaurant.set(('categories'),['vagetarian','organic','nonvegetarian'])
.set('open',11).set('close',23)

console.log(restaurant)


//getting data from a map using .get method pass key as parameter th data tpep of the key matters while passing
console.log(restaurant.get('name'))
console.log(restaurant.get(1)) 


// checking an element xist or not using .has method returns true/false

console.log(restaurant.has('categories'))

//deleting in map 

restaurant.delete(2)
console.log ('map after deletion')
console.log(restaurant)

// size of map by .size

console.log("size of the map is "+ restaurant.size)