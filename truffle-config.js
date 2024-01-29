
const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys= require("./keys.json")

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  contracts_build_directory: "./public/contracts",

  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC
          },
          providerOrUrl: `wss://sepolia.infura.io/ws/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: "11155111",
      gasPrice: 100000000000,
      networkCheckoutTimeout: 10000,
      timeoutBlocks: 200
    }// 100000000000
    
  },

  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin (default: truffle's version)
      
    }
  },

};
// NEXT_PUBLIC_TARGET_CHAIN_ID=1337
// NEXT_PUBLIC_NETWORK_ID=5777