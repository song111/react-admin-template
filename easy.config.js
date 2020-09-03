const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
  baseURL: '/',
  pages: {
    index: {
      entry: './src/index.tsx',
      template: './public/index.html',
      hash: true
    }
  },
  alias: {
    public: './public',
    src: './src'
  },
  proxy: {},
  plugins: [],
  chainWebpack: (config) => {
    config.resolve.extensions.add('.ts').add('.tsx');
    config.module
      .rule('typecript')
      .test(/\.tsx?$/)
      .use('awesome-typescript-loader')
      .loader('awesome-typescript-loader');

    // 打包压缩限制多进程
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].parallel = false;
        return args;
      });
    }

    config.plugin('typescript').use(CheckerPlugin);
  }
};
