// If we are interested in the first occurrence of a certain item or element in an array we can use find method. Unlike map and filter, find just return the first occurrence of an item instead of an array.

// syntax in a normal or a function declaration

// function callback(item) {
//     return // code goes here
//     }
    
//     const item = array.find(callback)
    
//     // or syntax in an arrow function
    
//     const reduced =  callback(item) => {
//     return // code goes here
//     }
//     const item = array.find(callback)


// Let find the first even number and the first odd number in the numbers array.

// const numbers = [0,1,2,3,4,5,6,7,8,9,10]
// const FirstevenNum = numbers.find((n)=> n%2===0)
// const FirstOddNum = numbers.find((n)=> n%2 !== 0)
// console.log(FirstevenNum)
// console.log(FirstOddNum)

// Let us find the first country which contains a substring way

// const countries = ['somali', 'saudi', 'Dubai', 'yeman', 'falastin']
// const countriesWithI = countries.find((country) => country.includes('i'))
// console.log(countriesWithI) //somali


// Let us find the first country which has only six characters

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const sevenCharsCountry = countries.find((country) => country.length === 7)
// console.log(sevenCharsCountry) // Finland


// Let us find the first country in the array which has the letter 'o'

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const index = countries.find((country) => country.includes('o'))
// console.log(index) // Estonia