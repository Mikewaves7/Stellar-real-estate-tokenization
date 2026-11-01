import { isConnected, getAddress, getNetwork } from '@stellar/freighter-api';
import type { WalletState } from '../types';

/** Connects to the Freighter browser wallet. No transaction is submitted here. */
export async function connectFreighter(): Promise<WalletState> {
  const connection = await isConnected();
  if (!connection.isConnected) throw new Error('Freighter wallet was not detected. Install or unlock Freighter and try again.');
  const address = await getAddress();
  if (!address.address) throw new Error('Wallet access was not granted.');
  const network = await getNetwork();
  return { publicKey: address.address, network: network.network }; 
}

export function shortenAddress(address: string): string {
  return address ? `${address.slice(0, 6)}…${address.slice(-5)}` : '';
}

export const STELLAR_EXPLORER = 'https://stellar.expert/explorer/public';