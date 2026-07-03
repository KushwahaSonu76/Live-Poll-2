import * as StellarSdk from '@stellar/stellar-sdk';

const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
export const networkPassphrase = "Test SDF Network ; September 2015";

export async function buildPaymentTransaction(
  senderPublicKey: string,
  recipientPublicKey: string,
  amount: string
): Promise<StellarSdk.Transaction> {
  const account = await server.loadAccount(senderPublicKey);

  const tx = new StellarSdk.TransactionBuilder(account, {
    fee: "100",
    networkPassphrase,
  })
    .addOperation(
      StellarSdk.Operation.payment({
        destination: recipientPublicKey,
        asset: StellarSdk.Asset.native(),
        amount: amount,
      })
    )
    .setTimeout(30)
    .build();

  return tx;
}

export async function submitPaymentTransaction(signedXdr: string): Promise<any> {
  const transaction = new StellarSdk.Transaction(signedXdr, networkPassphrase);
  return server.submitTransaction(transaction);
}
