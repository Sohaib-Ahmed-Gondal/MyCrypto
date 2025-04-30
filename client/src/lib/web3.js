import WalletConnect from "@walletconnect/client";
export const connectWallet = async () => {
  const connector = new WalletConnect({ bridge: "https://bridge.walletconnect.org" });
  await connector.createSession();
  return connector.accounts[0];
};