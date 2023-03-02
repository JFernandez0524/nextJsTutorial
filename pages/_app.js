// `pages/_app.js`
import '../pages/styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
