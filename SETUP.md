# 🚀 Quick Setup Guide

## Installation

1. **Install all dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update the values as needed

3. **Start the application:**
   ```bash
   npm start
   ```

That's it! Your store will be running at:
- **Frontend:** http://localhost:8080
- **Backend API:** http://localhost:3001

## What `npm start` Does

The `npm start` command runs both frontend and backend simultaneously using `concurrently`:
- ✅ Starts Express backend server on port 3001
- ✅ Starts Vite development server on port 8080
- ✅ Color-coded console output (blue for server, green for client)
- ✅ Both processes run in parallel

## Project Features

### ✨ Frontend
- Modern React 18 with TypeScript
- Wallet connection (MetaMask)
- Staking interface
- Token exchange/swap
- Shopping cart
- Authentication with wallet signatures
- Responsive design with Tailwind CSS
- Beautiful UI with shadcn/ui

### 🔧 Backend
- Express REST API
- JWT authentication
- Wallet signature verification
- User management
- NFT operations
- Auction system
- Modular architecture

## Available Commands

```bash
# Run both frontend and backend
npm start

# Run frontend only
npm run dev

# Run backend only
npm run server

# Build for production
npm run build

# Run linter
npm run lint
```

## Folder Structure

```
├── src/                    # Frontend
│   ├── pages/             # Routes (Home, Staking, Exchange)
│   ├── components/        # UI components
│   ├── layout/            # Layout wrappers
│   ├── abi/               # Smart contract ABIs
│   ├── hooks/             # React hooks (wallet, auth, cart)
│   ├── token/             # Token configurations
│   └── services/          # API client
│
├── server/                # Backend
│   ├── modules/          # Feature modules
│   ├── routes/           # API routes
│   ├── helper/           # Utilities
│   └── server.js         # Entry point
│
└── public/               # Static assets
```

## Next Steps

1. **Deploy Smart Contracts** - Update contract addresses in `.env`
2. **Add Database** - Replace in-memory storage with MongoDB/PostgreSQL
3. **Configure Blockchain** - Set your preferred network (mainnet/testnet)
4. **Customize** - Add your branding and products
5. **Deploy** - Deploy to your hosting service

## Troubleshooting

### Port Already in Use
If port 3001 or 8080 is already in use, update the ports in:
- `.env` (PORT=3001)
- `vite.config.ts` (port: 8080)

### MetaMask Not Detected
Make sure you have MetaMask installed in your browser.

### Dependencies Issues
Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

## Support

For issues or questions, check the README_PROJECT.md file for detailed documentation.
