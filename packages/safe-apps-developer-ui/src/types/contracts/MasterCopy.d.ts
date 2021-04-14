/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MasterCopyInterface extends ethers.utils.Interface {
  functions: {
    "changeMasterCopy(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeMasterCopy",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeMasterCopy",
    data: BytesLike
  ): Result;

  events: {
    "ChangedMasterCopy(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedMasterCopy"): EventFragment;
}

export class MasterCopy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MasterCopyInterface;

  functions: {
    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    "changeMasterCopy(address)"(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Allows to upgrade the contract. This can only be done via a Safe transaction.
   * @param _masterCopy New contract address.
   */
  changeMasterCopy(
    _masterCopy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Allows to upgrade the contract. This can only be done via a Safe transaction.
   * @param _masterCopy New contract address.
   */
  "changeMasterCopy(address)"(
    _masterCopy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    changeMasterCopy(
      _masterCopy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    "changeMasterCopy(address)"(
      _masterCopy: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ChangedMasterCopy(
      masterCopy: null
    ): TypedEventFilter<[string], { masterCopy: string }>;
  };

  estimateGas: {
    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    "changeMasterCopy(address)"(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to upgrade the contract. This can only be done via a Safe transaction.
     * @param _masterCopy New contract address.
     */
    "changeMasterCopy(address)"(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
