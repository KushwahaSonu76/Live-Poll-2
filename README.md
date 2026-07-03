# Stellar Live Poll dApp

A fully functional, real-time Live Poll decentralized application (dApp) built on the **Stellar Testnet** using Soroban Smart Contracts. Users connect their Stellar wallets to cast votes for their favorite smart contract programming language, and the contract updates and publishes live results in real time.

---

## 1. Project Title & Description
### Stellar Live Poll dApp
Stellar Live Poll is an on-chain polling dApp designed to query community preference for smart contract programming languages. It allows users to authenticate using their Stellar wallets, cast a transaction-signed vote on-chain, and watch poll results adjust dynamically as votes are read directly from the Soroban smart contract. This project implements the **Live Poll** project idea.

---

## 2. Features
- **Multi-Wallet Support:** Seamless authentication through the `@creit.tech/stellar-wallets-kit`, enabling compatibility with **Freighter**, **xBull**, and **Albedo** wallets.
- **On-chain Voting:** Smart contract state is stored on the Soroban Testnet and updated via signed transactions.
- **Real-Time Synchronization:** Continual 10-second client-side polling and instant updates upon successful transactions to retrieve the latest vote tallies.
- **Transaction Status Tracker:** Full interactive UI showing state transitions: *Simulating...* ➔ *Awaiting signature...* ➔ *Submitting...* ➔ *Pending...* ➔ *Success / Failed*.
- **Detailed Error Handling:** Specific error diagnostics for:
  - **Wallet Not Found / Installed** (e.g., missing extension).
  - **Transaction Rejected** (user cancels the signature popup).
  - **Contract / Insufficient Balance Error** (unfunded accounts, simulation failure, or RPC trapped transactions).

---

## 3. Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS (v4)
- **Smart Contract Language:** Rust + Soroban SDK (`soroban-sdk`)
- **Stellar Integration:** `@stellar/stellar-sdk` & `@creit.tech/stellar-wallets-kit`
- **Build/Deployment Tooling:** Stellar CLI

---

## 4. Deployed Contract Info
- **Contract ID:** `CB3XOKM2GPZTXYDKKR7BDRCBEYP2B5N42IQNGL77XX66Y6FZWMJMBNX6`
- **Network:** Stellar Testnet
- **Deployment Command Used:**
  ```bash
  stellar contract deploy --wasm target/wasm32-unknown-unknown/release/live_poll.wasm --source alice --network testnet
  ```
- **Explorer Link:** [Stellar Expert - Contract CB3X...BNX6](https://stellar.expert/explorer/testnet/contract/CB3XOKM2GPZTXYDKKR7BDRCBEYP2B5N42IQNGL77XX66Y6FZWMJMBNX6)

---

## 5. Sample Transaction
- **Action:** Vote casted for Option 1 ("Rust")
- **Transaction Hash:** `62397d1029b3d95f74848101582b0f471a9c80cd8b0c07c5e4aac225edf0a7bc`
- **Explorer Link:** [Stellar Expert - Transaction 6239...a7bc](https://stellar.expert/explorer/testnet/tx/62397d1029b3d95f74848101582b0f471a9c80cd8b0c07c5e4aac225edf0a7bc)

---

## 6. Prerequisites
- **Node.js:** v18.0.0 or higher
- **Rust & Soroban CLI:** Installed locally if compiling or deploying contracts
- **Wallet Extensions:** Freighter, xBull, or Albedo installed in your browser and set to **Testnet**
- **Testnet Account funding:** Testnet XLM obtained from [Stellar Friendbot](https://friendbot.stellar.org)

---

## 7. Setup Instructions (Local Run)
1. **Clone the repository:**
   ```bash
   git clone https://github.com/KushwahaSonu76/Live-Poll-2.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd Live-Poll-2
   ```
3. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
4. **(Optional) Build & Deploy the contract locally:**
   ```bash
   cd contracts/live_poll
   # Build Wasm target
   cargo build --target wasm32-unknown-unknown --release
   # Deploy to testnet (requires configured source account)
   stellar contract deploy --wasm target/wasm32-unknown-unknown/release/live_poll.wasm --source alice --network testnet
   ```
5. **Set the Contract ID:**
   Configure `contractId` in `src/lib/soroban.ts` with your deployed Contract ID.
6. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```
7. **Access the application:**
   Open [http://localhost:5173/](http://localhost:5173/) or the port specified in your terminal.

---

## 8. How to Use
1. Open the dApp and click **"Connect Wallet"**.
2. Select your preferred wallet extension (Freighter, xBull, or Albedo) from the popup modal.
3. Choose your favorite language from the grid options (Rust, TypeScript, Go, Python).
4. Click **"Submit Vote"**.
5. Keep your eyes on the **Transaction Status** component to view the step-by-step progress (*Simulating* ➔ *Signing* ➔ *Submitting* ➔ *Pending* ➔ *Success*).
6. View the refreshed results immediately on success and check the Stellar.expert link.

---

## 9. Error Handling Section
Our dApp handles three distinct error classes with unique user feedback:
- **Wallet Not Found / Installed:**
  - *Trigger:* The browser does not have the extension installed or fails to initialize it.
  - *Feedback:* App displays `"Wallet not found / not installed or connection failed"` in the red banner.
- **Transaction Rejected by User:**
  - *Trigger:* The user rejects/cancels the signing popup inside their wallet extension.
  - *Feedback:* App displays `"Transaction was rejected in the wallet."`
- **Contract / Insufficient Balance Error:**
  - *Trigger:* The account has no testnet XLM to cover transaction fees, or the Soroban RPC contract simulation fails.
  - *Feedback:* App displays `"Contract execution error: [SDK Error details]"` or requests funding of the account.

---

## 10. Live Demo Link (Optional)
*(Insert live Netlify or Vercel link here if deployed)*

---

## 11. Screenshots

### Wallet Options Available
![wallet-options](./screenshots/wallet-options.png)

### Contract Interaction / Transaction Status
![tx-status](./screenshots/tx-status.png)

### Real-Time Results
![results](./screenshots/results.png)

---

## 12. Commit History Note
This repository contains a descriptive Git commit history demonstrating iterative development milestones. The main development commits include:
- `Add smart contract, build setup and wallet integrations` - Initialized the Soroban smart contract, set up dependencies, config files, and the Wallet Kit.
- `Implement vote submission and real-time result polling` - Wrote the React frontend integration, transaction pipeline, and real-time sync.
- `Add project documentation README.md` - Documented setup instructions.
- `Update SEO metadata and page title in index.html` - Enhanced metadata.
- `Add manual refresh button and loading indicator for poll results` - Implemented on-demand result sync.

---

## 13. Folder Structure
```
.
├── contracts/
│   └── live_poll/
│       ├── Cargo.toml
│       └── src/
│           └── lib.rs
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   ├── components/
│   │   ├── ErrorBanner.tsx
│   │   ├── PollCard.tsx
│   │   ├── ResultsDisplay.tsx
│   │   ├── TxStatusTracker.tsx
│   │   └── WalletSelector.tsx
│   └── lib/
│       ├── soroban.ts
│       └── wallet.ts
├── deploy-notes.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

---

## 14. Known Limitations / Notes
- **Network Constraints:** Strictly limited to the Stellar Testnet. Mainnet transactions are not supported.
- **Transaction Fees:** The voting transaction requires active Testnet XLM to pay network fees.
- **Sync Method:** State changes from other users are synchronized via interval-based polling (every 10 seconds).
