// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.10 and less than 0.9.0
pragma solidity ^0.8.0;

contract Counter {
    address public owner;
    int public count;

    constructor(int _number) {
        owner = msg.sender;
        count = _number;
    }

    function increese() public {
        count++;
    }
    function degreese() public {
        count--;
    }
    function value() public view returns(int){
        return count;
    }
}