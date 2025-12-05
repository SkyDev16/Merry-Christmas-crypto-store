export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  chainId: number;
}

export const tokenList: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    chainId: 1,
  },
  {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    chainId: 1,
  },
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    chainId: 1,
  },
  {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
    chainId: 1,
  },
];

export const getTokenBySymbol = (symbol: string): Token | undefined => {
  return tokenList.find(token => token.symbol === symbol);
};

export const getTokenByAddress = (address: string): Token | undefined => {
  return tokenList.find(token => token.address.toLowerCase() === address.toLowerCase());
};
