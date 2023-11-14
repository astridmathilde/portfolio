import Head from 'next/head';
import Layout, { siteTitle } from '../src/components/layout/layout';

export default function about() {
  const pageTitle = 'Ups';
  
  return (
    <Layout about>
    <Head>
    <title>{pageTitle} – {siteTitle}</title>
    </Head>
    <h2>{pageTitle}</h2>
    <p>Something bad happened</p>
    </Layout>
    );
  }