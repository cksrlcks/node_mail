import Head from 'next/head';
import AppLayout from '../components/Layout';
import '../css/reset.css';
import '../css/global.scss';
const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>node.js email</title>
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    );
};

export default App;
