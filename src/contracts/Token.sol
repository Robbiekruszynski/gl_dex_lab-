pragma solidity ^0.5.0;

contract Token {
    string public name = "Yog";
    string public symbol = "YOG";
    uint256 public decimals = 18;
    uint256 public totalSupply;

// State vars listed above 



// Track balanes (stores information)
mapping (address => uint256) public balanceOf;
// Send tokens (behave func) 


    constructor() public {
        totalSupply = 1000000 * (10**decimals);
        balanceOf[msg.sender] = totalSupply;
    }
}
