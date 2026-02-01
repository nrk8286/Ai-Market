const ConfigStore = (function() {
class ConfigStore {
  constructor(options = {}) {
    const explicitFile = !!options.useFile;
    const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
    this.useFile = explicitFile && isNode;
    this.filePath = null;
    this.config = {};

    if (this.useFile) {
      try {
        const fs = require('fs');
        const path = require('path');
        this.filePath = path.join(process.cwd(), 'data', 'config.json');
        if (!fs.existsSync(path.dirname(this.filePath))) {
          fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
        }
        if (fs.existsSync(this.filePath)) {
          const raw = fs.readFileSync(this.filePath, 'utf8') || '{}';
          this.config = JSON.parse(raw);
        } else {
          this.config = {};
          fs.writeFileSync(this.filePath, JSON.stringify(this.config, null, 2));
        }
      } catch (err) {
        this.useFile = false;
        this.config = {};
      }
    }
  }

  _persist() {
    if (this.useFile && this.filePath) {
      try {
        const fs = require('fs');
        fs.writeFileSync(this.filePath, JSON.stringify(this.config, null, 2));
      } catch (err) {
        // ignore
      }
    }
  }

  get(key) {
    return this.config[key];
  }

  set(key, value) {
    this.config[key] = value;
    this._persist();
    return this.config[key];
  }

  getAll() {
    return { ...this.config };
  }
}

return ConfigStore;
})();

module.exports = ConfigStore;
module.exports.default = ConfigStore;
