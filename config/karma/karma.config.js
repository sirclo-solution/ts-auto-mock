const webpackConfig = require('./../webpack.test.js');

module.exports = function(config) {
    const _config = {
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            {
                pattern: '**/extends.test.ts',
                watched: false
            }
        ],
        preprocessors: {
            '**/extends.test.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true
    };

    config.set(_config);
};