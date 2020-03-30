const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Generate Unique iD', () => {
  it('Shoul generate an unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  })
});