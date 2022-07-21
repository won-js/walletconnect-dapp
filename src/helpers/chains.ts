import { IChainData } from "../helpers/types";

export const SUPPORTED_CHAINS: IChainData[] = [
  {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Ropsten",
    short_name: "rop",
    chain: "ETH",
    network: "ropsten",
    chain_id: 3,
    network_id: 3,
    rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Rinkeby",
    short_name: "rin",
    chain: "ETH",
    network: "rinkeby",
    chain_id: 4,
    network_id: 4,
    rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Görli",
    short_name: "gor",
    chain: "ETH",
    network: "goerli",
    chain_id: 5,
    network_id: 5,
    rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "RSK Mainnet",
    short_name: "rsk",
    chain: "RSK",
    network: "mainnet",
    chain_id: 30,
    network_id: 30,
    rpc_url: "https://public-node.rsk.co",
    native_currency: {
      symbol: "RSK",
      name: "RSK",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Kovan",
    short_name: "kov",
    chain: "ETH",
    network: "kovan",
    chain_id: 42,
    network_id: 42,
    rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Ethereum Classic Mainnet",
    short_name: "etc",
    chain: "ETC",
    network: "mainnet",
    chain_id: 61,
    network_id: 1,
    rpc_url: "https://ethereumclassic.network",
    native_currency: {
      symbol: "ETH",
      name: "Ether Classic",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "POA Network Sokol",
    short_name: "poa",
    chain: "POA",
    network: "sokol",
    chain_id: 77,
    network_id: 77,
    rpc_url: "https://sokol.poa.network",
    native_currency: {
      symbol: "POA",
      name: "POA",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "POA Network Core",
    short_name: "skl",
    chain: "POA",
    network: "core",
    chain_id: 99,
    network_id: 99,
    rpc_url: "https://core.poa.network",
    native_currency: {
      symbol: "POA",
      name: "POA",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "xDAI Chain",
    short_name: "xdai",
    chain: "POA",
    network: "dai",
    chain_id: 100,
    network_id: 100,
    rpc_url: "https://dai.poa.network",
    native_currency: {
      symbol: "xDAI",
      name: "xDAI",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Callisto Mainnet",
    short_name: "clo",
    chain: "callisto",
    network: "mainnet",
    chain_id: 820,
    network_id: 1,
    rpc_url: "https://clo-geth.0xinfra.com/",
    native_currency: {
      symbol: "CLO",
      name: "CLO",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  {
    name: "Polygon Testnet Mumbai",
    chain: "Polygon",
    network: "mumbai",
    rpc_url: "https://rpc-mumbai.maticvigil.com",
    native_currency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    short_name: "maticmum",
    chain_id: 80001,
    network_id: 80001,
  },
  {
    name: "Polygon Mainnet",
    chain: "Polygon",
    network: "mainnet",
    rpc_url: "https://rpc-mainnet.maticvigil.com",
    native_currency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    short_name: "MATIC",
    chain_id: 137,
    network_id: 137,
  },
  {
    name: "Avalanche Fuji Testnet",
    chain: "AVAX",
    network: "fuji",
    rpc_url: "https://api.avax-test.network/ext/bc/C/rpc",
    native_currency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    short_name: "Fuji",
    chain_id: 43113,
    network_id: 1,
  },
  {
    name: "Avalanche Mainnet",
    chain: "AVAX",
    network: "mainnet",
    rpc_url: "https://api.avax.network/ext/bc/C/rpc",
    native_currency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    short_name: "Avalanche",
    chain_id: 43114,
    network_id: 43114,
  },
  {
    name: "Arbitrum One",
    chain_id: 42161,
    network_id: 42161,
    network: "mainnet",
    short_name: "arb1",
    chain: "ETH",
    native_currency: {
      name: "Ether",
      symbol: "AETH",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    rpc_url: "https://arbitrum-mainnet.infura.io/v3/%API_KEY%",
  },
  {
    name: "Optimism",
    chain: "ETH",
    rpc_url: "https://mainnet.optimism.io/",
    network: "mainnet",
    native_currency: {
      name: "Ether",
      symbol: "OETH",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    short_name: "oeth",
    chain_id: 10,
    network_id: 10,
  },
  {
    name: "Avalanche Subnet Test",
    short_name: "Subnet",
    chain: "AVAX",
    network: "subnet",
    chain_id: 4322,
    network_id: 4322,
    rpc_url: "http://54.180.31.198:9650/ext/bc/28Ln3UggGRNyWKXS7HPAJHGkSVxZX6EoYDNKpQNopTJrQG4BvU/rpc",
    native_currency: {
      symbol: "AVAX",
      name: "Avalanche",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
];
