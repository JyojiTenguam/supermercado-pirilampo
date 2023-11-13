const { searchProductByName } = require('../src/6-search-product-by-name');

describe('6 - Crie uma função que busque um produto pelo nome', () => {
  it('ao buscar por um produto existente, o valor retornado pela função não deve ser `null`', () => {
    const receivedValue = searchProductByName('Feijão');
    
    expect(receivedValue).not.toBeNull();
  });

  it('ao buscar por um produto existente, a função deve retornar um objeto com as 2 chaves: `description` e `formattedPrice`', () => {
    const receivedValue = searchProductByName('Arroz');
    
    expect(receivedValue).toHaveProperty('description');
    expect(receivedValue).toHaveProperty('formattedPrice');
  });

  it('ao buscar por um produto existente, a função deve retornar um objeto cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`', () => {
    const expectedValueForNutella = {
      description: 'Creme de avelã com cacau Nutella, pote de 350g, ideal para passar no pão ou comer com frutas.',
      formattedPrice: 'R$ 19.99'
    };

    const expectedValueForSweetPotato = {
      description: 'Batata Doce Hortifruti, pacote de 1kg, batatas doces frescas e saborosas.',
      formattedPrice: 'R$ 6.99'
    };

    const receivedValueForNutella = searchProductByName('Nutella');
    const receivedValueForSweetPotato = searchProductByName('Batata Doce');
    
    expect(receivedValueForNutella).toEqual(expectedValueForNutella);
    expect(receivedValueForSweetPotato).toEqual(expectedValueForSweetPotato);
  });

  it('ao buscar por um produto inexistente, o valor retornado pela função deve ser `null`', () => {
    const receivedValue = searchProductByName('xablau');
    
    expect(receivedValue).toBeNull();
  });

  it('ao chamar a função sem passar parâmetro, o valor retornado deve ser `null`', () => {
    const receivedValue = searchProductByName();
    
    expect(receivedValue).toBeNull();
  });
});
