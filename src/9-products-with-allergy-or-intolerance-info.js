const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let productByName = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance !== undefined) {
      productByName.push(
        {
          description: stockProducts[index].description,
          formattedPrice: `R$ ${stockProducts[index].price}`,
          allergyMessage: `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`,
        },
      );
    }
  }
  return productByName;
};
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
