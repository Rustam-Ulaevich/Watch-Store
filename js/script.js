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

const logger = (kind) => {
    const colors = {
        warning: '\x1b[1;33m',
        error: '\x1b[0;39m',
        info: '\x1b[1;37m'
    };
    const color = colors[kind] || colors.info
    return (s) => {
        const date = new Date().toISOString();
        console.log(color + date + '\t' + s)
    }
}

const warning = logger('warning')
const error = logger('error')
const info = logger('info')

 warning('Осторожно, последнее предупреждение')
 error('Пипец!!!')
 info('Не ссы, всё ок!')



