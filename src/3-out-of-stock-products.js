const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  const productNot = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      productNot.push(stockProducts[index].productName);
    }
  }
  return productNot;
};
module.exports = { getOutOfStockProducts };
