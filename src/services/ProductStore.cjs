const ProductStore = (function() {
class ProductStore {
  constructor(options = {}) {
    this.useFile = !!options.useFile;
    this.filePath = null;
    this.items = [
      { id: 1, name: 'AI Content Generator', price: 100 },
      { id: 2, name: 'SEO Optimization Tool', price: 200 }
    ];
  }

  getAll() {
    return this.items;
  }

  getById(id) {
    return this.items.find(i => String(i.id) === String(id)) || null;
  }

  create(data) {
    const id = this.items.length ? (Math.max(...this.items.map(i => i.id)) + 1) : 1;
    const item = { id, ...data };
    this.items.push(item);
    return item;
  }

  update(id, next) {
    const idx = this.items.findIndex(i => String(i.id) === String(id));
    if (idx === -1) return null;
    this.items[idx] = Object.assign({}, this.items[idx], next);
    return this.items[idx];
  }

  delete(id) {
    const idx = this.items.findIndex(i => String(i.id) === String(id));
    if (idx === -1) return false;
    this.items.splice(idx, 1);
    return true;
  }
}

return ProductStore;
})();

module.exports = ProductStore;
module.exports.default = ProductStore;
