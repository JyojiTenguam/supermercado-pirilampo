let { getUniqueProductsAmount } = require('../src/1-unique-products-amount');

describe('1 - Crie uma função que retorne a quantidade de produtos únicos em estoque', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('o valor retornado pela função deve do tipo `number`', () => {
    const expectedValue = 'number';
    const receivedValue = typeof getUniqueProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('ao utilizarmos o data.json como fonte do estoque, a função deve retornar o número `29`', () => {
    const expectedValue = 29;
    const receivedValue = getUniqueProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde o estoque tenha 5 produtos únicos, a função deve retornar o número `5`', () => {
    jest.mock('../src/data.json', () => ([{}, {}, {}, {}, {}]));
    const { getUniqueProductsAmount } = require('../src/1-unique-products-amount');

    const expectedValue = 5;
    const receivedValue = getUniqueProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde o estoque esteja vazio, a função deve retornar o número `0`', () => {
    jest.mock('../src/data.json', () => ([]));
    const { getUniqueProductsAmount } = require('../src/1-unique-products-amount');

    const expectedValue = 0;
    const receivedValue = getUniqueProductsAmount();
    
    expect(receivedValue).toBe(expectedValue);
  });

});
