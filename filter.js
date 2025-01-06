// 3. filter
// As you may understand from the literal meaning of filter, it filters out items based on some criteria. The filter method like forEach and map is used with an array and it returns an array of the filtered items.

// For instance if we want to filter out countries containing a substring land from an array of countries. See the example below:

// syntax in a normal or a function declaration

// function callback(item){
//     return  // boolean
// }

// const filteredArray = array.filter(callback);

// // or syntax in an arrow function

// const callback = (item) => {
//     return // boolean
// }

// const filteredArray = array.filter(callback);

// const countries = ['Finland', 'Estonia', 'somaliland', 'Sweden', 'Norway', 'Iceland']
// const countriesWithland = countries.filter(country => country.includes('land'))
// console.log(countriesWithland) // ['Finland',somaliland, 'Iceland']


// How about if we want to filter out countries not containing the substring land. We use negation to achieve that.

// const countries = ['Finland', 'Estonia', 'somaliland', 'Sweden', 'Norway', 'Iceland']
// const countriesWithoutLand = countries.filter(country => !country.includes('land'))
// console.log(countriesWithoutLand) // ['Estonia', 'Sweden', 'Norway']


// Let's see an additional example about the filter, let us filter even or odd numbers from an array of numbers

// const numbers = [0,1,2,3,4,5,6,7,8,9,10]
// const evens = numbers.filter(n => n%2 === 0)
// const odds = numbers.filter(n => n%2 !== 0)
// console.log(evens) // [0,2,4,6,8,10]
// console.log(odds) // [1,3,5,7,9]