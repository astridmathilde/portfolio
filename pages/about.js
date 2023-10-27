import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';

export default function about() {
  const pageTitle = 'About me';

  return (
    <Layout about>
    <Head>
      <title>{pageTitle} – {siteTitle}</title>
    </Head>
    <h2>{pageTitle}</h2>
    <Image src="/images/astrid.jpg" alt="Astrid" height={743} width={748} />
    </Layout>
    );
  }