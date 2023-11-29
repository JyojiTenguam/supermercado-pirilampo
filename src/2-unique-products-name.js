const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  const productsUnique = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    productsUnique.push(stockProducts[index].productName);
  }

  return productsUnique;
};

module.exports = { getUniqueProductsName };
