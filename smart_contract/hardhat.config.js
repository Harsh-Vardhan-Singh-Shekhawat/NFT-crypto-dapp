require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url:process.env.HTTP_URL_QUICKNODE,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
