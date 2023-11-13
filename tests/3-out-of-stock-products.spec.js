let { getOutOfStockProducts } = require('../src/3-out-of-stock-products');

describe('3 - Crie uma função que retorne os nomes dos produtos indisponíveis do estoque', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('o valor retornado pela função deve ser um `array`', () => {
    const expectedValue = true;
    const receivedValue = Array.isArray(getOutOfStockProducts());
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('todos os elementos do array retornado pela função devem ser do tipo `string`', () => {
    const expectedValue = true;
    const receivedValue = getOutOfStockProducts().every(product => typeof product === 'string');
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('ao utilizarmos o data.json como fonte do estoque, a função retorna um array com `4` elementos', () => {
    const expectedValue = 4;
    const receivedValue = getOutOfStockProducts().length;
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde o estoque tenha 20 produtos indisponíveis, a função retorna um array com `20` elementos', () => {
    jest.mock('../src/data.json', () => (
      [{quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0},
        {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0},
        {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0},
        {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}, {quantityInStock: 0}]
    ));
    let { getOutOfStockProducts } = require('../src/3-out-of-stock-products');
    
    const expectedValue = 20;
    const receivedValue = getOutOfStockProducts().length;
    
    expect(receivedValue).toBe(expectedValue);
  });
});
