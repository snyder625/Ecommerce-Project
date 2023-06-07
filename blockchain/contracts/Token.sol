// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Token {
    IERC20 public tokenContract;
    mapping(address => uint256) public orderCount;

    event TokenReward(address indexed user, uint256 amount);

    constructor(address _tokenContract) {
        tokenContract = IERC20(_tokenContract);
    }

    function placeOrder() external {
        orderCount[msg.sender]++;

        if (orderCount[msg.sender] == 3) {
            uint256 rewardAmount = 100; // Set the reward amount as per your requirements
            tokenContract.transfer(msg.sender, rewardAmount);
            emit TokenReward(msg.sender, rewardAmount);
            orderCount[msg.sender] = 0; // Reset the order count after issuing the reward
        }
    }
}
