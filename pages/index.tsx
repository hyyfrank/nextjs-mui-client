// index.tsx
import { FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <h1>Home Page</h1>
      </body>
    </div>
  );
};

export default Home;
