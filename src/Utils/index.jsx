const TotalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
}

export {TotalPrice}