const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  let args = [];
  const basicNft = await deploy("BasicNft", {
    args: args,
    from: deployer,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying------");
    await verify(basicNft.address);
  }
  log("------------------------------------------");
};
module.exports.tags = ["all", "basic"];
