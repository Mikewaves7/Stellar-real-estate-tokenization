# Stellar Estate

A TypeScript + React real-estate tokenization marketplace concept built around the Stellar network.

## Stack
- React 18, TypeScript, Vite
- Freighter browser wallet integration via `@stellar/freighter-api`
- Stellar SDK dependency for future asset issuance and transaction workflows
- Lucide icons

## Run locally
```bash
npm install
npm run dev
``

## Current features
- Responsive property marketplace with search and category filtering
- Property detail and fractional investment preview modal
- Freighter wallet connection (public address + network read only)
- Portfolio placeholder and educational flow
- Sample property listings are demo data and clearly presented as opportunities, not verified live assets

## Important implementation notes
This repository currently contains a frontend prototype. It does **not** issue Stellar assets, create trustlines, deploy Soroban contracts, transfer funds, distribute rent, or represent legal title. The investment modal is a non-transactional preview. Before production, implement issuer/asset configuration, KYC/AML and jurisdiction controls, audited issuance and transfer restrictions, legal ownership/SPV documentation, custody, investor disclosures, and verified rental distribution logic. Never treat the displayed sample yields, values, or properties as investment facts.

## Network
Freighter connection reads the wallet address and selected network. No signing or transaction submission is performed. Configure and test a dedicated Stellar testnet issuer and contracts before enabling any write actions.
