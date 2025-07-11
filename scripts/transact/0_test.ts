import { Deployer, DeployFunction, Deployments, genLoadDeployments, Network } from '@alephium/cli'
import { Settings } from '../../alephium.config'
import { addressVal, ALPH_TOKEN_ID, binToHex, boolVal, byteVecVal, DUST_AMOUNT, encodePrimitiveValues, MINIMAL_CONTRACT_DEPOSIT, NodeProvider, NULL_CONTRACT_ADDRESS, ONE_ALPH, stringToHex, u256Val, web3 } from '@alephium/web3'
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { TestGetMethods } from '../../artifacts/ts';

const dotenv = require('dotenv');
dotenv.config()

const nodeProvider = new NodeProvider('https://node.mainnet.alephium.org')
const signer = new PrivateKeyWallet({ privateKey: String(process.env.key), nodeProvider })

// External contract address that we know exists and has the getIdentifier method
const AYINALPH = "25ywM8iGxKpZWuGA5z6DXKGcZCXtPBmnbQyJEsjvjjWTy"
let get = TestGetMethods.at("2356NBNZ78H5MRV7Jn5xrbBiVsozAkvsufAidLjDQrYgw")

const Run: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {

    // Test calling the external contract through our contract
    // Use method index 8 for getReserves (pre-Rhone contract)
    const result = await get.transact.destroy({
        signer: signer,
        attoAlphAmount: DUST_AMOUNT,
    })

    /*
    const result = await swap.transact.destroy({
        signer: signer,
        attoAlphAmount: DUST_AMOUNT,
    })
    */
}

export default Run