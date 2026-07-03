import React from 'react';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

export type TxState = "idle" | "simulating" | "signing" | "submitting" | "pending" | "success" | "error";

interface Props {
  state: TxState;
  hash: string | null;
}

export function TxStatusTracker({ state, hash }: Props) {
  if (state === 'idle') return null;

  return (
    <div className="bg-gray-800/80 border border-gray-700 p-6 rounded-xl shadow-lg mt-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4">
      <h3 className="text-lg font-semibold text-white mb-4">Transaction Status</h3>
      
      <div className="flex flex-col gap-4">
        <StatusItem active={state === 'simulating'} done={['signing', 'submitting', 'pending', 'success', 'error'].includes(state)} label="Simulating transaction..." />
        <StatusItem active={state === 'signing'} done={['submitting', 'pending', 'success', 'error'].includes(state)} label="Awaiting wallet signature..." />
        <StatusItem active={state === 'submitting'} done={['pending', 'success', 'error'].includes(state)} label="Submitting to network..." />
        <StatusItem active={state === 'pending'} done={['success', 'error'].includes(state)} label="Polling transaction status..." />
        
        {state === 'success' && (
          <div className="flex items-center gap-3 text-green-400 mt-2 p-3 bg-green-500/10 rounded-lg">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold">Success!</span>
              {hash && (
                <a 
                  href={`https://stellar.expert/explorer/testnet/tx/${hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-green-300 transition-colors break-all"
                >
                  View on Stellar Expert
                </a>
              )}
            </div>
          </div>
        )}
        
        {state === 'error' && (
          <div className="flex items-center gap-3 text-red-400 mt-2 p-3 bg-red-500/10 rounded-lg">
            <XCircle className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold">Transaction Failed</span>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusItem({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  let color = "text-gray-500";
  let Icon = null;
  
  if (done) {
    color = "text-green-500";
    Icon = <CheckCircle2 className="w-5 h-5" />;
  } else if (active) {
    color = "text-indigo-400";
    Icon = <Loader2 className="w-5 h-5 animate-spin" />;
  } else {
    Icon = <div className="w-5 h-5 rounded-full border-2 border-gray-600" />;
  }

  return (
    <div className={`flex items-center gap-3 transition-colors duration-300 ${color}`}>
      {Icon}
      <span className={active ? "font-medium" : ""}>{label}</span>
    </div>
  );
}
