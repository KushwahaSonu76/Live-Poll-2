import { Loader2, CheckCircle2, XCircle, ArrowUpRight } from 'lucide-react';

export type TxState = "idle" | "recording" | "simulating" | "signing" | "submitting" | "sending_xlm" | "confirming" | "success" | "error";

interface Props {
  state: TxState;
  hash: string | null;
}

export function TxStatusTracker({ state, hash }: Props) {
  if (state === 'idle') return null;

  return (
    <div className="mt-6 p-4 rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {state === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : state === 'error' ? (
            <XCircle className="w-5 h-5 text-red-400" />
          ) : (
            <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
          )}
          <span className="font-medium text-gray-200">
            {state === 'recording' && 'Preparing contract record...'}
            {state === 'simulating' && 'Simulating transaction...'}
            {state === 'signing' && 'Awaiting signature in wallet...'}
            {state === 'submitting' && 'Submitting to Testnet...'}
            {state === 'sending_xlm' && 'Sending XLM to recipient...'}
            {state === 'confirming' && 'Updating contract status...'}
            {state === 'success' && 'Payment successful!'}
            {state === 'error' && 'Transaction failed'}
          </span>
        </div>
        
        {hash && (
          <a
            href={`https://stellar.expert/explorer/testnet/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View Explorer
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
