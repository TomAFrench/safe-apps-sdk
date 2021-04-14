/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { GnosisSafeProxyFactory } from "../GnosisSafeProxyFactory";

export class GnosisSafeProxyFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GnosisSafeProxyFactory> {
    return super.deploy(overrides || {}) as Promise<GnosisSafeProxyFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GnosisSafeProxyFactory {
    return super.attach(address) as GnosisSafeProxyFactory;
  }
  connect(signer: Signer): GnosisSafeProxyFactory__factory {
    return super.connect(signer) as GnosisSafeProxyFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisSafeProxyFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GnosisSafeProxyFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "ProxyCreation",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "masterCopy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createProxy",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyRuntimeCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_mastercopy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "createProxyWithNonce",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
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
        internalType: "address",
        name: "_mastercopy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
      {
        internalType: "contract IProxyCreationCallback",
        name: "callback",
        type: "address",
      },
    ],
    name: "createProxyWithCallback",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
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
        internalType: "address",
        name: "_mastercopy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "saltNonce",
        type: "uint256",
      },
    ],
    name: "calculateCreateProxyWithNonceAddress",
    outputs: [
      {
        internalType: "contract GnosisSafeProxy",
        name: "proxy",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f73806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631688f0b9146100675780632500510e1461018c57806353e5d9351461026f57806361b69abd146102f2578063addacc0f1461040d578063d18af54d14610490575b600080fd5b61014a6004803603606081101561007d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100ba57600080fd5b8201836020820111156100cc57600080fd5b803590602001918460018302840111640100000000831117156100ee57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506105d5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61022d600480360360608110156101a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101df57600080fd5b8201836020820111156101f157600080fd5b8035906020019184600183028401116401000000008311171561021357600080fd5b909192939192939080359060200190929190505050610674565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102776107b7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b757808201518184015260208101905061029c565b50505050905090810190601f1680156102e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103cb6004803603604081101561030857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561034557600080fd5b82018360208201111561035757600080fd5b8035906020019184600183028401116401000000008311171561037957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506107e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104156108d5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045557808201518184015260208101905061043a565b50505050905090810190601f1680156104825780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610593600480360360808110156104a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156104e357600080fd5b8201836020820111156104f557600080fd5b8035906020019184600183028401116401000000008311171561051757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610900565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006105e2848484610af1565b905060008351111561060a5760008060008551602087016000865af1141561060957600080fd5b5b7fa38789425dbeee0239e16ff2d2567e31720127fbc6430758c1a4efc6aef29f8081604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a19392505050565b60006106c58585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505084610af1565b905080604051602001808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561077c578082015181840152602081019050610761565b50505050905090810190601f1680156107a95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6060604051806020016107c990610c94565b6020820181038252601f19601f82011660405250905090565b6000826040516107f190610c94565b808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604051809103906000f080158015610843573d6000803e3d6000fd5b50905060008251111561086c5760008060008451602086016000865af1141561086b57600080fd5b5b7fa38789425dbeee0239e16ff2d2567e31720127fbc6430758c1a4efc6aef29f8081604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a192915050565b6060604051806020016108e790610ca1565b6020820181038252601f19601f82011660405250905090565b6000808383604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060001c90506109718686836105d5565b9150600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610ae8578273ffffffffffffffffffffffffffffffffffffffff16631e52b518838888886040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610a80578082015181840152602081019050610a65565b50505050905090810190601f168015610aad5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610acf57600080fd5b505af1158015610ae3573d6000803e3d6000fd5b505050505b50949350505050565b6000808380519060200120836040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050606060405180602001610b3e90610c94565b6020820181038252601f19601f820116604052508673ffffffffffffffffffffffffffffffffffffffff166040516020018083805190602001908083835b60208310610b9f5780518252602082019150602081019050602083039250610b7c565b6001836020036101000a038019825116818451168082178552505050505050905001828152602001925050506040516020818303038152906040529050818151826020016000f59250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c8b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f437265617465322063616c6c206661696c65640000000000000000000000000081525060200191505060405180910390fd5b50509392505050565b6101e780610cae83390190565b60aa80610e958339019056fe608060405234801561001057600080fd5b506040516101e73803806101e78339818101604052602081101561003357600080fd5b8101908080519060200190929190505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806101c36024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060aa806101196000396000f3fe608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea265627a7a723158204d4f64cbcb2e0a5c9384447044fbfa36df4d1041e3dd0544dbad6a51a668b02c64736f6c63430005100032496e76616c6964206d617374657220636f707920616464726573732070726f7669646564608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea265627a7a723158204d4f64cbcb2e0a5c9384447044fbfa36df4d1041e3dd0544dbad6a51a668b02c64736f6c63430005100032a265627a7a72315820d6ef0aebefda71d4bbefe345da1d342beac007a58c5f611beffc4c5aee2af69864736f6c63430005100032";
