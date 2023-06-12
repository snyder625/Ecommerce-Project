



// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract RewardToken is ERC20 {
    // Address of the contract deployer
    address private owner;

    // Modifier to restrict certain functions to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    // Event emitted when tokens are rewarded
    event TokensRewarded(address indexed recipient, uint256 amount);

    // Constructor
    constructor() ERC20("TasteCoin", "TC") {
        owner = msg.sender;
    }

    // Function to reward tokens to a recipient
    function rewardTokens(address recipient, uint256 amount) external onlyOwner {
        _mint(recipient, amount);
        emit TokensRewarded(recipient, amount);
    }
}

