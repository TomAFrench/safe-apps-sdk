/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CreateCall } from "../CreateCall";

export class CreateCall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CreateCall> {
    return super.deploy(overrides || {}) as Promise<CreateCall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CreateCall {
    return super.attach(address) as CreateCall;
  }
  connect(signer: Signer): CreateCall__factory {
    return super.connect(signer) as CreateCall__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateCall {
    return new Contract(address, _abi, signerOrProvider) as CreateCall;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    name: "ContractCreation",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "deploymentData",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "performCreate2",
    outputs: [
      {
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "deploymentData",
        type: "bytes",
      },
    ],
    name: "performCreate",
    outputs: [
      {
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634847be6f1461003b5780634c8c9ea11461014a575b600080fd5b6101086004803603606081101561005157600080fd5b81019080803590602001909291908035906020019064010000000081111561007857600080fd5b82018360208201111561008a57600080fd5b803590602001918460018302840111640100000000831117156100ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061024f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61020d6004803603604081101561016057600080fd5b81019080803590602001909291908035906020019064010000000081111561018757600080fd5b82018360208201111561019957600080fd5b803590602001918460018302840111640100000000831117156101bb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610369565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008183518460200186f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f436f756c64206e6f74206465706c6f7920636f6e74726163740000000000000081525060200191505060405180910390fd5b7f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51181604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a19392505050565b600081516020830184f09050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610418576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f436f756c64206e6f74206465706c6f7920636f6e74726163740000000000000081525060200191505060405180910390fd5b7f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51181604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a19291505056fea265627a7a72315820f42bfbed7129fa10b1d0c2bce3b7829f16ca32dc4ba3a43ee39c677e3399c90f64736f6c63430005100032";
