module.exports = {
  module:{
    rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Step3. Injects common JS to DOM
            'css-loader',    // Step2. Turns CSS into common JS
            'sass-loader'   // Step1. Turns SASS into valid CSS
           ]
        }
      ]
  }
};