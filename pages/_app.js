import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { createWrapper } from "next-redux-wrapper";
// import { Provider } from "react-redux";
// import store from "../redux/store";
// import { wrapper } from "";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
// export default App;
