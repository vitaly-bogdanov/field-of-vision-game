import Head from 'next/head';
import { FC } from 'react';
import styled from '@emotion/styled';

const Logo = styled.img`
    position: absolute;
    top: 85px;
    right: 55px;
    width: 338px;
    height: 135px;
`;

interface Props {
    title: string
};

const MainLayout: FC<Props> = ({title, children}) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Logo src="/images/sirius-future.png" alt="Sirius Future Logo" />
        { children }
    </>
);

export default MainLayout;