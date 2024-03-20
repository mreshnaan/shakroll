import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner"
import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { bsc, bscTestnet} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 0. Setup queryClient
const queryClient = new QueryClient();
const projectId = "b9334785153aecb01ed451f88e069525";

const metadata = {
  name: "Sharkroll",
  description: "Sharkroll",
  url: import.meta.env.VITE_DOMAIN, // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [bsc, bscTestnet] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

// const { chains, publicClient } = configureChains(
//   [mainnet, polygon, optimism, arbitrum, base, zora],
//   [
//     alchemyProvider({ apiKey: "qeFAdhHOSMKQR2QAbL7cFVyUcHyP8X4K" }),
//     publicProvider(),
//   ]
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
