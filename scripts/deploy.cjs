const hre = require('hardhat');
const fs = require('fs');

async function main() {
  const taxFee = 5;
  const Contract = await hre.ethers.getContractFactory('Muhendislik');
  const contract = await Contract.deploy(taxFee);

  await contract.deployed();

  // Log the contract address before writing to the file
  const contractAddress = await contract.address;
  console.log('Deployed contract address before writing to file:', contractAddress);

  const address = JSON.stringify({ address: contractAddress }, null, 4);
  fs.writeFile('./artifacts/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deployed contract address:', contractAddress);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
