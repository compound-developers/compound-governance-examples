pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

interface Comp {
  function delegateBySig(
    address delegatee,
    uint nonce,
    uint expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external;
}

contract BatchDelegate {
  struct Sig {
    address delegatee;
    uint nonce;
    uint expiry;
    uint8 v;
    bytes32 r;
    bytes32 s;
  }

  function delegateBySigs(Sig[] memory sigs) public {
    Comp comp = Comp(0xc00e94Cb662C3520282E6f5717214004A7f26888);

    for (uint i = 0; i < sigs.length; i++) {
      Sig memory sig = sigs[i];
      comp.delegateBySig(sig.delegatee, sig.nonce, sig.expiry, sig.v, sig.r, sig.s);
    }
  }
}
