// 1:Print the price of each product using forEach
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' }
//   ]
//     products.forEach(product => {
//         console.log(product.price)
//     })


// 2:Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.

// const products = [
//         { product: 'banana', price: 3 +"euros" },
//         { product: 'mango', price: 6 +"euros" },
//         { product: 'potato', price: 'unknown ' },
//         { product: 'avocado', price: 8 +"euros" },
//         { product: 'coffee', price: 10 +"euros" },
//         { product: 'tea', price: 'unknown' }
//       ]

//       products.forEach(product => {
//         console.log(`The price of ${product.product} is ${product.price}`)
//       })


// 3:Calculate the sum of all the prices using forEach

// const products = [
//     { product: 'banana', price: 3 }, 
//     { product: 'mango', price: 6 }, 
//     { product: 'potato', price: 'unknown' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 }, 
//     { product: 'tea', price: 'unknown' }
// ];

// let sum = 0;
// products.forEach(product => {
//     if (typeof product.price === 'number') {
//         sum += product.price;
//     }
// });

// console.log(sum); // 27

// 4:Create an array of prices using map and store it in a variable prices

// const prices = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: 'unknown' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: 'unknown' }
// ];

// const pricesArray = prices.map(product => product.price);
// console.log(pricesArray); // [3, 6, 'unknown', 8, 10, 'unknown']


// 5:Filter products with prices
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: 'unknown' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: 'unknown' }

// ]

// const productsWithPrices = products.filter(product => typeof product.price === 'number');
// console.log(productsWithPrices); // [ { product: 'banana', price: 3 }, { product: 'mango', price: 6 }, { product: 'avocado', price: 8 }, { product: 'coffee', price: 10 } ]



// 6:Use method chaining to get the sum of the prices(map, filter, reduce)

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: 'unknown' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 'unknown' }
]

// const sum = products
//     .filter(product => typeof product.price === 'number') // Filter out items with 'unknown' price
//     .map(product => product.price) // Extract the price values
//     .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0); // Sum the prices

// console.log(sum); // Output the total sum


// 7:Calculate the sum of all the prices using reduce only
// const totalsum =products.reduce((accumulator, product) => {
//     if (typeof product.price === 'number') {
//         return accumulator + product.price;
//     }
//     return accumulator;
// }, 0); // 27
// console.log(totalsum)

// 8:Find the first product which doesn't have a price value

// const product = products.find(product => typeof product.price !== 'number');
// console.log(product); // { product: 'potato', price: 'unknown' }

// 9:Find the index of the first product which does not have price value

// const index = products.findIndex(product => typeof product.price !== 'number');
// console.log(index); // 2

// 10:Check if some products do not have a price value

// const hasUnknownPrice = products.some(product => typeof product.price !== 'number');
// console.log(hasUnknownPrice); // true


// 11:Check if all the products have price value

// const allPrices = products.every(product => typeof product.price === 'number');
// console.log(allPrices); // false

// 12:Explain the difference between forEach, map, filter and reduce

// forEach: It is used to iterate over an array and perform an action on each item. It does not return a new array.
// map: It is used to create a new array by transforming each item in an existing array.
// filter: It is used to create a new array by filtering out items that do not meet a certain condition.

// 13:Explain the difference between filter, find and findIndex

// filter: It is used to create a new array by filtering out items that do not meet a certain condition.

// find: It is used to find the first item in an array that meets a certain condition. It returns the item itself.

// findIndex: It is used to find the index of the first item in an array that meets a certain condition. It returns the index of the item.

// 14:Explain the difference between some and every