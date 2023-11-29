const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let productAvailable = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    estoque = stockProducts[index].quantityInStock;
    if (estoque > 0 && estoque <= 10) {
      productAvailable.push(
        `${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`,
      );
    }
  }
  return productAvailable;
};

module.exports = { getLowStockProducts };
