import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import { SignerProvider} from "state/signer";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


const SUBGRAPH_URL= process.env.NEXT_PUBLIC_SUGRAPH_URL as string

const client = new ApolloClient({cache: new InMemoryCache(), uri: SUBGRAPH_URL})
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SignerProvider>
       <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
       </ApolloProvider>
    </SignerProvider>
    
  );
};

export default MyApp;
