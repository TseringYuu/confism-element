const path = require( 'path' );

module.exports = {
   pages: {
      index: {
         entry: 'examples/main.js',
         template: 'public/index.html',
         filename: 'index.html',
      },
   },
   chainWebpack (conf) {
      conf.resolve.alias
         .set( '@', path.resolve( 'examples' ) )
         .set( '~', path.resolve( 'packages' ) );

      conf.module
         .rule('js')
         .include.add(/packages/).end()
         .include.add(/examples/).end()
         .use('babel')
         .loader('babel-loader')
         .tap(options => {
            // to do
            return options
         });
         
   },
};
