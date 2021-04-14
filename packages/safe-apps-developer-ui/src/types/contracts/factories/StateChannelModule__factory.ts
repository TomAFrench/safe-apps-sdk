/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { StateChannelModule } from "../StateChannelModule";

export class StateChannelModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StateChannelModule> {
    return super.deploy(overrides || {}) as Promise<StateChannelModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StateChannelModule {
    return super.attach(address) as StateChannelModule;
  }
  connect(signer: Signer): StateChannelModule__factory {
    return super.connect(signer) as StateChannelModule__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateChannelModule {
    return new Contract(address, _abi, signerOrProvider) as StateChannelModule;
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
    constant: true,
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
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
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isExecuted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "contract ModuleManager",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "setup",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "execTransaction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "getTransactionHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611111806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063ba0bba401161005b578063ba0bba40146102ae578063e52cb36a146102b8578063f6cc15d0146102fa578063ffa1ad741461048d57610088565b80632b5000411461008d578063481c6a751461019d5780637de7edef146101e7578063a3f4df7e1461022b575b600080fd5b610187600480360360a08110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100ea57600080fd5b8201836020820111156100fc57600080fd5b8035906020019184600183028401116401000000008311171561011e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803560ff16906020019092919080359060200190929190505050610510565b6040518082815260200191505060405180910390f35b6101a56106c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610229600480360360208110156101fd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106ec565b005b6102336108be565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610273578082015181840152602081019050610258565b50505050905090810190601f1680156102a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102b66108f7565b005b6102e4600480360360208110156102ce57600080fd5b8101908080359060200190929190505050610901565b6040518082815260200191505060405180910390f35b61048b600480360360c081101561031057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561035757600080fd5b82018360208201111561036957600080fd5b8035906020019184600183028401116401000000008311171561038b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803560ff169060200190929190803590602001909291908035906020019064010000000081111561040557600080fd5b82018360208201111561041757600080fd5b8035906020019184600183028401116401000000008311171561043957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610919565b005b610495610bb8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104d55780820151818401526020810190506104ba565b50505050905090810190601f1680156105025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000601960f81b600060f81b30888888888860405160200180897effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101887effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140185815260200184805190602001908083835b6020831061065c5780518252602082019150602081019050602083039250610639565b6001836020036101000a03801982511681845116808217855250505050505090500183600181111561068a57fe5b60ff1660f81b81526001018281526020019850505050505050505060405160208183030381529060405280519060200120905095945050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610792576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806110b76026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610818576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110686024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6040518060400160405280601481526020017f5374617465204368616e6e656c204d6f64756c6500000000000000000000000081525081565b6108ff610bf1565b565b60026020528060005260406000206000915090505481565b60006109288787878787610510565b905060006002600083815260200190815260200160002054146109b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f5472616e73616374696f6e20616c72656164792065786563757465640000000081525060200191505060405180910390fd5b6109bd8183610cf8565b60016002600083815260200190815260200160002081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663468721a7888888886040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001836001811115610a7357fe5b60ff168152602001828103825284818151815260200191508051906020019080838360005b83811015610ab3578082015181840152602081019050610a98565b50505050905090810190601f168015610ae05780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610b0257600080fd5b505af1158015610b16573d6000803e3d6000fd5b505050506040513d6020811015610b2c57600080fd5b8101908080519060200190929190505050610baf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f436f756c64206e6f742065786563757465207472616e73616374696f6e00000081525060200191505060405180910390fd5b50505050505050565b6040518060400160405280600581526020017f302e312e3000000000000000000000000000000000000000000000000000000081525081565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4d616e616765722068617320616c7265616479206265656e207365740000000081525060200191505060405180910390fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008090506000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e75235b86040518163ffffffff1660e01b815260040160206040518083038186803b158015610d6a57600080fd5b505afa158015610d7e573d6000803e3d6000fd5b505050506040513d6020811015610d9457600080fd5b81019080805190602001909291905050509050600091505b80821015610fa157610dbf868684610fa9565b9250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610e6057600080fd5b505afa158015610e74573d6000803e3d6000fd5b505050506040513d6020811015610e8a57600080fd5b8101908080519060200190929190505050610f0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5369676e6174757265206e6f742070726f7669646564206279206f776e65720081525060200191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1611610f91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061108c602b913960400191505060405180910390fd5b8293508180600101925050610dac565b505050505050565b600080600080610fb98686611038565b80935081945082955050505060018784848460405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611022573d6000803e3d6000fd5b5050506020604051035193505050509392505050565b60008060008360410260208101860151925060408101860151915060ff6041820187015116935050925092509256fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465645369676e61747572657320617265206e6f74206f726465726564206279206f776e657220616464726573734d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d206d616e61676572a265627a7a723158201c49dbeffb0cce566ecf06ad19109a4b2181c6e5353b7ef9f806353d6837200264736f6c63430005100032";
