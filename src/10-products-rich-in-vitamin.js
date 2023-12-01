const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  let productByName = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins !== undefined) {
      const vitaminsArray = Object.entries(stockProducts[index].nutritionalInfo.vitamins);
      let arrayVit = [];
      for (let vitIndex = 0; vitIndex < vitaminsArray.length; vitIndex += 1) {
        arrayVit.push(`${vitaminsArray[vitIndex][0]} - ${vitaminsArray[vitIndex][1]}`);
      }
      productByName.push(
        {
          description: stockProducts[index].description,
          formattedPrice: `R$ ${stockProducts[index].price}`,
          vitaminsInformation: arrayVit,
        },
      );
    }
  }
  return productByName;
};
console.log(getProductsRichInVitamin());
module.exports = { getProductsRichInVitamin };
