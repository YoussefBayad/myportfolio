import Theme from '../styles/theme';
import 'rc-drawer/assets/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
