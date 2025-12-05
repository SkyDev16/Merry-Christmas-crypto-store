import { useState, useEffect, useCallback } from 'react';
import { BrowserProvider, formatEther } from 'ethers';

interface WalletState {
  address: string | null;
  balance: string | null;
  chainId: number | null;
  isConnecting: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [state, setState] = useState<WalletState>({
    address: null,
    balance: null,
    chainId: null,
    isConnecting: false,
    error: null,
  });

  const checkWalletConnection = useCallback(async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          const provider = new BrowserProvider(window.ethereum);
          const balance = await provider.getBalance(accounts[0]);
          const network = await provider.getNetwork();
          
          setState({
            address: accounts[0],
            balance: formatEther(balance),
            chainId: Number(network.chainId),
            isConnecting: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    }
  }, []);

  useEffect(() => {
    checkWalletConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', checkWalletConnection);
      window.ethereum.on('chainChanged', () => window.location.reload());
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', checkWalletConnection);
      }
    };
  }, [checkWalletConnection]);

  const connect = async () => {
    if (!window.ethereum) {
      setState(prev => ({ ...prev, error: 'Please install MetaMask to continue' }));
      return;
    }

    setState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const provider = new BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(accounts[0]);
      const network = await provider.getNetwork();

      setState({
        address: accounts[0],
        balance: formatEther(balance),
        chainId: Number(network.chainId),
        isConnecting: false,
        error: null,
      });
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        isConnecting: false,
        error: error.message || 'Failed to connect wallet',
      }));
    }
  };

  const disconnect = () => {
    setState({
      address: null,
      balance: null,
      chainId: null,
      isConnecting: false,
      error: null,
    });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return {
    ...state,
    connect,
    disconnect,
    formatAddress,
    isConnected: !!state.address,
  };
};

declare global {
  interface Window {
    ethereum?: any;
  }
}
