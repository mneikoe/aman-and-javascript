// enhanced object literals



// this below object is without enhanced literal objects
 const restaurant = {
    name: 'Aman Cooks',
    location : 'jamshedpur',
    categories : ['Italian',"Pizzeria", 'Vegetarian','Organic'],
    starterMenu : ['biscuit','brownie','lollipop','salad'],
    mainMenu : ['chicken','paneer','pasta'],
    openingHours : {
        thu : {
            open : 12,
            close : 22,
        },
        fri : {
            open : 11,
            close : 23,
        },

    },
    order : function (starterIndex, minIndex){
        return [ this.starterMenu[starterIndex], this.mainMenu[minIndex]]
    },
}


// using enhanced literal objects we can add one object to another object
 const Hours = {
    thu : {
        open : 12,
        close : 22,
    },
    fri : {
        open : 11,
        close : 23,
    },

}

const newrestaurant = {
    name: 'Aman Cooks',
    location : 'jamshedpur',
    categories : ['Italian',"Pizzeria", 'Vegetarian','Organic'],
    starterMenu : ['biscuit','brownie','lollipop','salad'],
    mainMenu : ['chicken','paneer','pasta'],
    

    //enhanced object literals
    Hours,
    order : function (starterIndex, minIndex){
        return [ this.starterMenu[starterIndex], this.mainMenu[minIndex]]
    },
}

console.log (newrestaurant)