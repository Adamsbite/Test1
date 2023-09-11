import { ethers } from "hardhat";
// thi is gotten from erc20
async function main() {


    // This is a script that interact with the contracts.
    // 0x68a61E14CE10d6d0AF566Cf85C0a79afC08Af80d   token 1
    // 0xc308b2d419EF4C34350a606233Fe40A1792dfcAC   Token 2

    const hre = require("hardhat");

    async function main() {
      const TOKEN1_ADDRESS = "0x68a61E14CE10d6d0AF566Cf85C0a79afC08Af80d"
      const TOKEN2_ADDRESS = "0xc308b2d419EF4C34350a606233Fe40A1792dfcAC"
    
      const provider = hre.ethers.provider;
    
      // Let's assume you have the ABI of your Token in the 'Token.json' file
      const TOKEN_ABI = require('./Token.json').abi;
    
      // Connect to the deployed Tokens
      let token1 = new ethers.Contract(TOKEN1_ADDRESS, TOKEN_ABI, provider);
    
      // Fund tokens (to someone)
      await token1.transfer(someoneAddress, ethers.utils.parseEther("1000"));
    
      // Perform a swap operation (this depends on how your contract is written and 
      // might need another contract carrying out the swap - a simple swap is demonstrated here)
      let token2 = new ethers.Contract(TOKEN2_ADDRESS, TOKEN_ABI, provider);
      let token2balanceBefore = await token2.balanceOf(someoneAddress);
      console.log("Token1 balance before swap: " + ethers.utils.formatEther(token2balanceBefore));
    
      // (Assuming both tokens have the same decimal places)
      await token1.approve(someoneAddress, ethers.utils.parseEther("1000"));
      await token2.transferFrom(someoneAddress, anotherAddress, ethers.utils.parseEther("1000"));
    
      let token2balanceAfter = await token2.balanceOf(someoneAddress);
      console.log("Token2 balance after swap: " + ethers.utils.formatEther(token2balanceAfter));
    }
    
    main()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
    



}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});