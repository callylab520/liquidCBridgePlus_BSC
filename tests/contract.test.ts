import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BridgePlusFee } from "../generated/schema"
import { BridgePlusFee as BridgePlusFeeEvent } from "../generated/Contract/Contract"
import { handleBridgePlusFee } from "../src/contract"
import { createBridgePlusFeeEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let fee = BigInt.fromI32(234)
    let treasury = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBridgePlusFeeEvent = createBridgePlusFeeEvent(token, fee, treasury)
    handleBridgePlusFee(newBridgePlusFeeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BridgePlusFee created and stored", () => {
    assert.entityCount("BridgePlusFee", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BridgePlusFee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BridgePlusFee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fee",
      "234"
    )
    assert.fieldEquals(
      "BridgePlusFee",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "treasury",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
