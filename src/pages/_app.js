import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
