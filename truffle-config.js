require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name recipe situate universe grace lonely equal gate'; 
let testAccounts = [
"0x3e02aabe82efa413a6d7bcf89efd5743f206d21bab3eff7641b76ea1de5ebe66",
"0x43837003086d31a825676358fda73b228405f52e2d46f9c5011ec4a8ccbf1ca5",
"0x8a2c7bf0a86adf38123ef59723a75bd01b7f0cb1738adf64779f820543a2f04b",
"0x7711275a588d74188ae81783b2ad730739969668ab7d3f308880c655fb17ebdd",
"0xc83cc689ab1a3ca5783c56c20380387c214021e7ccb96fd83477d21a5f9eefb9",
"0x040fca9c4bc545952193cac36e9fe75d60b2406e81e4341b11ca7d8fe455951d",
"0xd65359e45b0f2b109889dbb97ae1f1461c7c383d69b28eb2f583137154bad7a5",
"0x82d55d3183e43bf4fa624941a827a67b419a3a3e61f48da12d7cafe672167245",
"0xa6b79777b16138b2aadf0e38010c34ceeea21a9cf0e93415597a4af67ba56cdb",
"0x8028561a5e89fcfd2717f0adc4fe63768244b85157d34a4e3bc33b8b7a54f7d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
