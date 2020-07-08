# Publish Signed Transactions

These examples are for publishing a batch of signed transactions. The transactions can be for delegation or voting.

## Running the Examples

First navigate to the directory of the example on the command line once you've cloned this repository.

**Web3 Example**

```
npm install

node batch-publish.js
```

**Solidity Example**

```
npm install

solc --bin --abi -o ./build BatchDelegate.sol --overwrite

node deploy.js

## paste the contract address into the batch-publish.js script

node batch-publish.js
```
