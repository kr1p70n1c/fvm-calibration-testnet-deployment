import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment | any) {
    console.log('hre:', hre);
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const nameAccounts = await getNamedAccounts();
    console.log('nameAccounts:', nameAccounts);
    const {deployer} = await getNamedAccounts();
    console.log('deployer:', deployer);


    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;

    const lockedAmount = ethers.parseEther("0.001");

    const lock = await deploy('Lock', {
        from: deployer,
        args: [unlockTime],
        value: lockedAmount,
        log: true,
    });

    console.log(
        `Lock with ${ethers.formatEther(
            lockedAmount
        )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
    );

};
export default func;
