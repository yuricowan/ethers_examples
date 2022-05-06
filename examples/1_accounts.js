const ethers = require('ethers')

// Save Infura private key to a variable
const privateInfuraID = `075194dbb99c4418829e980888979fe5`

// establish a connection to the blockchain using JsonRPC
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${privateInfuraID}`
)

// Now that we're connected we can utilise methods to get information from the ethereum blockchain

// save wallet address
let walletAddress = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

// Declare an async function, calling informaition from the blockchain, await for the information to arrive and then proceed to print out the balance
// Without the ethers.utils.formatEther, the account balance will return a balance in wei
let getAccountBalance = async () => {
  let accountBalance = await provider.getBalance(walletAddress)
  console.log(
    `The balance of wallet: ${walletAddress} has ${ethers.utils.formatEther(
      accountBalance
    )}ETH`
  )
}

getAccountBalance()
