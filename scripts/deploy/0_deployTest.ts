import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../../alephium.config'
import { DUST_AMOUNT, MINIMAL_CONTRACT_DEPOSIT, NodeProvider, NULL_CONTRACT_ADDRESS, ONE_ALPH } from '@alephium/web3'
import { TestGetMethods } from '../../artifacts/ts';
import { PrivateKeyWallet } from "@alephium/web3-wallet";

const dotenv = require('dotenv');
dotenv.config()

const nodeProvider = new NodeProvider('https://node.mainnet.alephium.org')                  // Mainnet
const signer = new PrivateKeyWallet({ privateKey: String(process.env.key), nodeProvider })

const TestTemplate: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {

  //! rework to be txScript for governance
  const result = await deployer.deployContract(TestGetMethods, {
    initialFields: {
      reserveOne: 0n,
      reserveTwo: 0n,
      tokenOne: '',
      tokenTwo: ''
    },
  })

  const contractId = result.contractInstance.contractId
  const contractAddress = result.contractInstance.address
  console.log(`TestGetMethods: ${contractAddress}, contract id: ${contractId}`)
}

export default TestTemplate