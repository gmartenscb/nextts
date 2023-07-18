import React from 'react';
import Head from 'next/head';
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Header</title>
                <link rel="icon" href="/nextjs-ssr/header/public/favicon.ico"/>
            </Head>

            <Header />
        </div>
    );
};

Home.getInitialProps = async () => {
    return {};
};

export default Home;
