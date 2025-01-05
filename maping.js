// 2. map
// We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.

// syntax in a normal or a function declaration

// function callback(item, i){
//     return // code goes here
// }

// const modifiedArray = Array.map(callback)

// // or syntax in an arrow function

// const callback = (item, i) =>{
//     return // code goes here
// }

// const modifiedArray = Array.map(callback)

// Now, let us modify the countries array using the map method. The index is an optional parameter

// const countries = ['somali', 'saudi', 'Dubai', 'Qatar']
// const newCountries = countries.map(function(country){
//     return country.toUpperCase() 
// })

// console.log(newCountries)

// map using an arrow function call back
// const countries = ['somali', 'saudi', 'Dubai', 'Qatar']
// const newCountries = countries.map(country => country.toUpperCase())

// console.log(newCountries)


// As you can see that map is very handy to modify an array and to get an array back. Now, let us create an array of the length of the countries from the countries array.

// const countries = ['somali', 'saudi', 'Dubai', 'Qatar']
// const countriesLenth = countries.map(country => country.length)
// console.log(countriesLenth)


// Let us see another more example

// const numbers = [1,2,3,4,5]
// const squares = numbers.map(n => n**2)
// console.log(squares)

