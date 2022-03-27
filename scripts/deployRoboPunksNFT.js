
const hre = require("hardhat");

async function main() {
  
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const robotPunksNFT = await RoboPunksNFT.deploy();

  await robotPunksNFT.deployed();

  console.log("RoboPunksNFT deployed to:", robotPunksNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
