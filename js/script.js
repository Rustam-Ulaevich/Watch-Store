let items = [
    { price: 50},
    { price: -45},
    { price: '45'},
    { price: 57},
]

 const calculateTotal = (goods) => {
    let res = 0
    for ( let i of goods){
        if( typeof i.price === 'number' && i.price >= 0){
            res += i.price
        }
    }
    return res
}

const withMap = (arr) => {
    let newArr = arr.map( el => +el.price)
    return newArr.reduce((acm, val) => acm + val)
}

console.log(calculateTotal(items));
console.log(withMap(items));



