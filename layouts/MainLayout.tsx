import Head from 'next/head';
import { FC } from 'react';

interface Props {
    title: string
}

const MainLayout: FC<Props> = ({title, children}) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        { children }
    </>
);

export default MainLayout;