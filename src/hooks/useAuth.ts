import { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';
import { apiService } from '@/services/api';

interface User {
  id: number;
  address: string;
  username?: string;
  email?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      apiService.setToken(token);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const signInWithWallet = async (address: string) => {
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask not installed');
      }

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Create message to sign
      const message = `Sign this message to authenticate with your wallet.\n\nAddress: ${address}\nTimestamp: ${Date.now()}`;
      
      // Request signature
      const signature = await signer.signMessage(message);

      // Verify with backend
      const response = await apiService.verifyWallet(address, signature, message);
      
      apiService.setToken(response.token);
      setUser(response.user);
      setIsAuthenticated(true);

      return response.user;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const register = async (address: string, username?: string, email?: string) => {
    try {
      const response = await apiService.register(address, username, email);
      
      apiService.setToken(response.token);
      setUser(response.user);
      setIsAuthenticated(true);

      return response.user;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    apiService.clearToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    signInWithWallet,
    register,
    logout,
  };
};
