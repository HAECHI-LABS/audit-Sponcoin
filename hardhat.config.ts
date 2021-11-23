import { HardhatUserConfig } from 'hardhat/types';

import 'dotenv/config';
import 'hardhat-deploy';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';

const dotenv = require('dotenv');

export default {
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.0',
        settings: {
          evmVersion: 'constantinople',
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      gas: 10000000,
      accounts: {
        accountsBalance: '1000000000000000000000000',
      },
      allowUnlimitedContractSize: true,
      timeout: 1000000,
    },
    cypress: {
      url: 'http://localhost:8651/',
      chainId: 1001,
      live: true,
      saveDeployments: true,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      tags: ['staging'],
    }
  },
};
