module.exports = {
    plugins: ['prettier-plugin-solidity'],
    overrides: [
        {
            files: ['*.sol'],
            options: {
                tabWidth: 4,
                printWidth: 80,
                bracketSpacing: true,
                compiler: '0.8.19',
            },
        },
        {
            files: ['*.js', '*.ts'],
            options: {
                tabWidth: 4,
                printWidth: 80,
                bracketSpacing: true,
                singleQuote: true,
            },
        },
    ],
};
