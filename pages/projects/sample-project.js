import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

export default function sampleProject() {
  const pageTitle = 'Sample project'

  return (
    <Layout>
    <Head>
      <title>{pageTitle} – {siteTitle}</title>
    </Head>
    <h2>{pageTitle}</h2>
    <p>Content here</p>
    </Layout>
    );
  }