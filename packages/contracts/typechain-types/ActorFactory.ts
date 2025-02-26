/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ActorFactoryInterface extends utils.Interface {
  functions: {
    "deploy(string,bytes32)": FunctionFragment;
    "deployAndExecute(string,bytes32,bytes,bytes,uint256)": FunctionFragment;
    "getActorAddress(string,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deploy" | "deployAndExecute" | "getActorAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deploy",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployAndExecute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getActorAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployAndExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActorAddress",
    data: BytesLike
  ): Result;

  events: {
    "Deployed(address,string,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
}

export interface DeployedEventObject {
  actorAddress: string;
  mainchainAddress: string;
  salt: string;
}
export type DeployedEvent = TypedEvent<
  [string, string, string],
  DeployedEventObject
>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface ActorFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ActorFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deploy(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deployAndExecute(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getActorAddress(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  deploy(
    mainchainAddress: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deployAndExecute(
    mainchainAddress: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>,
    gasLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getActorAddress(
    mainchainAddress: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    deploy(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    deployAndExecute(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getActorAddress(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Deployed(address,string,bytes32)"(
      actorAddress?: PromiseOrValue<string> | null,
      mainchainAddress?: PromiseOrValue<string> | null,
      salt?: null
    ): DeployedEventFilter;
    Deployed(
      actorAddress?: PromiseOrValue<string> | null,
      mainchainAddress?: PromiseOrValue<string> | null,
      salt?: null
    ): DeployedEventFilter;
  };

  estimateGas: {
    deploy(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deployAndExecute(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getActorAddress(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deployAndExecute(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getActorAddress(
      mainchainAddress: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
