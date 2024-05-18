//forEach loop



const movements= [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const movement of movements)
    {
        if (movement>0)
            console.log(`Youe deposited ${movement}`)
        else
        console.log(`You Withdrew ${movement}`)
    }

    console.log('--------using for each loop--------')
movements.forEach(function(i){
    if (i>0)
        console.log(`Youe deposited ${i}`)
    else
    console.log(`You Withdrew ${i}`)
})

for(const [x,move]of movements.entries()){
    if (move>0){
        console.log(`move ${x+1}: You Deposited ${move}`)
    }
    else 
    console.log(`move ${x+1} : You withdrew ${Math.abs(move)}`)
}