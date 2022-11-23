// {
//     "presets": [
//         "@babel/preset-env", "@babel/preset-react"
//     ],
//         "plugins": [
//             [
//                 require(‘@babel/plugin-proposal-decorators’).default,
//     {
//         legacy: true
//     }
//         ],
//         ]
// }

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
