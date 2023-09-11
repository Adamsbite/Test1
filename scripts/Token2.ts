import { ethers, network } from "hardhat";
// thi is gotten from erc20
async function main() {
  //@ts-ignore
  const [address] = await ethers.getSigners();

  //@ts-ignore
  const token2 = await ethers.deployContract("Token2", [address.address]);

  await token2.waitForDeployment();
  //   0xebe326aCb888EE82e19Cb2Bf14E7573Fb732C263
  console.log("This is deployed", token2.target);
}

// 0xebe326acb888ee82e19cb2bf14e7573fb732c263;
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
