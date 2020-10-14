const EIP712 = require('../EIP712.js');
const Web3 = require('web3');
const infura = process.env.infuraApiKey;
// const web3 = new Web3(`https://mainnet.infura.io/v3/${infura}`);
const web3 = new Web3('http://localhost:8545');

// These keys are for testing only
const pks = [
  "0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329",
  "0x5c2313d8a6b81a83ad1df1bf12a193cbc51d5de84a000db734fd7a05aa63e5a2",
  "0x2deeef19c7418df1c35425d5b637133305ec425f063a0ea6bc1702559b1e3123",
  "0xf0a43592054c17fd756f160567a116b93ab3f16a92f7667eb49a4522e3e26cdc",
  "0x100f17bef675e9532e2bf1ed01b3f0ffa4a64a55a3a109b2a254a69a5603ac0b",
  "0x191cdb377fd0298d3bff842f50fa3454876cb3473beed299541744c65c9f37bd",
  "0xc5fd727f2808dfc3b8fdfa5eec64f6212573823770f19a3bf39f197cc4b6a6f8",
  "0xa05315d1e2eccf42b3e7dd5b47a4a1cf3cc5674d7933a32d617061d46734c7b2",
  "0x9a4114d070ef076f23b7a42fb4957053bbada99d90036a2bec1fbaff5f0f9d9e",
  "0x4d528e815fe2170a60b9303e9666e8640fe2a6a1ad84bef2596484083d073715",
];

const compAddress = '0xc00e94Cb662C3520282E6f5717214004A7f26888';
const compAbi = [{"inputs":[{"internalType":"address","name":"account","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event","signature":"0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event","signature":"0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"constant":true,"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe7a324dc"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x20606b70"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf1127ed8"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x313ce567"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x5c19a95c"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc3cda520"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x587cde1e"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb4b5ea57"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x782d6fe1"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7ecebe00"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6fcfff45"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"}];
const comp = new web3.eth.Contract(compAbi, compAddress);

const forEachWithCallback = function (callback, final) {
  const arrayCopy = JSON.parse(JSON.stringify(this));
  let index = -1;
  const next = () => {
    index++;
    if (arrayCopy.length > 0) {
      callback(arrayCopy.shift(), index, next);
    } else {
      if (final) final();
    }
  }
  next();
}

Array.prototype.forEachWithCallback = forEachWithCallback;

const main = async function() {
  const signatures = [];

  pks.forEachWithCallback(async (pk, i, next) => {
    web3.eth.accounts.wallet.add(pk);
    const me = web3.eth.accounts.wallet[0].address;

    const name = 'Compound';
    const chainId = web3.currentProvider.networkVersion;
    const domain = { name, chainId, verifyingContract: compAddress };
    const types = {
      Delegation: [
        { name: 'delegatee', type: 'address' },
        { name: 'nonce', type: 'uint256' },
        { name: 'expiry', type: 'uint256' }
      ]
    };
    const delegatee = me;
    const nonce = 0;
    const expiry = 10e9; // expiration of signature, in seconds since unix epoch
    const message = { delegatee, nonce, expiry };
    const { v, r, s } = await EIP712.sign(domain, 'Delegation', message, types, pk);
    signatures.push({ delegatee, nonce, expiry, v, r, s });
    next();
  }, async () => {
    const myWalletAddress = web3.eth.accounts.wallet[0].address;
    const batchDelegateAddress = ''; // be sure to fill this in with your contract address
    const batchDelegateAbi = [{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct BatchDelegate.Sig[]","name":"sigs","type":"tuple[]"}],"name":"delegateBySigs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    const batchDelegate = new web3.eth.Contract(batchDelegateAbi, batchDelegateAddress);

    const tx = await batchDelegate.methods.delegateBySigs(signatures).send({
      from: myWalletAddress,
      gasLimit: web3.utils.toHex(6000000),      // posted at compound.finance/developers#gas-costs
      gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
    });

    console.log('tx', tx);

    const myBalance = await web3.eth.getBalance(myWalletAddress);
    console.log('myBalance', myBalance);
  });
}

main().catch((err) => {
  console.error(err);
});
