const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let productAmount = 0;

  for (let index = 0; index < stockProducts.length; index += 1) {
    productAmount += stockProducts[index].quantityInStock;
  }
  return productAmount;
};

module.exports = { getProductsAmount };
