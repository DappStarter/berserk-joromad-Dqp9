require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note predict unusual hunt help flip gasp'; 
let testAccounts = [
"0xddf1e7f4590b473d702200913a9b1b1857e501b76332976693a292862fd3b4eb",
"0xa82f596048e468cd13f170abfb6432efe104527127f44605e45158440ac3ee66",
"0x781e5752e9ecc948ba8bf7a74c014bb7847eeabb224616290319b42d5e8fc383",
"0x4f3b9a8ef11633e80591614e2a476ac866f27177e3dbd3033093b7b3f89ab355",
"0xb86bf014b7c6e5be4277991da77e1deb318ec0ef592bfd9aa29a55ff5121e88c",
"0xe5b6215e12395893eeead95499614a3794a2f5f67abc8ee3eb02b4a34dd1a11a",
"0x25ac93cf2315ea8292601f8c8fd1428c91e2f97218e1cbe8ac27cbea616c7f86",
"0x00e8f15e65b7be235b5f9d39ac2d7dc79bb96257194623a3998e462a6fa1030e",
"0xb32eddcbb2334dfc4c4d166ad679384c329145e7e9635bbef7af850d8e21fa16",
"0x2bb3f53d95cfd2c5907a6d163ac3c1179a76506924bf01bc20f9edd54cb4e722"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


