const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiService {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem('authToken');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  // Auth endpoints
  async verifyWallet(address: string, signature: string, message: string) {
    return this.request('/auth/verify-wallet', {
      method: 'POST',
      body: JSON.stringify({ address, signature, message }),
    });
  }

  async login(address: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ address }),
    });
  }

  async register(address: string, username?: string, email?: string) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ address, username, email }),
    });
  }

  // User endpoints
  async getUser(id: number) {
    return this.request(`/users/${id}`);
  }

  async getUserProfile(address: string) {
    return this.request(`/users/profile/${address}`);
  }

  async updateUser(id: number, data: any) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // NFT endpoints
  async getNFTs() {
    return this.request('/nfts');
  }

  async getNFT(id: number) {
    return this.request(`/nfts/${id}`);
  }

  async createNFT(data: any) {
    return this.request('/nfts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Auction endpoints
  async getAuctions() {
    return this.request('/auctions');
  }

  async getAuction(id: number) {
    return this.request(`/auctions/${id}`);
  }

  async createAuction(data: any) {
    return this.request('/auctions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async placeBid(auctionId: number, amount: number) {
    return this.request(`/auctions/${auctionId}/bid`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
    });
  }
}

export const apiService = new ApiService(API_BASE_URL);
