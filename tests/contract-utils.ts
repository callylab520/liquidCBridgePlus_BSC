import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BridgePlusFee,
  BridgePlusRedeem,
  BridgePlusSwap,
  OwnershipTransferred
} from "../generated/Contract/Contract"

export function createBridgePlusFeeEvent(
  token: Address,
  fee: BigInt,
  treasury: Address
): BridgePlusFee {
  let bridgePlusFeeEvent = changetype<BridgePlusFee>(newMockEvent())

  bridgePlusFeeEvent.parameters = new Array()

  bridgePlusFeeEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  bridgePlusFeeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  bridgePlusFeeEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return bridgePlusFeeEvent
}

export function createBridgePlusRedeemEvent(
  receiver: Address,
  dstToken: Address,
  receiveToken: BigInt
): BridgePlusRedeem {
  let bridgePlusRedeemEvent = changetype<BridgePlusRedeem>(newMockEvent())

  bridgePlusRedeemEvent.parameters = new Array()

  bridgePlusRedeemEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  bridgePlusRedeemEvent.parameters.push(
    new ethereum.EventParam("dstToken", ethereum.Value.fromAddress(dstToken))
  )
  bridgePlusRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "receiveToken",
      ethereum.Value.fromUnsignedBigInt(receiveToken)
    )
  )

  return bridgePlusRedeemEvent
}

export function createBridgePlusSwapEvent(
  dstAddress: Address,
  receiver: Address,
  srcChainId: BigInt,
  srcToken: Address,
  amount: BigInt,
  dstChainId: BigInt,
  dstToken: Address,
  receiveToken: Address,
  bridgeType: BigInt,
  basketId: BigInt
): BridgePlusSwap {
  let bridgePlusSwapEvent = changetype<BridgePlusSwap>(newMockEvent())

  bridgePlusSwapEvent.parameters = new Array()

  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam(
      "dstAddress",
      ethereum.Value.fromAddress(dstAddress)
    )
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam(
      "srcChainId",
      ethereum.Value.fromUnsignedBigInt(srcChainId)
    )
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam("srcToken", ethereum.Value.fromAddress(srcToken))
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam(
      "dstChainId",
      ethereum.Value.fromUnsignedBigInt(dstChainId)
    )
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam("dstToken", ethereum.Value.fromAddress(dstToken))
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam(
      "receiveToken",
      ethereum.Value.fromAddress(receiveToken)
    )
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam(
      "bridgeType",
      ethereum.Value.fromUnsignedBigInt(bridgeType)
    )
  )
  bridgePlusSwapEvent.parameters.push(
    new ethereum.EventParam(
      "basketId",
      ethereum.Value.fromUnsignedBigInt(basketId)
    )
  )

  return bridgePlusSwapEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
