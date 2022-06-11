import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          transition={Flip}
        />
        <Component {...pageProps} />
      </Provider>
    </ThirdwebProvider>
  );
}

export default MyApp;
