import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { Factory } from "../../../../../generated/Factory/Factory";
import {
  BIGINT_ZERO,
  FeeSwitch,
  MINIMUM_LIQUIDITY_TWENTY_FIVE_THOUSAND,
  Network,
  PROTOCOL_SCHEMA_VERSION,
  RewardIntervalType,
} from "../../../../../src/common/constants";
import { Configurations } from "../../../../../configurations/configurations/interface";
import {
  PROTOCOL_SUBGRAPH_VERSION,
  PROTOCOL_METHODOLOGY_VERSION,
  PROTOCOL_NAME,
  PROTOCOL_SLUG,
} from "../../../src/common/constants";
import {
  toLowerCase,
  toLowerCaseList,
} from "../../../../../src/common/utils/utils";

export class SushiswapMaticConfigurations implements Configurations {
  getNetwork(): string {
    return Network.MATIC;
  }
  getSchemaVersion(): string {
    return PROTOCOL_SCHEMA_VERSION;
  }
  getSubgraphVersion(): string {
    return PROTOCOL_SUBGRAPH_VERSION;
  }
  getMethodologyVersion(): string {
    return PROTOCOL_METHODOLOGY_VERSION;
  }
  getProtocolName(): string {
    return PROTOCOL_NAME;
  }
  getProtocolSlug(): string {
    return PROTOCOL_SLUG;
  }
  getFactoryAddress(): string {
    return toLowerCase("0xc35dadb65012ec5796536bd9864ed8773abc74c4");
  }
  getFactoryContract(): Factory {
    return Factory.bind(
      Address.fromString(
        toLowerCase("0xc35dadb65012ec5796536bd9864ed8773abc74c4")
      )
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTradeFee(blockNumber: BigInt): BigDecimal {
    return BigDecimal.fromString("0.3");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getProtocolFeeToOn(blockNumber: BigInt): BigDecimal {
    return BigDecimal.fromString("0.05");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getLPFeeToOn(blockNumber: BigInt): BigDecimal {
    return BigDecimal.fromString("0.25");
  }
  getProtocolFeeToOff(): BigDecimal {
    return BigDecimal.fromString("0");
  }
  getLPFeeToOff(): BigDecimal {
    return BigDecimal.fromString("0.3");
  }
  getFeeOnOff(): string {
    return FeeSwitch.ON;
  }
  getRewardIntervalType(): string {
    return RewardIntervalType.TIMESTAMP;
  }
  getRewardTokenRate(): BigInt {
    return BIGINT_ZERO;
  }
  getReferenceToken(): string {
    return toLowerCase("0x7ceb23fd6bc0add59e62ac25578270cff1b9f619");
  }
  getRewardToken(): string {
    return toLowerCase("0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a");
  }
  getWhitelistTokens(): string[] {
    return toLowerCaseList([
      "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", // wETH
      "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270", // wMATIC
      "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // USDC
      "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063", // DAI
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", // USDT
      "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6", // wBTC
      "0x4e78011ce80ee02d2c3e649fb657e45898257815", // Klima
      "0x2f800db0fdb5223b3c3f354886d907a671414a7f", // BCT
    ]);
  }
  getStableCoins(): string[] {
    return toLowerCaseList([
      "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // USDC
      "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063", // DAI
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", // USDT
    ]);
  }
  getStableOraclePools(): string[] {
    return toLowerCaseList([
      "0x34965ba0ac2451a34a0471f04cca3f990b8dea27", // wETH/USDC
      "0xc2755915a85c6f6c1c0f3a86ac8c058f11caa9c9", // wETH/USDT
      "0x6ff62bfb8c12109e8000935a6de54dad83a4f39f", // wETH/DAI
    ]);
  }
  getUntrackedPairs(): string[] {
    return toLowerCaseList([]);
  }
  getUntrackedTokens(): string[] {
    return [];
  }
  getBrokenERC20Tokens(): string[] {
    return [];
  }
  getMinimumLiquidityThresholdTrackVolume(): BigDecimal {
    return MINIMUM_LIQUIDITY_TWENTY_FIVE_THOUSAND;
  }
  getMinimumLiquidityThresholdTrackPrice(): BigDecimal {
    return MINIMUM_LIQUIDITY_TWENTY_FIVE_THOUSAND;
  }
}
