module.exports = {
    plugins: ["prettier-plugin-solidity"],
    overrides: [
        {
            files: ["*.sol", "*.js", "*.ts"],
            options: {
                tabWidth: 4,
                printWidth: 80,
                bracketSpacing: true,
                compiler: "0.8.19",
            },
        },
    ],
};
