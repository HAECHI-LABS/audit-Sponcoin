import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction, Deployment } from 'hardhat-deploy/types'
import { DeployResult } from 'hardhat-deploy/dist/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const deployResult: DeployResult = await deploy('Sponcoin', {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  })
}
export default func
func.tags = ['Sponcoin']
