module.exports = {
    whitelist: [
        'woocommerce',
        'add_payment_method',
        'related',
        'button',
        'variable_product_options'
    ],
    whitelistPatterns: [
        /^woocommerce-/,
        /^wc-/,
        /^wc_ /,
        /^product-/,
        /^columns-/,
    ]
}