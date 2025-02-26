/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  InfiniteLoop,
  InfiniteLoopInterface,
} from "../../dev/InfiniteLoop";

const _abi = [
  {
    inputs: [],
    name: "loop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a78061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a92100cb14602d575b600080fd5b60336035565b005b600080549080604283604b565b91905055506035565b600060018201606a57634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122023c64bb10376a7ee4def1faa8386c3a18913ae85d4cbafc10c444075f6c5257864736f6c63430008120033";

type InfiniteLoopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InfiniteLoopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InfiniteLoop__factory extends ContractFactory {
  constructor(...args: InfiniteLoopConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InfiniteLoop> {
    return super.deploy(overrides || {}) as Promise<InfiniteLoop>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InfiniteLoop {
    return super.attach(address) as InfiniteLoop;
  }
  override connect(signer: Signer): InfiniteLoop__factory {
    return super.connect(signer) as InfiniteLoop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InfiniteLoopInterface {
    return new utils.Interface(_abi) as InfiniteLoopInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InfiniteLoop {
    return new Contract(address, _abi, signerOrProvider) as InfiniteLoop;
  }
}
