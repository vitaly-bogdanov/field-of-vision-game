import '../styles/globals.scss'
import { FC } from 'react';
import { AppProps } from 'next/app';
import wrapper from '../redux/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
