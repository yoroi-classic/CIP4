# CIP4 - Wallet Checksums

This is a reference implementation for [CIP4](https://github.com/cardano-foundation/CIPs/blob/master/CIP4/CIP4.md) written in Typescript (with Flow types included).

## Install

``` sh
npm i github:yoroi-classic/CIP4#master --save
```

For reproducible application builds, pin the dependency to a release tag or commit:

```json
{
  "dependencies": {
    "@yoroi-classic/cip4-js": "github:yoroi-classic/CIP4#<tag-or-commit>"
  }
}
```

## Usage

The package currently emits CommonJS. TypeScript or transpiled ES modules can
use named imports:

```ts
import {legacyWalletChecksum, walletChecksum} from '@yoroi-classic/cip4-js';

const shelleyChecksum = walletChecksum(
  '84fd37565a1ba6482963478493de2057e40e740e69fc7d6abb0d0e30c5246626d186e94f31dc5d51e558aa732134689c11259668a1315afceeb0d5751eb2b0b8'
);

const byronChecksum = legacyWalletChecksum(
  'c926351ca58e9a4575899968585f44a12d144df792d536f92aa07d37ffc7400baa3c34e291f9f1b4a3386445ab5430689034d5a2e30086197e5867f0a243a4b3'
);
```

CommonJS:

```js
const cip4 = require('@yoroi-classic/cip4-js');
const {legacyWalletChecksum, walletChecksum} = cip4.default || cip4;

const shelleyChecksum = walletChecksum(
  '84fd37565a1ba6482963478493de2057e40e740e69fc7d6abb0d0e30c5246626d186e94f31dc5d51e558aa732134689c11259668a1315afceeb0d5751eb2b0b8'
);

const byronChecksum = legacyWalletChecksum(
  'c926351ca58e9a4575899968585f44a12d144df792d536f92aa07d37ffc7400baa3c34e291f9f1b4a3386445ab5430689034d5a2e30086197e5867f0a243a4b3'
);
```

Native ES modules can use the same interop fallback with Node's CommonJS bridge:

```js
import cip4 from '@yoroi-classic/cip4-js';

const {legacyWalletChecksum, walletChecksum} = cip4.default || cip4;
```
