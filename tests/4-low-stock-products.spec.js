const { getLowStockProducts } = require('../src/4-low-stock-products');

describe('4 - Crie uma função que retorne os produtos com baixo estoque em um formato específico', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('o valor retornado pela função deve ser um `array`', () => {
    const expectedValue = true;
    const receivedValue = Array.isArray(getLowStockProducts());
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('todos os elementos do array retornado pela função devem ser do tipo `string`', () => {
    const expectedValue = true;
    const receivedValue = getLowStockProducts().every(product => typeof product === 'string');
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('os elementos do array retornados devem estar no formato `{nome do produto}: {quantidade em estoque} unidades` ', () => {
    const expectedValue = [
      'Açúcar: 10 unidades',
      'Pizza congelada: 9 unidades',
      'Nutella: 10 unidades',
      'Salmão: 5 unidades',
      'Biscoito recheado: 10 unidades',
      'Cerveja sem glúten: 2 unidades',
      'Alface: 7 unidades'
    ];

    const receivedValue = getLowStockProducts();
    
    expect(receivedValue).toEqual(expectedValue);
  });

  it('ao utilizarmos o data.json como fonte do estoque, a função retorna um array com `7` elementos', () => {
    const expectedValue = 7;
    const receivedValue = getLowStockProducts().length;
    
    expect(receivedValue).toBe(expectedValue);
  });

  it('em um cenário onde 20 produtos estão com baixo estoque, a função retorna um array com `20` elementos', () => {
    jest.mock('../src/data.json', () => (
      [{quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5},
        {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5},
        {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5},
        {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}, {quantityInStock: 5}]
    ));
    let { getLowStockProducts } = require('../src/4-low-stock-products');
    
    const expectedValue = 20;
    const receivedValue = getLowStockProducts().length;
    
    expect(receivedValue).toBe(expectedValue);
  });
});
