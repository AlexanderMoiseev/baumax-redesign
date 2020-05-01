const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
        './styles/**/*.css',
    ],
    whitelist: [],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const cssnano = require('cssnano')({
    preset: 'default',
})

module.exports = {
    plugins: [
        purgecss,
        require('autoprefixer'),
        cssnano

        // ...process.env.NODE_ENV === 'production'
        // ? [cssnano]
        // : []
    ]
}
