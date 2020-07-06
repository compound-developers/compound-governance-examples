# Quick Start: Compound Governance

Code examples for building your own interface for Compound Protocol Governance. The COMP & Governance smart contracts are live on the Ethereum Main and Ropsten test networks.

**[Full Quick Start Tutorial on the Compound Medium Blog](https://medium.com/compound-finance/building-a-governance-interface-474fc271588c)** 

## What is Compound?
Compound is an open-source, autonomous protocol built for developers, to unlock a universe of new financial applications. Interest and borrowing, for the open financial system. Learn more on the website:

<a href="https://compound.finance/?ref=github&user=ajb413&repo=compound-governance-examples">
    <img alt="Compound Finance" src="https://raw.githubusercontent.com/ajb413/compound-interest-alerts/master/compound-finance-logo.png" width=260 height=60/>
</a>

## What is Compound Protocol Governance?

The Compound protocol is upgraded and configured in a decentralized fashion. All changes (from supported assets, to system parameters) are decided by COMP token-holders using the voting system.

Community members can create proposals or vote on proposals to modify the protocol. This is made possible by the [Compound Governance smart contract](https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/GovernorAlpha.sol).

**In order to participate in governance, users do not need to hold any COMP token in their Ethereum wallet.** However, users need to have COMP **delegated** to their address. Delegation is a utility function in the [COMP ERC-20 token contract](https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/Comp.sol).

Learn more in the [Compound Protocol Governance Documentation](https://compound.finance/docs/governance?ref=github&user=ajb413&repo=compound-governance-examples).

## Examples

The following code examples can be used in a Web3-enabled website.

There are examples for querying the Ethereum blockchain directly as well as examples that use the [Compound REST API](https://compound.finance/docs/api?ref=github&user=ajb413&repo=compound-governance-examples). Operations that **get** can be done using either implementation. However **set** operations must be performed by writing to the blockchain with Web3, which requires ETH to be spent on gas fees.

For latest **contract addresses and ABIs**, see the [networks page](https://compound.finance/docs#networks) in the docs.

### Get All COMP Token Holders
- [Example Web Page (Compound API)](https://compound-developers.github.io/compound-governance-examples/api-examples/get_comp_holders)
- [Example Web Page (Web3 Only)](https://compound-developers.github.io/compound-governance-examples/web3-examples/get_comp_holders)
- [Code Example (Compound API)](https://github.com/compound-developers/compound-governance-examples/blob/master/api-examples/get_comp_holders.html)
- [Code Example (Web3 Only)](https://github.com/compound-developers/compound-governance-examples/blob/master/web3-examples/get_comp_holders.html)

### Get All Delegates
- [Example Web Page (Compound API)](https://compound-developers.github.io/compound-governance-examples/api-examples/get_delegates)
- [Example Web Page (Web3 Only)](https://compound-developers.github.io/compound-governance-examples/web3-examples/get_delegates)
- [Code Example (Compound API)](https://github.com/compound-developers/compound-governance-examples/blob/master/api-examples/get_delegates.html)
- [Code Example (Web3 Only)](https://github.com/compound-developers/compound-governance-examples/blob/master/web3-examples/get_delegates.html)

### Get All Proposals (All States)
- [Example Web Page (Compound API)](https://compound-developers.github.io/compound-governance-examples/api-examples/get_proposals)
- [Example Web Page (Web3 Only)](https://compound-developers.github.io/compound-governance-examples/web3-examples/get_proposals)
- [Code Example (Compound API)](https://github.com/compound-developers/compound-governance-examples/blob/master/api-examples/get_proposals.html)
- [Code Example (Web3 Only)](https://github.com/compound-developers/compound-governance-examples/blob/master/web3-examples/get_proposals.html)

### Get All Ballots for a Proposal
- [Example Web Page (Compound API)](https://compound-developers.github.io/compound-governance-examples/api-examples/get_ballots)
- [Example Web Page (Web3 Only)](https://compound-developers.github.io/compound-governance-examples/web3-examples/get_ballots)
- [Code Example (Compound API)](https://github.com/compound-developers/compound-governance-examples/blob/master/api-examples/get_ballots.html)
- [Code Example (Web3 Only)](https://github.com/compound-developers/compound-governance-examples/blob/master/web3-examples/get_ballots.html)

### Delegate Your Voting Rights
- [Example Web Page (Web3 Only)](https://compound-developers.github.io/compound-governance-examples/web3-examples/set_delegate)
- [Code Example (Web3 Only)](https://github.com/compound-developers/compound-governance-examples/blob/master/web3-examples/set_delegate.html)

### Cast Your Vote for an Active Proposal
- [Example Web Page (Web3 Only)](https://compound-developers.github.io/compound-governance-examples/web3-examples/cast_vote)
- [Code Example (Web3 Only)](https://github.com/compound-developers/compound-governance-examples/blob/master/web3-examples/cast_vote.html)

### Signature Examples
- [Delegate By Signature Web Page](https://compound-developers.github.io/compound-governance-examples/signature-examples/delegate_by_signature)
- [Delegate By Signature Code Example](https://github.com/compound-developers/compound-governance-examples/blob/master/signature-examples/delegate_by_signature.html)
- [Cast Vote By Signature Web Page](https://compound-developers.github.io/compound-governance-examples/signature-examples/vote_by_signature)
- [Cast Vote By Signature Code Example](https://github.com/compound-developers/compound-governance-examples/blob/master/signature-examples/vote_by_signature.html)
- **See the [README](https://github.com/compound-developers/compound-governance-examples/tree/master/signature-examples) for more context on signatures**

## Running

Clone this repository. Use a Web3 enabled browser (like [Brave](https://brave.com/), or install the [MetaMask](https://metamask.io/download.html) browser extension). **Serve the files from an HTTP server; The HTML files will not work if you open them directly in your browser.** The following command line commands includes an HTTP server, which is installed with [Node.js and npm](https://nodejs.org/).

```
git clone git@github.com:compound-developers/compound-governance-examples.git
cd compound-governance-examples/
npm install -g http-server
http-server -p 8080
```

Then go to [http://localhost:8080/api-examples/get_proposals](http://localhost:8080/api-examples/get_proposals) in your web browser.

## Compound Governance Resources
- [Governance Announcement](https://medium.com/compound-finance/compound-governance-5531f524cf68)
- [Governance Is Live Announcement](https://medium.com/compound-finance/compound-governance-decentralized-b18659f811e0)
- [Compound Protocol Governance Documentation](https://compound.finance/docs/governance?ref=github&user=ajb413&repo=compound-governance-examples).
- [Compound API Governance Service Documentation](https://compound.finance/docs/api#GovernanceService?ref=github&user=ajb413&repo=compound-governance-examples).
- [Compound Governance Explorer](https://compound.finance/governance?ref=github&user=ajb413&repo=compound-governance-examples)
