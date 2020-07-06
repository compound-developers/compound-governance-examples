# Compound Governance Signature Methods

Users can delegate their voting rights or cast a vote on a proposal using [EIP712](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md) typed structured data signatures.

## Delegate By Signature

Users can [delegate their voting rights](https://compound.finance/docs/governance#delegate-by-signature) ([source code](https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/Comp.sol#L161)) using a signed transaction. This allows users to sign a transaction locally (no gas fee) with their private key, and anyone can post it to the blockchain later.

A user that desires to collect voting rights from other users can do so by implementing this delegate by signature example on their own website. The page can be configured to sign `delegate` transactions for a single address. The signature and its metadata can then be submitted to a secure web server, where later on, the user can post the delegate transaction to the blockchain using their own gas.

The "delegate to me" web page can be shared with a URL param to automatically set the *delegatee* address in the UI.

`?delegatee=0x123abC...`

## Cast Vote By Signature

Users can [vote on a governance proposal](https://compound.finance/docs/governance#cast-vote-by-signature) ([source code](https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/GovernorAlpha.sol#L252)) using a signed transaction. This allows users to sign a transaction locally (no gas fee) with their private key, and anyone can post it to the blockchain later.

For a single proposal, the user will need to sign a "for" and an "against" vote in order to give a 3rd party full control of their vote on that proposal. Once the proposal vote signatures are created, they can be sent to another user. That other user can vote ("for" or "against") on behalf of the signatory for the single proposal.

## Running These Examples Locally

Run the HTTP server using the same instructions in the parent directory readme. Run [ganache-cli](https://www.npmjs.com/package/ganache-cli) on the command line using a fork of main net (more on doing that [here](https://github.com/compound-developers/compound-supply-examples#running-a-local-ethereum-test-net-with-ganache-cli)). Import a private key (that has test ETH) to MetaMask. Set the MetaMask network to `Localhost 8545` and the account accordingly. Navigate to the example HTML page from this repository. Try signing and then posting transactions for vote or delegate.
