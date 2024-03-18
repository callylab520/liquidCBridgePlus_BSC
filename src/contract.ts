import {
  BridgePlusFee as BridgePlusFeeEvent,
  BridgePlusRedeem as BridgePlusRedeemEvent,
  BridgePlusSwap as BridgePlusSwapEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  BridgePlusFee,
  BridgePlusRedeem,
  BridgePlusSwap,
  OwnershipTransferred
} from "../generated/schema"

export function handleBridgePlusFee(event: BridgePlusFeeEvent): void {
  let entity = new BridgePlusFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.fee = event.params.fee
  entity.treasury = event.params.treasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBridgePlusRedeem(event: BridgePlusRedeemEvent): void {
  let entity = new BridgePlusRedeem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.dstToken = event.params.dstToken
  entity.receiveToken = event.params.receiveToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBridgePlusSwap(event: BridgePlusSwapEvent): void {
  let entity = new BridgePlusSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dstAddress = event.params.dstAddress
  entity.receiver = event.params.receiver
  entity.srcChainId = event.params.srcChainId
  entity.srcToken = event.params.srcToken
  entity.amount = event.params.amount
  entity.dstChainId = event.params.dstChainId
  entity.dstToken = event.params.dstToken
  entity.receiveToken = event.params.receiveToken
  entity.bridgeType = event.params.bridgeType
  entity.basketId = event.params.basketId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.account = event.transaction.from

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
