// 4. reduce
// Like forEach, map, and filter, reduce is also used with an array and it returns a single value. You can associate reduce with a blender. You put different fruits to a blend and you get a mix of fruit juice. The juice is the output from the reduction process.

// We use the reduce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array. Let us see the following different example to make this explanation more clear.


// syntax in a normal or a function declaration

// function callback(acc, cur) {
//     return // code goes here
// }

// const reduced = array.reduce(callback, optionalInitialValue)

// // or syntax in an arrow function

// const reduced =  callback(acc, cur) => {
//     return // code goes here
// }
// const reduced = array.reduce(callback)


// const numbers = [0,1, 2, 3, 4, 5,6,7,8,9,10]
// const sum = numbers.reduce((acc, cur) =>  acc + cur)
// console.log(sum) // 55


// Reduce has a default initial value which is zero. Now, let us use a different initial value which is 5 in this case.

// const numbers = [0,1, 2, 3, 4, 5,6,7,8,9,10]
// const sum = numbers.reduce((acc, cur) =>  acc + cur, 5)
// console.log(sum) // 60


// Let us concatenate strings using reduce

// const strs = ['I', 'am', 'a', 'developer']
// const sentence = strs.reduce((acc, cur) => acc + ' ' + cur)
// console.log(sentence) // I am a developer

// We can multiply items of an array using reduce and we will return the value.

// const numbers = [1,2,3,4,5]
// const product = numbers.reduce((acc, cur) => acc * cur)
// console.log(product) // 120

// Let us try it with an initial value

const numbers = [1,2,3,4,5]
const product = numbers.reduce((acc, cur) => acc * cur, 10)
console.log(product) // 1200