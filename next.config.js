/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
}


module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
                // for webpack 5 use
                // { and: [/\.(js|ts)x?$/] }
            },

            use: ['@svgr/webpack'],
        });

        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        });

        return config;
    },
};

module.exports = nextConfig

// module.exports = {
//     ...nextConfig,
//     webpack: (config, options) => {
//         // Handle PDF files
//         config.module.rules.push({
//             test: /\.pdf$/i,
//             type: 'asset/source'
//         });
//
//         // Handle SVG files with @svgr/webpack
//         config.module.rules.push({
//             test: /\.svg$/,
//             issuer: {
//                 and: [/\.(js|ts)x?$/]
//             },
//             use: ['@svgr/webpack'],
//         });
//
//         // Handle .node files
//         config.module.rules.push({
//             test: /\.node$/,
//             use: 'node-loader',
//             exclude: /node_modules/,
//         });
//
//         return config;
//     },
// };