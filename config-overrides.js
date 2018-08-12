const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    //babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};