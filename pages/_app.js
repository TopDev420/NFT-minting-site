import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/common/Layout";
import theme from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
