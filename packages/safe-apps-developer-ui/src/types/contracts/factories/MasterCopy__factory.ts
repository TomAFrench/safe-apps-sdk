/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MasterCopy } from "../MasterCopy";

export class MasterCopy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterCopy> {
    return super.deploy(overrides || {}) as Promise<MasterCopy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MasterCopy {
    return super.attach(address) as MasterCopy;
  }
  connect(signer: Signer): MasterCopy__factory {
    return super.connect(signer) as MasterCopy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterCopy {
    return new Contract(address, _abi, signerOrProvider) as MasterCopy;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "masterCopy",
        type: "address",
      },
    ],
    name: "ChangedMasterCopy",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_masterCopy",
        type: "address",
      },
    ],
    name: "changeMasterCopy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102a9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637de7edef14610030575b600080fd5b6100726004803603602081101561004657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610074565b005b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610249602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561017e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806102256024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15056fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465644d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d207468697320636f6e7472616374a265627a7a7231582081d3ad2147103e88fe3cc60f7a367bfc65246fc433dd6485db1f91bbc121129f64736f6c63430005100032";
