# Purgecss for Wordpress & Woocommerce

## Getting Started

Install `purgecss-with-woocommerce`:
```sh
yarn add purgecss-with-woocommerce --dev
```

## Usage

#### With Import
```js
import Purgecss from 'purgecss'
import purgecssWoocommerce from 'purgecss-with-woocommerce'

new Purgecss({
    whitelist: [
        ...purgecssWoocommerce.whitelist,
        // your whitelist ...
    ],
    whitelistPatterns: [
        ...purgecssWoocommerce.whitelistPatterns,
        // your whitelistPatterns ...
    ]
});
```

#### With require
```js
const Purgecss = require('purgecss');
const purgecssWoocommerce = require('purgecss-with-woocommerce');

new Purgecss({
    whitelist: [
        ...purgecssWoocommerce.whitelist,
        // your whitelist ...
    ],
    whitelistPatterns: [
        ...purgecssWoocommerce.whitelistPatterns,
        // your whitelistPatterns ...
    ]
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.