// In this article, I will try to help you to have a very good understanding of the most common feature of JavaScript, functional programming.

// Functional programming allows you to write shorter code, clean code, and also to solve complicated problems which might be difficult to solve in a traditional way.


// 1. forEach

// syntax in a normal or a function declaration

// function callback(item, index, arr){}
// array.forEach(callback);

// or syntax in an arrow function

// const callback = (item, i, arr) =>{}
// array.forEach(callback);

// Let see different examples

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// countries.forEach(function(country, index, arr){
// console.log(index, country.toUpperCase());
// })


// If there is no much code inside the code block we can use an arrow function and we can write it without a curly bracket. The index and the array parameters are optional, we can omit them.
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];

// countries.forEach((country, i) => console.log(i, country.toUpperCase()));

// For example if we like to change each country to uppercase and store it back to an array we write it as follows.

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// const newCountries = [];
// countries.forEach((country => newCountries.push(country.toUpperCase())));
// console.log(newCountries);


// Let us see more examples. For instance if we want to sum an array of numbers we can use forEach or reduce. Let us see how we use forEach to sum all numbers in an array.

// const numbers = [1,2,3,4,5]
// let sum = 0
// numbers.forEach((number) => sum += number)
// console.log(sum)