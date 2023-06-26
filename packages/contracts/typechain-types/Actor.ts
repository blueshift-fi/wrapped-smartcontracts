/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ActorInterface extends utils.Interface {
  functions: {
    "execute(bytes,bytes)": FunctionFragment;
    "mainchainAddress()": FunctionFragment;
    "nonce()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "execute" | "mainchainAddress" | "nonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "mainchainAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mainchainAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;

  events: {
    "Response(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Response"): EventFragment;
}

export interface ResponseEventObject {
  success: boolean;
}
export type ResponseEvent = TypedEvent<[boolean], ResponseEventObject>;

export type ResponseEventFilter = TypedEventFilter<ResponseEvent>;

export interface Actor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ActorInterface;

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
    execute(
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mainchainAddress(overrides?: CallOverrides): Promise<[string]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  execute(
    signature: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mainchainAddress(overrides?: CallOverrides): Promise<string>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    execute(
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    mainchainAddress(overrides?: CallOverrides): Promise<string>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Response(bool)"(success?: null): ResponseEventFilter;
    Response(success?: null): ResponseEventFilter;
  };

  estimateGas: {
    execute(
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mainchainAddress(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      signature: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mainchainAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}