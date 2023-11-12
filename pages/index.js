import Head from 'next/head';
import Layout, { siteTitle } from '../src/components/layout/layout';

export default function HomePage() {
  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <p>Heia! I am from Northern Norway and I have always been passionate about design and coding. Currently I am a third year design student at The Oslo School of Architecture and Design while working with OpenBridge, an open-source design system for better and safer user interfaces on ships.</p>
    </Layout>
    );
  }