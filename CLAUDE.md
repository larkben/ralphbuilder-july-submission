# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `alephium-lend`, a lending protocol built on the Alephium blockchain. The project uses the Ralph smart contract language for contract development and includes a TypeScript configuration setup.

## Development Commands

### Contract Development
- `npm run compile` - Compile Ralph smart contracts using @alephium/cli
- `npm run test` - Compile contracts and run Jest tests
- `npm run lint` - Run Next.js linting

### Deployment
- `npm run devnet:deploy` - Deploy to devnet (localhost:22973)
- `npm run testnet:deploy` - Deploy to testnet
- `npm run mainnet:deploy` - Deploy to mainnet

### Development Server (if frontend exists)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Architecture

### Contract Structure
The lending protocol consists of several key contracts in `contracts/lending/`:

1. **XToken** (`aToken.ral`) - Abstract base contract implementing IFungibleToken interface
   - Provides standard token functionality (name, symbol, decimals, totalSupply)
   - Fixed total supply of 2^255 tokens
   - 18 decimal places

2. **LendPool** (`pool.ral`) - Core lending pool contract extending XToken
   - Manages lending and collateral balances
   - Handles supply() and borrow() operations
   - Tracks fees and references a manager contract
   - Contains placeholder claim() function for yield redemption

3. **Manager** (`manager.ral`) - Oracle and liquidation manager (abstract)
   - Price oracle functionality with token price mapping
   - Admin-controlled token addition/removal
   - Bot-controlled price updates
   - Handles token decimals mapping

4. **PoolFactory** (`poolFactory.ral`) - Factory contract for creating pools
   - Admin-controlled pool creation
   - Fee management
   - Placeholder for pool bribing functionality

5. **LendingRouter** (`router.ral`) - Router contract for lending operations
   - Placeholder supply() and borrow() functions
   - Intended as entry point for lending operations

### Configuration
- **alephium.config.ts** - Alephium CLI configuration
  - Network configurations for devnet, testnet, mainnet
  - Compiler options with specific warning controls
  - Settings include commission rates (1% default)
  - Environment variable support for private keys and node URLs

### Key Design Patterns
- Contracts use `@using(checkExternalCaller = false, updateFields = true)` for state modifications
- Price oracle pattern with admin/bot role separation
- Factory pattern for pool creation
- Router pattern for standardized interactions

## Development Notes

- The project uses Ralph smart contract language
- Test configuration is in `jest-config.json`
- Contracts are in early development stage with many placeholder functions
- Price oracle requires external price feed integration
- The protocol appears to be a basic lending/borrowing system with collateral management