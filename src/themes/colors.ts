const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

const colors = {
    primary: '#3f51b5',
    primaryDark: '#2c287e',
    staticDirs: ['public'],
    babel: async options => ({
        ...options,
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-private-methods',
            '@babel/plugin-proposal-private-property-in-object',
        ]
    }),
    webpackFinal: async (config) => {
        config.resolve.plugins = [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../tsconfig.json')
            }),
        ];
        return config
    },
}