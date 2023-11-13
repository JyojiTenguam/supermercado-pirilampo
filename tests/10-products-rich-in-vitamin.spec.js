const { getProductsRichInVitamin } = require('../src/10-products-rich-in-vitamin');

const expectedProductsWithVitamins = [
  {
    description: 'Arroz integral Tio João, pacote de 1kg, rico em fibras e vitaminas.',
    formattedPrice: 'R$ 10.99',
    vitaminsInformation: [ 'vitaminB1 - 20', 'vitaminB6 - 10' ]
  },
  {
    description: 'Feijão preto Camil, pacote de 1kg, fonte de proteínas e ferro.',
    formattedPrice: 'R$ 8.99',
    vitaminsInformation: [ 'vitaminB6 - 6' ]
  },
  {
    description: 'Azeite de oliva Andorinha, garrafa de 500ml, extra virgem e rico em antioxidantes.',
    formattedPrice: 'R$ 18.99',
    vitaminsInformation: [ 'vitaminE - 15', 'vitaminK - 4' ]
  },
  {
    description: 'Batata Agrocampo, saco de 2kg, fonte de carboidratos e fibras.',
    formattedPrice: 'R$ 7.99',
    vitaminsInformation: [ 'vitaminC - 24', 'vitaminB6 - 10' ]
  },
  {
    description: 'Lentilha cozida Vapza, lata de 200g, fonte de proteínas e fibras.',
    formattedPrice: 'R$ 3.99',
    vitaminsInformation: [ 'vitaminB6 - 15' ]
  },
  {
    description: 'Suco de uva Del Valle, garrafa de 1L, sem adição de açúcares e conservantes.',
    formattedPrice: 'R$ 7.99',
    vitaminsInformation: [ 'vitaminC - 30' ]
  },
  {
    description: 'Pizza sabor muçarela Sadia, caixa de 450g, massa crocante e queijo derretido.',
    formattedPrice: 'R$ 12.99',
    vitaminsInformation: [ 'vitaminA - 4' ]
  },
  {
    description: 'Nozes sem casca Fazenda São Francisco, pacote de 200g, fonte de gorduras boas e minerais.',
    formattedPrice: 'R$ 19.99',
    vitaminsInformation: [ 'vitaminB6 - 5' ]
  },
  {
    description: 'Filé de salmão Seara, embalagem de 500g, fonte de proteínas e ômega-3.',
    formattedPrice: 'R$ 39.99',
    vitaminsInformation: ['vitaminA - 1', 'vitaminD - 50', 'vitaminB6 - 25', 'vitaminB12 - 80']
  },
  {
    description: 'Carne bovina moída Swift, pacote de 500g, ideal para preparar diversas receitas.',
    formattedPrice: 'R$ 14.99',
    vitaminsInformation: [ 'vitaminB6 - 15', 'vitaminB12 - 50' ]
  },
  {
    description: 'Laranja fresca Fazenda Doce Sabor, saco com 2kg, fonte de vitamina C.',
    formattedPrice: 'R$ 7.99',
    vitaminsInformation: [ 'vitaminA - 2', 'vitaminC - 80' ]
  },
  {
    description: 'Ovo branco Granja XYZ, caixa com 30 unidades, fonte de proteínas e vitaminas.',
    formattedPrice: 'R$ 11.99',
    vitaminsInformation: ['vitaminA - 6', 'vitaminD - 20', 'vitaminB6 - 5', 'vitaminB12 - 15']
  },
  {
    description: 'Cerveja India Pale Ale Colorado, lata de 473ml, sabor amargo e intenso.',
    formattedPrice: 'R$ 9.99',
    vitaminsInformation: [ 'vitaminB6 - 10' ]
  },
  {
    description: 'Alface Hortifruti, pacote de 200g, folhas frescas e crocantes.',
    formattedPrice: 'R$ 4.99',
    vitaminsInformation: [ 'vitaminA - 80', 'vitaminC - 6', 'vitaminB6 - 5' ]
  },
  {
    description: 'Rúcula Hortifruti, pacote de 100g, folhas verdes e picantes.',
    formattedPrice: 'R$ 3.99',
    vitaminsInformation: [ 'vitaminA - 30', 'vitaminC - 15', 'vitaminB6 - 10' ]
  },
  {
    description: 'Agrião Hortifruti, pacote de 150g, folhas verdes e picantes.',
    formattedPrice: 'R$ 5.99',
    vitaminsInformation: [ 'vitaminA - 150', 'vitaminC - 60', 'vitaminB6 - 5' ]
  },
  {
    description: 'Cenoura Hortifruti, pacote de 500g, cenouras frescas e crocantes.',
    formattedPrice: 'R$ 3.99',
    vitaminsInformation: [ 'vitaminA - 400', 'vitaminC - 7', 'vitaminB6 - 5' ]
  },
  {
    description: 'Beterraba Hortifruti, pacote de 400g, beterrabas frescas e saborosas.',
    formattedPrice: 'R$ 2.99',
    vitaminsInformation: [ 'vitaminA - 2', 'vitaminC - 6', 'vitaminB6 - 5' ]
  },
  {
    description: 'Batata Doce Hortifruti, pacote de 1kg, batatas doces frescas e saborosas.',
    formattedPrice: 'R$ 6.99',
    vitaminsInformation: [ 'vitaminA - 14187', 'vitaminC - 22', 'vitaminB6 - 15' ]
  }
];

describe('10 - Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional', () => {
  it('o valor retornado pela função não pode ser um `array` vazio', () => {
    const receivedValue = getProductsRichInVitamin();
    expect(receivedValue).not.toHaveLength(0)
  });
  
  it('o valor retornado pela função deve ser um `array` cujo os elementos sejam do tipo `object`', () => {
    const receivedValue = getProductsRichInVitamin();
    
    expect(Array.isArray(receivedValue)).toBe(true);
    receivedValue.forEach(productObject => expect(typeof productObject).toBe('object') );
  });

  it('os objetos do array devem ter 3 chaves: `description`, `formattedPrice` e `vitaminsInformation`', () => {
    const receivedValue = getProductsRichInVitamin();

    receivedValue.forEach(product => {
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('formattedPrice');
      expect(product).toHaveProperty('vitaminsInformation');
    });
  });

  it('o valor da chave `description` deve ser o mesmo do objeto origina, a chave `formattedPrice` dos objetos deve estar dentro do formato `R$ XX.YY` ou `R$ X.YY` e a chave `vitaminsInformation` dos objetos deve estar dentro do formato `{nome da vitamina} - {quantidade de vitamina presente}`', () => {
    const receivedValue = getProductsRichInVitamin();

    receivedValue.forEach((product, index) => {
      const expectedPrice = expectedProductsWithVitamins[index].formattedPrice;

      expect(product.formattedPrice).toBe(expectedPrice);
    });
  });

  it('a chave `vitaminsInformation` dos objetos deve ser um `array`', () => {
    const receivedValue = getProductsRichInVitamin();

    receivedValue.forEach((product) => expect(Array.isArray(product.vitaminsInformation)).toBeTruthy() );
  });
});
