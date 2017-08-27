module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    // include: [
                    //     path.resolve(__dirname, "not_exist_path")
                    // ],
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                        // options: {
                        //     includePaths: ["source/pages/index"]
                        // }
                    ]
                }
            ]
        }
    };
};
