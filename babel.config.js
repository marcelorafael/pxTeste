module.exports = {
  presets: ['module:metro-react-native-babel-preset']
}
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@': './src/'
        }
      }
    ]
  ]
}


// ,
//   "babel": { 
//     "plugins": [ 
//         [ "@babel/plugin-proposal-decorators", { "legacy": true } ], 
//         [ "@babel/plugin-proposal-class-properties", { "loose": true } ],
    // ['@babel/plugin-proposal-private-methods', { loose: true }],
    // ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
//       ] 
//     }