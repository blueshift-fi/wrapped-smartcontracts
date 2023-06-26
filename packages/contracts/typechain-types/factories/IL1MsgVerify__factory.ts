/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IL1MsgVerify, IL1MsgVerifyInterface } from "../IL1MsgVerify";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum L1Type",
        name: "l1Type",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "l1Address",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IL1MsgVerify__factory {
  static readonly abi = _abi;
  static createInterface(): IL1MsgVerifyInterface {
    return new utils.Interface(_abi) as IL1MsgVerifyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IL1MsgVerify {
    return new Contract(address, _abi, signerOrProvider) as IL1MsgVerify;
  }
}
