const { sortString, sortNumbers } = require('./functions.js')
const { arrayCars, arrayNumbers } = require('./data')

const stringSort = sortString(arrayCars)
console.log(stringSort);

const numbersSort = sortNumbers(arrayNumbers)
console.log(numbersSort);