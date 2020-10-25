const path = require('path');

module.exports = function override(config, env) {
    if (!config.externals) {
        config.externals = {};
    }

    config.externals = {
        ...config.externals,
      react: 'React',
    };

    if (!config.plugins) {
        config.plugins = {};
    }

    // config.plugins = [
    //     ...config.plugins,
    //     new webpack.IgnorePlugin(/react/)
    // ];
    
    config.module.rules.push(
        {
            test: /\.module\.css$/,
            use: [
                'js-loader',
                'style-loader',
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }
            ],
            include: path.resolve('src')
        }
    )
    return config
}