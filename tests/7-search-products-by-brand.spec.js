const { searchProductsByBrand } = require('../src/7-search-products-by-brand');

describe('7 - Crie uma função que busque por produtos de uma marca específica', () => {
  it('ao buscar por uma marca existente, o valor retornado pela função deve ser um `array` de elementos do tipo `object`', () => {
    const receivedValue = searchProductsByBrand('Sadia');
    
    expect(Array.isArray(receivedValue)).toBe(true);
    receivedValue.forEach(productObject => expect(typeof productObject).toBe('object') );
  });

  it('ao buscar por uma marca inexistente, o valor retornado pela função deve ser um array `vazio`', () => {
    const receivedValue = searchProductsByBrand('xablau');
    
    expect(receivedValue).toHaveLength(0);
  });

  it('ao chamar a função sem passar parâmetro, o valor retornado pela função deve ser um array `vazio`', () => {
    const receivedValue = searchProductsByBrand();
    
    expect(receivedValue).toHaveLength(0);
  });

  it('ao buscar pela marca Hortifruti, utilizando o data.json como fonte do estoque, a função deve retornar um array com `6` elementos', () => {
    const receivedValue = searchProductsByBrand('Hortifruti');
    
    expect(receivedValue).toHaveLength(6);
  });

  it('ao buscar produtos pela marca, o array retornado deve ter objetos cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`', () => {
    const expectedValues = [
      {
        description: 'Alface Hortifruti, pacote de 200g, folhas frescas e crocantes.',
        formattedPrice: 'R$ 4.99'
      },
      {
        description: 'Rúcula Hortifruti, pacote de 100g, folhas verdes e picantes.',
        formattedPrice: 'R$ 3.99'
      },
      {
        description: 'Agrião Hortifruti, pacote de 150g, folhas verdes e picantes.',
        formattedPrice: 'R$ 5.99'
      },
      {
        description: 'Cenoura Hortifruti, pacote de 500g, cenouras frescas e crocantes.',
        formattedPrice: 'R$ 3.99'
      },
      {
        description: 'Beterraba Hortifruti, pacote de 400g, beterrabas frescas e saborosas.',
        formattedPrice: 'R$ 2.99'
      },
      {
        description: 'Batata Doce Hortifruti, pacote de 1kg, batatas doces frescas e saborosas.',
        formattedPrice: 'R$ 6.99'
      }
    ]

    const receivedValues = searchProductsByBrand('Hortifruti');
    
    expect(receivedValues).toEqual(expectedValues);
  });

});
