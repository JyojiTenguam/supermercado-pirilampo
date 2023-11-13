const { getProductsAmount } = require('../src/5-products-amount');

describe('5 - Crie uma função que retorne o total de produtos em estoque', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('valor retornado pela função deve ser do tipo `number`', () => {
    const expectedValue = 'number';
    const receivedValue = typeof getProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('ao utilizarmos o data.json como fonte do estoque, a função deve retornar o número `633`', () => {
    const expectedValue = 633;
    const receivedValue = getProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde o estoque tenha 4857 produtos, a função deve retornar o número `4857`', () => {
    jest.mock('../src/data.json', () => ( [{quantityInStock: 4857}] ));
    let { getProductsAmount } = require('../src/5-products-amount');

    const expectedValue = 4857;
    const receivedValue = getProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });
});
