import '../styles/globals.scss';
import { AppProps } from 'next/app';

/**
 * app entrypoint
 *
 * @param {(React.ComponentClass<{}> & {getInitialProps?(context: NextPageContext): (Promise<any> | any)}) | (React.FunctionComponent<{}> & {getInitialProps?(context: NextPageContext): (Promise<any> | any)})} Component
 * @param {any} pageProps
 * @returns {JSX.Element}
 * @constructor
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
