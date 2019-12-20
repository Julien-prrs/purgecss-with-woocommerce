module.exports = {
    whitelist: [
        '.woocommerce',
        '#add_payment_method'
    ],
    whitelistPatterns: [
        /^.woocommerce-(.*)?$/,
        /^.wc-(.*)?$/
        // '.woocommerce-*',
        // '.wc-*'
    ]
}