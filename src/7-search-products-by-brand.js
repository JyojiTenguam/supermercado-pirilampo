const stockProducts = require('./data.json');

const searchProductsByBrand = (brandName) => {
  // Desenvolva seu código dentro dessa função...
  let productByName = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === brandName) {
      productByName.push(
        {
          description: stockProducts[index].description,
          formattedPrice: `R$ ${stockProducts[index].price}`,
        },
      );
    }
  }
  return productByName;
};

module.exports = { searchProductsByBrand };
