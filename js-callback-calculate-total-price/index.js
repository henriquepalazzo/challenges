const products = [
    { name: "Saffron", price: 50 },
    { name: "Cinnamon", price: 6 },
    { name: "Cardamom", price: 12 },
    { name: "Turmeric", price: 9 },
    { name: "Paprika", price: 4 },
    { name: "Garam Masala", price: 10 },
    { name: "Vanilla Bean", price: 15 },
    { name: "Coriander", price: 6 },
];

function calculateTotalPrice(products, extractPrices) {
    let totalPrice = 0
    for (const product of products) {
        totalPrice += extractPrice(product)
    }
    return totalPrice
}
function extractPrice(product) {
    return product.price
}
console.log('The total price is: '+calculateTotalPrice(products));

function myMap(numbers, double) {
    const results = []
    for (const number of numbers) {
        results.push(double(number))
    }
    return results
}
function double(number) {
    return number * 2
}

const numbers = [1, 2, 3, 4, 5]

console.log(myMap(numbers, double))