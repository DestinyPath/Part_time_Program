// 在配置模块（例如：config.js）中
const path = require('path');
const projectRoot = __dirname;
const db = path.join(projectRoot, 'model', 'db.js');

module.exports = {
  db,
};