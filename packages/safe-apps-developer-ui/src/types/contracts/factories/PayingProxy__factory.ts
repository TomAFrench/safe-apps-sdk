/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PayingProxy } from "../PayingProxy";

export class PayingProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _masterCopy: string,
    initializer: BytesLike,
    funder: string,
    paymentToken: string,
    payment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PayingProxy> {
    return super.deploy(
      _masterCopy,
      initializer,
      funder,
      paymentToken,
      payment,
      overrides || {}
    ) as Promise<PayingProxy>;
  }
  getDeployTransaction(
    _masterCopy: string,
    initializer: BytesLike,
    funder: string,
    paymentToken: string,
    payment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _masterCopy,
      initializer,
      funder,
      paymentToken,
      payment,
      overrides || {}
    );
  }
  attach(address: string): PayingProxy {
    return super.attach(address) as PayingProxy;
  }
  connect(signer: Signer): PayingProxy__factory {
    return super.connect(signer) as PayingProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayingProxy {
    return new Contract(address, _abi, signerOrProvider) as PayingProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_masterCopy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
      {
        internalType: "address payable",
        name: "funder",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105b73803806105b7833981810160405260a081101561003357600080fd5b81019080805190602001909291908051604051939291908464010000000082111561005d57600080fd5b8382019150602082018581111561007357600080fd5b825186600182028301116401000000008211171561009057600080fd5b8083526020830192505050908051906020019080838360005b838110156100c45780820151818401526020810190506100a9565b50505050905090810190601f1680156100f15780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919080519060200190929190505050848481600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156101a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806105936024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060008151111561022f5773ffffffffffffffffffffffffffffffffffffffff60005416600080835160208501846127105a03f46040513d6000823e600082141561022b573d81fd5b5050505b5050600081111561036657600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156102fe578273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050506102f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806105476026913960400191505060405180910390fd5b610365565b61030f82848361037060201b60201c565b610364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061056d6026913960400191505060405180910390fd5b5b5b505050505061048f565b600060608383604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000808251602084016000896127105a03f16040513d81016040523d6000823e3d60008114610472576020811461047a5760009450610484565b829450610484565b8151158315171594505b505050509392505050565b60aa8061049d6000396000f3fe608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea265627a7a72315820e549fe71c7a324d949d6a51eca2d81556da7edae250ee9893d5f760f2fb7bb6464736f6c63430005100032436f756c64206e6f74207061792073616665206372656174696f6e2077697468206574686572436f756c64206e6f74207061792073616665206372656174696f6e207769746820746f6b656e496e76616c6964206d617374657220636f707920616464726573732070726f7669646564";
