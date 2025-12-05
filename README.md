# Full-Stack Web3 Store Project

## 🚀 Quick Start

Run both frontend and backend with a single command:

```bash
npm install
npm start
```

This will start:
- **Backend Server** on `http://localhost:3001`
- **Frontend App** on `http://localhost:8080`

## 📁 Project Structure

```
├── src/                      # Frontend React app
│   ├── pages/               # Home, Staking, Exchange pages
│   │   ├── Index.tsx       # Main store page
│   │   ├── Staking.tsx     # Staking interface
│   │   ├── Exchange.tsx    # Token swap interface
│   │   └── Auth.tsx        # Authentication page
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer component
│   │   └── ui/             # shadcn/ui components
│   ├── layout/              # Layout wrappers
│   │   └── MainLayout.tsx  # Main page layout
│   ├── abi/                 # Smart contract ABIs
│   │   ├── StakingContract.json
│   │   └── NFTContract.json
│   ├── hooks/               # Custom React hooks
│   │   ├── useWallet.ts    # Wallet connection
│   │   ├── useAuth.ts      # Authentication
│   │   └── useCart.ts      # Shopping cart
│   ├── token/               # Token configurations
│   │   └── tokenList.ts    # Supported tokens
│   └── services/            # API services
│       └── api.ts          # Backend API client
│
├── server/                  # Backend Express server
│   ├── modules/            # Feature modules
│   │   ├── user/           # User management
│   │   ├── nft/            # NFT operations
│   │   ├── auction/        # Auction system
│   │   └── auth/           # Authentication
│   ├── routes/             # API routes
│   │   └── api/            # API endpoints
│   ├── helper/             # Utility functions
│   │   ├── validation.js   # Input validation
│   │   └── authMiddleware.js # JWT auth
│   └── server.js           # Server entry point
│
└── public/                 # Static assets
    ├── favicon.ico
    └── robots.txt
```

## 🔧 Available Scripts

- `npm start` - Run both frontend and backend concurrently
- `npm run dev` - Run frontend only (development mode)
- `npm run server` - Run backend only
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## 🔐 Features

### Frontend
- ✅ Wallet connection (MetaMask)
- ✅ User authentication with wallet signature
- ✅ Staking interface
- ✅ Token exchange/swap
- ✅ Shopping cart
- ✅ Responsive design with Tailwind CSS
- ✅ Modern UI with shadcn/ui components

### Backend
- ✅ RESTful API with Express
- ✅ JWT authentication
- ✅ Wallet signature verification
- ✅ User management
- ✅ NFT operations
- ✅ Auction system
- ✅ CORS enabled

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-wallet` - Verify wallet signature

### Users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/profile/:address` - Get user by wallet address
- `PUT /api/users/:id` - Update user

### NFTs
- `GET /api/nfts` - Get all NFTs
- `GET /api/nfts/:id` - Get NFT by ID
- `POST /api/nfts` - Create NFT (auth required)
- `PUT /api/nfts/:id` - Update NFT (auth required)

### Auctions
- `GET /api/auctions` - Get all auctions
- `GET /api/auctions/:id` - Get auction by ID
- `POST /api/auctions` - Create auction (auth required)
- `POST /api/auctions/:id/bid` - Place bid (auth required)

## 🔑 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Backend
PORT=3001
JWT_SECRET=your-secret-key

# Frontend
VITE_API_URL=http://localhost:3001/api
VITE_CHAIN_ID=1
VITE_STAKING_CONTRACT_ADDRESS=0x...
VITE_NFT_CONTRACT_ADDRESS=0x...
```

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Ethers.js v6
- React Router
- TanStack Query

### Backend
- Node.js
- Express
- JWT
- Ethers.js
- CORS

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables
4. Start the application:
   ```bash
   npm start
   ```

## 🚀 Deployment

### Frontend
```bash
npm run build
```
Deploy the `dist` folder to your hosting service.

### Backend
Deploy the `server` folder to your Node.js hosting service.

## 🔒 Security Notes

- Change `JWT_SECRET` in production
- Use environment variables for sensitive data
- Implement rate limiting for production
- Add database instead of in-memory storage
- Enable HTTPS in production

## 📝 Next Steps

1. Connect to a real database (MongoDB, PostgreSQL)
2. Deploy smart contracts
3. Add more token pairs for exchange
4. Implement real-time updates with WebSockets
5. Add transaction history
6. Implement admin panel
