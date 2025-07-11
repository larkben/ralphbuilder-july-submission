import { Deployer, DeployFunction, Deployments, genLoadDeployments, Network } from '@alephium/cli'
import { Settings } from '../../alephium.config'
import { addressVal, ALPH_TOKEN_ID, binToHex, boolVal, byteVecVal, DUST_AMOUNT, encodePrimitiveValues, MINIMAL_CONTRACT_DEPOSIT, NodeProvider, NULL_CONTRACT_ADDRESS, ONE_ALPH, stringToHex, u256Val, web3, codec } from '@alephium/web3'
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { TestGetMethods } from '../../artifacts/ts';

const dotenv = require('dotenv');
dotenv.config()

const nodeProvider = new NodeProvider('https://node.mainnet.alephium.org')                  // Testnet
const signer = new PrivateKeyWallet({ privateKey: String(process.env.key), nodeProvider })

const test = TestGetMethods.at("24ak7Yegt1bCqzvCndpkay6G8a1mnYChoTKm7VphELu1h")

const Run: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {

    // Call the public method that returns a value
    // Replace with a valid mainnet contract address
    const contractAddress = "25ywM8iGxKpZWuGA5z6DXKGcZCXtPBmnbQyJEsjvjjWTy"
    
    try {

        // method 7 -> tokenPairs
        // method 8 -> getReserves

        const result = await nodeProvider.contracts.postContractsCallContract({
            address: contractAddress,
            group: 0,
            methodIndex: 8,
            args: []
        })
        
        console.log('Public method result:', result)
        
    } catch (error) {
        console.log('Error calling public method:', error)
    }
}

export default Run