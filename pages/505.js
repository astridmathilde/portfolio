import Head from 'next/head';
import Layout, { siteTitle } from '../src/components/layout/layout';

export default function about() {
  const pageTitle = 'Gone to hell';
  
  return (
    <Layout about>
    <Head>
    <title>{pageTitle} – {siteTitle}</title>
    </Head>
    <h2>{pageTitle}</h2>
    <p>The server is down.</p>
    </Layout>
    );
  }