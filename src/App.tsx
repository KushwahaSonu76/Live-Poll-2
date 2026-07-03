import React, { useState } from 'react';
import { WalletSelector } from './components/WalletSelector';
import { PollCard } from './components/PollCard';
import { ErrorBanner } from './components/ErrorBanner';
import { Vote } from 'lucide-react';

function App() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/30">
              <Vote className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
                Stellar Poll
              </h1>
              <p className="text-indigo-400 font-medium text-xs uppercase tracking-wider">Testnet Edition • Connected</p>
            </div>
          </div>
          <WalletSelector publicKey={publicKey} setPublicKey={setPublicKey} setError={setError} />
        </header>

        <main>
          <ErrorBanner error={error} />
          <PollCard publicKey={publicKey} setError={setError} />
        </main>
        
        <footer className="mt-20 text-center text-sm text-gray-500">
          Built on Soroban • Stellar Testnet
        </footer>
      </div>
    </div>
  );
}

export default App;
