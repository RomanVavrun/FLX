let price = +prompt('Enter price', '1000');
let discount = +prompt('Enter discount XX%', '30');

if (price >= 0 && price <= 9999999 && discount >= 0 && discount <= 99) {
    let priceWithDiscount = price - price * discount / 100;
    let saved = price - priceWithDiscount;

    alert('Prise without discount: ' + price.toFixed(2) +
        '\nDiscount: ' + discount.toFixed(2) +
        '% \nPrice with discount: ' + priceWithDiscount.toFixed(2) +
        '\nSaved: ' + saved.toFixed(2))
} else {
    alert('Invalid input data');
}
