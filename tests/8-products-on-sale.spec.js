const { getProductsOnSale } = require('../src/8-products-on-sale');

describe('8 - Crie uma função que busque por produtos na promoção', () => {
  it('ao buscar por produtos em promoção, o valor retornado pela função deve ser um `array` de elementos do tipo `object`', () => {
    const receivedValue = getProductsOnSale();
    
    expect(Array.isArray(receivedValue)).toBe(true);
    receivedValue.forEach(productObject => expect(typeof productObject).toBe('object') );
  });

  it('os objetos do array devem ter 3 chaves: `description`, `formattedPrice` e `onSale`', () => {
    const receivedValue = getProductsOnSale();
    
    receivedValue.forEach((product) => {
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('formattedPrice');
      expect(product).toHaveProperty('onSale');
    });
  });
  
  it('o array retornado deve ter objetos cuja chave `description` seja a mesma do objeto original, a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY` e a chave `onSale` seja `true`', () => {
    const expectedValues = [
      {
        description: 'Lentilha cozida Vapza, lata de 200g, fonte de proteínas e fibras.',
        formattedPrice: 'R$ 3.99',
        onSale: true
      },
      {
        description: 'Refrigerante Coca-Cola, lata de 350ml, sabor original e refrescante.',
        formattedPrice: 'R$ 2.99',
        onSale: true
      },
      {
        description: 'Suco de uva Del Valle, garrafa de 1L, sem adição de açúcares e conservantes.',
        formattedPrice: 'R$ 7.99',
        onSale: true
      },
      {
        description: 'Filé de salmão Seara, embalagem de 500g, fonte de proteínas e ômega-3.',
        formattedPrice: 'R$ 39.99',
        onSale: true
      },
      {
        description: 'Biscoito recheado Nestlé, pacote de 130g, sabor chocolate.',
        formattedPrice: 'R$ 1.99',
        onSale: true
      },
      {
        description: 'Beterraba Hortifruti, pacote de 400g, beterrabas frescas e saborosas.',
        formattedPrice: 'R$ 2.99',
        onSale: true
      }
    ];

    const receivedValues = getProductsOnSale();
    
    expect(receivedValues).toEqual(expectedValues);
  });

});
