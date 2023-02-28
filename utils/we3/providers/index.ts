import walletlink, { WalletLink } from "walletlink";

const infuraId = 'a48171c7d7244fdeb682877c350f1240';

const providerOptions = {
    "custom-metamesk": {
        display: {
          logo: "/metamesk.png",
          name: "Metamesk Chain Wallet",
          description: "Connect to your Metamesk Chain Wallet"
        },
        package: true,
        options: {
            apiKey: infuraId
          },
        connector: async () => {
          let provider = null;
          if (typeof window.ethereum !== 'undefined') {
            provider = window.ethereum;
            await provider.request({ method: 'eth_requestAccounts' })
          } else {
            alert("Possua uma carteira por meio da metamesk, binance chain ou coinbase");
          }
          return provider;
        }
      },
    "custom-binancechainwallet": {
        display: {
          logo: "/binance-chain.png",
          name: "Binance Chain Wallet",
          description: "Connect to your Binance Chain Wallet"
        },
        package: true,
        options: {
            apiKey: infuraId
          },
        connector: async () => {
          let provider = null;
          if (typeof window.BinanceChain !== 'undefined') {
            provider = window.BinanceChain;
            await provider.request({ method: 'eth_requestAccounts' })
          } else {
            alert("Possua uma carteira por meio da metamesk, binance chain ou coinbase");
          }
          return provider;
        }
      },
      'custom-coinbase': {
        display: {
          logo: '/coinbase.png', 
          name: 'Coinbase Chain Wallet',
          description: 'Connect to your Coinbase Chain Wallet',
        },
        options: {
          appName: 'app', 
          chainId: infuraId,
        },
        package: walletlink,
        connector: async (_ : any, options : any) => {

          const { appName, chainId } = options;
          const walletLink = new WalletLink({
            appName
          });

          if (walletLink !== null) {
            let provider = walletLink.makeWeb3Provider(chainId);
            await provider.enable();
            return provider;
          } else {
            alert("Possua uma carteira por meio da metamesk, binance chain ou coinbase");
          }
        },
    }
  };

  export { providerOptions }