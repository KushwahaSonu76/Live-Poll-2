# Stellar Payment Tracker

A fully functional, real-time decentralized application (dApp) built on the Stellar Testnet for tracking and executing payments with on-chain verification. This project is submitted for the Level 2 - Yellow Belt certification. The application acts as a "Payment Tracker", where users can send XLM payments to multiple addresses and record every payment on a Soroban smart contract with real-time status updates.

## Features

- **Multi-Wallet Support:** Seamlessly connects with popular Stellar wallets including Freighter, xBull, and Albedo via `@creit.tech/stellar-wallets-kit`.
- **Smart Contract Integration:** Utilizes a custom Soroban smart contract deployed on the Stellar Testnet to securely record payment metadata (sender, recipient, amount, status, timestamp) on-chain.
- **Real-Time State Sync:** Automatically polls and synchronizes smart contract state and transaction progress without relying on artificial timeouts, giving users an accurate representation of on-chain operations.
- **Robust Error Handling:** Safely manages 3 primary failure modes:
  1. **Wallet not found:** Detects when a wallet extension is missing or unlinked.
  2. **Transaction rejected:** Handles user-aborted operations directly from the wallet prompt.
  3. **Insufficient balance / Contract error:** Validates Horizon `op_underfunded` and execution failures, gracefully rolling back the contract status to 'failed'.

## Tech Stack

- **Frontend:** React, Vite, TypeScript, TailwindCSS v4
- **Smart Contract:** Rust, Soroban SDK
- **Stellar Libraries:** `@creit.tech/stellar-wallets-kit`, `@stellar/stellar-sdk`
- **Network:** Stellar Testnet (Horizon & Soroban RPC)

## Smart Contract Details

- **Contract ID:** `CAG52EC6BOCVCMCEBJBRGOECSLOC6S5E56B7TBCTVTRUBGTFEV75R3BA`
- **WASM Upload Transaction Hash:** `5bc3949d55301457e3a12a134c11dd2b011066c59eb998e20c7e586e58bdd498`
- **Contract Deploy Transaction Hash:** `0958cf3bc2da31b9d8b7aebc65c8d5d3d529eeff3e125fb7c88872ec2b15d34f`

## How to Run the Project

1. **Clone the repository and install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Open the browser:**
   Navigate to the local URL (usually `http://localhost:5173`) to view the application. Connect your Freighter, xBull, or Albedo wallet (on Testnet) and start sending and tracking payments.
