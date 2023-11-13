let { getUniqueProductsName } = require('../src/2-unique-products-name');

describe('2 - Crie uma função que retorne os nomes dos produtos únicos em estoque', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('o valor retornado pela função deve ser um `array`', () => {
    const expectedValue = true;
    const receivedValue = Array.isArray(getUniqueProductsName());
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('todos os elementos do array retornado pela função devem ser do tipo `string`', () => {
    const expectedValue = true;
    const receivedValue = getUniqueProductsName().every(product => typeof product === 'string');
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('ao utilizarmos o data.json como fonte do estoque, o índice `0` do array retornado pela função deve conter o valor `Arroz`', () => {
    const expectedValue = 'Arroz';
    const receivedValue = getUniqueProductsName()[0];
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('ao utilizarmos o `data.json` como fonte do estoque, o índice `24` do array retornado pela função deve conter o valor `Rúcula`', () => {
    const expectedValue = 'Rúcula';
    const receivedValue = getUniqueProductsName()[24];
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde o estoque tenha 29 produtos, a função deve retornar um array com `29` elementos', () => {
    const expectedValue = 29;
    const receivedValue = getUniqueProductsName().length;
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde o estoque esteja vazio, a função deve retornar um array com `0` elementos', () => {
    jest.mock('../src/data.json', () => ([]));
    let { getUniqueProductsName } = require('../src/2-unique-products-name');

    const expectedValue = 0;
    const receivedValue = getUniqueProductsName().length;
    
    expect(receivedValue).toBe(expectedValue);
  });

});
