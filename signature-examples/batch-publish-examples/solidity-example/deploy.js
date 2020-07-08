// solc --bin --abi -o ./build BatchDelegate.sol --overwrite
const fs = require('fs');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
const bytecode = fs.readFileSync('./build/BatchDelegate.bin');
const abi = JSON.parse(fs.readFileSync('./build/BatchDelegate.abi'));

(async function () {
  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];

  const myContract = new web3.eth.Contract(abi);

  myContract.deploy({
    data: bytecode
  }).send({
    from: myWalletAddress,
    gas: 5000000
  }).then((deployment) => {
    console.log('BatchDelegate was successfully deployed!');
    console.log('BatchDelegate can be interfaced with at this address:');
    console.log(deployment.options.address);
  }).catch((err) => {
    console.error(err);
  });
})();
