import * as chains from './chains';

// If you add coins for a new network, make sure Weth token (for the router you are using) is the first entry



const SEPOLIACoins = [
  {
    name: "Ether",
    abbr: "ETH",
    token: "", // Weth token is fetched from the router
  },
  {
    name: "WETH",
    abbr: "WETH",
    token: "0x0224AB042Ca74a7b1696c44a9534a5A9D7Bbba15",
  },
  {
    name: "TEST",
    abbr: "TEST",
    token: "0x7c5A3696966952535337E2Bce9A55e35B98c2105",
  },
  {
    name: "NEXT",
    abbr: "NEXT",
    token: "0x1Bc365E5489747a31954799206E2Aa00048e7De8",
  },
]

const ARTHERACoins = [
  {
    name: "Ether",
    abbr: "ETH",
    token: "", // Weth token is fetched from the router
    icon: "",
  },
  {
    name: "Wrapped Ethereum",
    abbr: "WETH",
    token: "0x6434F66B998aF521bB7901746AaA9D319D1af013",
    icon: "",
  },
  {
    name: "Pepecoin",
    abbr: "PEPE",
    token: "0x4014ac809C24A63F1775868325DAeEd32d45434b",
    icon: "",
  },
  {
    name: "Zeit token",
    abbr: "ZEIT",
    token: "0xBF5f70dc1c6CDe1c9EDec2fcFEf6a5cab60d11b4",
    icon: "",
  },
  {
    name: "USDT",
    abbr: "USDT",
    token: "0x222",
    icon: "",
  },
  {
    name: "Bitcoin",
    abbr: "BTC",
    token: "0x000",
    icon: "",
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.SEPOLIA, SEPOLIACoins);
COINS.set(chains.ChainId.ARTHERA, ARTHERACoins);

export default COINS
