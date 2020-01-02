module.exports = function Cart(initItems) {
    this.items = initItems;
    this.totalQnty = 0;
    this.totalPrice = 0;

    this.add = (item, id) => {
        let storedItems = this.items[id];

    }
};