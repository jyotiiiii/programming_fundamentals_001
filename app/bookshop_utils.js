function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
function makeHalfPrice(discount) {
    return discount * 0.5;
}
function countBooks(catalogue) {
    return catalogue.length;
}
// below could be written as
// return book.quantity >= 1; (this line says return true or fale)
function isInStock(stock) {
    if (stock.quantity > 0) {
        return true;
    } else {
        return false;
    }
}
function getTotalOrderPrice(order, numBooks) {
    return order * numBooks * 1.2;
}
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};