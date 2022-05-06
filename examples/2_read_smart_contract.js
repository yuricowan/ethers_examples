const ethers = require('ethers')
const privateInfuraID = '075194dbb99c4418829e980888979fe5'
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${privateInfuraID}`
)

const address = `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`

// Here I'm storing functions in an array so I can call them later to retieve properties of the ERC token.
const ERC20_ABI = [
  `function name() view returns(string)`,
  `function symbol() view returns(string)`,
  `function totalSupply() view returns(uint256)`,
  `function balanceOf(address) view returns(uint)`,
]

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
  const contractName = await contract.name()
  const contractSymbol = await contract.symbol()
  const contractTotalSupply = await contract.totalSupply()
  const contractBalance = await contract.balanceOf(address)

  console.log(`
  Contract name: ${contractName}
  ${contractSymbol}
  ${ethers.utils.formatEther(contractTotalSupply)}
  ${ethers.utils.formatEther(contractBalance)}
  `)
}

main()

// https://www.youtube.com/watch?v=yk7nVp5HTCk&ab_channel=DappUniversity
// 36:36
