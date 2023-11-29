const stockProducts = require('./data.json');

const searchProductByName = (name) => {
  // Desenvolva seu código dentro dessa função...
  let productByName = null;

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === name) {
      productByName = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
      };
      return productByName;
    }
  }
  return null;
};

module.exports = { searchProductByName };
