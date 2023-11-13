const { getProductsWithAllergyOrIntoleranceInfo } = require('../src/9-products-with-allergy-or-intolerance-info');

describe('9 - Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância', () => {
  it('ao buscar por produtos com informação de alergia ou intolerância, o valor retornado pela função deve ser um `array` cujo os elementos sejam do tipo `object`', () => {
    const receivedValue = getProductsWithAllergyOrIntoleranceInfo();
    expect(Array.isArray(receivedValue)).toBe(true);
    expect(receivedValue).not.toHaveLength(0);
    receivedValue.forEach(productObject => expect(typeof productObject).toBe('object') );
  });

  it('os objetos do array devem possuir, obrigatoriamente, as chaves `description` e `formattedPrice`', () => {
    const receivedValue = getProductsWithAllergyOrIntoleranceInfo();
    expect(receivedValue).not.toHaveLength(0);
    receivedValue.forEach(productObject => {
      expect(productObject).toHaveProperty('description');
      expect(productObject).toHaveProperty('formattedPrice');
    });
  });

  it('o valor da chave `description` deve ser o mesmo do objeto original, a chave `formattedPrice` deve estar no formato `R$ XX.YY` ou `R$ X.YY` e, quando o produto possuir informações de alergia ou intolerância, o valor da chave `allergyOrIntoleranceMessage` deve seguir o formato `Pode conter: {item 1} {item 2} {item N}`', () => {
    const expectedValue = [{
        description: 'Arroz integral Tio João, pacote de 1kg, rico em fibras e vitaminas.',
        formattedPrice: "R$ 10.99",
        allergyOrIntoleranceMessage: 'Pode conter: glúten soja castanhas'
      },
      {
        description: 'Macarrão Renata, pacote de 500g, fonte de carboidratos.',
        formattedPrice: "R$ 5.99",
        allergyOrIntoleranceMessage: 'Pode conter: glúten'
      },
      {
        description: 'Granola Mãe Terra, pacote de 300g, fonte de fibras e minerais.',
        formattedPrice: "R$ 12.99",
        allergyOrIntoleranceMessage: 'Pode conter: castanhas'
      },
      {
        description: 'Iogurte Danone, pote de 500g, fonte de cálcio e probióticos.',
        formattedPrice: "R$ 5.49",
        allergyOrIntoleranceMessage: 'Pode conter: leite'
      },
      {
        description: 'Pizza sabor muçarela Sadia, caixa de 450g, massa crocante e queijo derretido.',
        formattedPrice: "R$ 12.99",
        allergyOrIntoleranceMessage: 'Pode conter: glúten leite'
      },
      {
        description: 'Creme de avelã com cacau Nutella, pote de 350g, ideal para passar no pão ou comer com frutas.',
        formattedPrice: "R$ 19.99",
        allergyOrIntoleranceMessage: 'Pode conter: castanhas leite'
      },
      {
        description: 'Nozes sem casca Fazenda São Francisco, pacote de 200g, fonte de gorduras boas e minerais.',
        formattedPrice: "R$ 19.99",
        allergyOrIntoleranceMessage: 'Pode conter: castanhas'
      },
      {
        description: 'Biscoito recheado Nestlé, pacote de 130g, sabor chocolate.',
        formattedPrice: "R$ 1.99",
        allergyOrIntoleranceMessage: 'Pode conter: glúten leite soja'
      },
      {
        description: 'Cerveja Pilsen Brahma, lata de 350ml, sabor refrescante e leve.',
        formattedPrice: "R$ 3.49",
        allergyOrIntoleranceMessage: 'Pode conter: glúten'
      },
      {
        description: 'Cerveja Weiss Eisenbahn, garrafa de 500ml, sabor encorpado e aromático.',
        formattedPrice: "R$ 7.99",
        allergyOrIntoleranceMessage: 'Pode conter: glúten'
      },
      {
        description: 'Cerveja India Pale Ale Colorado, lata de 473ml, sabor amargo e intenso.',
        formattedPrice: "R$ 9.99",
        allergyOrIntoleranceMessage: 'Pode conter: glúten'
      }
    ];

    const receivedValue = getProductsWithAllergyOrIntoleranceInfo()
      .filter((product) => product.allergyOrIntoleranceMessage);

    expect(receivedValue).toEqual(expectedValue);
  });

});
