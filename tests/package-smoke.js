const assert = require('assert');

const cip4 = require('..');
const {legacyWalletChecksum, walletChecksum} = cip4.default || cip4;

assert.deepStrictEqual(
  legacyWalletChecksum(
    'c926351ca58e9a4575899968585f44a12d144df792d536f92aa07d37ffc7400baa3c34e291f9f1b4a3386445ab5430689034d5a2e30086197e5867f0a243a4b3'
  ),
  {
    ImagePart: '311dc4ba4fb8887b0153fa1768727ceab59c247f5e64a6d11dc6f246a90752e6376d417654ea188a4e5eaad32320cc8fa941463818e5fc78a6c96712152cd2f7',
    TextPart: 'EAJD-7036'
  }
);

assert.deepStrictEqual(
  walletChecksum(
    '84fd37565a1ba6482963478493de2057e40e740e69fc7d6abb0d0e30c5246626d186e94f31dc5d51e558aa732134689c11259668a1315afceeb0d5751eb2b0b8'
  ),
  {
    ImagePart: 'df97618477d2386b7269eb662dfee3fc1a8e3743cffdeb0308df8cefd317823e9be569abf0a4d45e77fa8c307200bf20e904d126523501afeb64e6331bb02538',
    TextPart: 'LDSA-4898'
  }
);
