# API Documentation

Base URL: `http://localhost:3001/api`

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### POST /auth/register
Register a new user with wallet address.

**Request Body:**
```json
{
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "username": "john_doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "username": "john_doe",
    "email": "john@example.com",
    "createdAt": "2024-12-04T10:00:00.000Z"
  }
}
```

### POST /auth/login
Login with wallet address.

**Request Body:**
```json
{
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "username": "john_doe"
  }
}
```

### POST /auth/verify-wallet
Verify wallet signature and authenticate.

**Request Body:**
```json
{
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "signature": "0x...",
  "message": "Sign this message to authenticate..."
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
  }
}
```

---

## Users

### GET /users/:id
Get user by ID. **[Protected]**

**Response:**
```json
{
  "id": 1,
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "username": "john_doe",
  "email": "john@example.com",
  "createdAt": "2024-12-04T10:00:00.000Z"
}
```

### GET /users/profile/:address
Get user by wallet address. **[Protected]**

**Response:**
```json
{
  "id": 1,
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "username": "john_doe",
  "email": "john@example.com"
}
```

### PUT /users/:id
Update user information. **[Protected]**

**Request Body:**
```json
{
  "username": "new_username",
  "email": "newemail@example.com"
}
```

**Response:**
```json
{
  "id": 1,
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "username": "new_username",
  "email": "newemail@example.com"
}
```

---

## NFTs

### GET /nfts
Get all NFTs.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Cool NFT #1",
    "description": "A cool NFT",
    "tokenId": "1",
    "contractAddress": "0x...",
    "imageUrl": "https://...",
    "ownerId": 1,
    "createdAt": "2024-12-04T10:00:00.000Z"
  }
]
```

### GET /nfts/:id
Get NFT by ID.

**Response:**
```json
{
  "id": 1,
  "name": "Cool NFT #1",
  "description": "A cool NFT",
  "tokenId": "1",
  "contractAddress": "0x...",
  "imageUrl": "https://...",
  "ownerId": 1,
  "createdAt": "2024-12-04T10:00:00.000Z"
}
```

### POST /nfts
Create a new NFT. **[Protected]**

**Request Body:**
```json
{
  "name": "Cool NFT #1",
  "description": "A cool NFT",
  "tokenId": "1",
  "contractAddress": "0x...",
  "imageUrl": "https://..."
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Cool NFT #1",
  "description": "A cool NFT",
  "tokenId": "1",
  "contractAddress": "0x...",
  "imageUrl": "https://...",
  "ownerId": 1,
  "createdAt": "2024-12-04T10:00:00.000Z"
}
```

### PUT /nfts/:id
Update NFT. **[Protected]**

**Request Body:**
```json
{
  "name": "Updated NFT Name",
  "description": "Updated description"
}
```

---

## Auctions

### GET /auctions
Get all auctions.

**Response:**
```json
[
  {
    "id": 1,
    "nftId": 1,
    "startPrice": "1.0",
    "currentPrice": "1.5",
    "endTime": "2024-12-10T10:00:00.000Z",
    "creatorId": 1,
    "bids": [
      {
        "userId": 2,
        "amount": "1.5",
        "timestamp": "2024-12-04T11:00:00.000Z"
      }
    ],
    "createdAt": "2024-12-04T10:00:00.000Z"
  }
]
```

### GET /auctions/:id
Get auction by ID.

**Response:**
```json
{
  "id": 1,
  "nftId": 1,
  "startPrice": "1.0",
  "currentPrice": "1.5",
  "endTime": "2024-12-10T10:00:00.000Z",
  "creatorId": 1,
  "bids": [],
  "createdAt": "2024-12-04T10:00:00.000Z"
}
```

### POST /auctions
Create a new auction. **[Protected]**

**Request Body:**
```json
{
  "nftId": 1,
  "startPrice": "1.0",
  "endTime": "2024-12-10T10:00:00.000Z"
}
```

**Response:**
```json
{
  "id": 1,
  "nftId": 1,
  "startPrice": "1.0",
  "currentPrice": "1.0",
  "endTime": "2024-12-10T10:00:00.000Z",
  "creatorId": 1,
  "bids": [],
  "createdAt": "2024-12-04T10:00:00.000Z"
}
```

### POST /auctions/:id/bid
Place a bid on an auction. **[Protected]**

**Request Body:**
```json
{
  "amount": "1.5"
}
```

**Response:**
```json
{
  "id": 1,
  "nftId": 1,
  "startPrice": "1.0",
  "currentPrice": "1.5",
  "endTime": "2024-12-10T10:00:00.000Z",
  "creatorId": 1,
  "bids": [
    {
      "userId": 2,
      "amount": "1.5",
      "timestamp": "2024-12-04T11:00:00.000Z"
    }
  ]
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Invalid input data"
}
```

### 401 Unauthorized
```json
{
  "error": "No token provided"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Something went wrong!"
}
```

---

## Frontend API Client Usage

The frontend includes a pre-configured API client (`src/services/api.ts`):

```typescript
import { apiService } from '@/services/api';

// Authentication
const { token, user } = await apiService.verifyWallet(address, signature, message);
apiService.setToken(token);

// Get user profile
const profile = await apiService.getUserProfile(address);

// Create NFT
const nft = await apiService.createNFT({
  name: "My NFT",
  description: "Description",
  tokenId: "1",
  contractAddress: "0x...",
  imageUrl: "https://..."
});

// Get auctions
const auctions = await apiService.getAuctions();

// Place bid
const auction = await apiService.placeBid(auctionId, amount);
```

The API client automatically handles:
- JWT token management
- Authorization headers
- Error handling
- Request/response formatting
