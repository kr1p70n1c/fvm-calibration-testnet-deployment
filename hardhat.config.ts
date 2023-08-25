import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "hardhat-deploy";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    namedAccounts: {
        deployer: 0,
    },
    networks: {
        calibrationnet: {
            chainId: 314159,
            url: "https://api.calibration.node.glif.io/rpc/v1",
            accounts: [PRIVATE_KEY!],
        },
        filecoinmainnet: {
            chainId: 314,
            url: "https://api.node.glif.io",
            accounts: [PRIVATE_KEY!],
        },
    },
};

export default config;
