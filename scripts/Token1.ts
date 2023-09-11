import { ethers } from "hardhat";
// thi is gotten from erc20
async function main() {
  //@ts-ignore
  const [admin] = await ethers.getSigners();
  

  //@ts-ignore 

  const token = await ethers.deployContract("Token1", [admin.address]);

  await token.waitForDeployment();

  console.log("This is deployed to", token.target);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});