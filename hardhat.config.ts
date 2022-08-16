import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";


const ALCHEMY_URL = process.env.REACT_APP_ALCHEMY_PROJECT_ID  as string;
const OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY as string;
// const BUYER_PRIVATE_KEY = process.env.BUYER_PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    mumbai: {
      url: ALCHEMY_URL,
      accounts: [OWNER_PRIVATE_KEY],
    },
    // harmonyTestnet: {
    //   url: "",
    //   accounts: [OWNER_PRIVATE_KEY],
    // },
    // rinkeby: {
    //   url: "",
    //   accounts: [OWNER_PRIVATE_KEY],
    // },
    // bscTestnet: {
    //   url: ""
    //   accounts: [OWNER_PRIVATE_KEY],
    // },
  },
  etherscan: {
    
    apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  }
};

export default config;
