const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => stockProducts.length;
module.exports = { getUniqueProductsAmount };
