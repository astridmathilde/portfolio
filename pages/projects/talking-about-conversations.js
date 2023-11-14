import Head from 'next/head';
import Layout, { siteTitle } from '../../src/components/layout/layout';
import BlockImage from '../../src/components/image/image';

export default function project() {
  const projectTitle = 'Talking about conversations';
  
  return (
    <Layout project>
    <Head>
    <title>{projectTitle} – {siteTitle}</title>
    </Head>
    <h2>{projectTitle}</h2>
    <BlockImage url="/images/projects/samtaler/thumbnail.jpg" width="2048" height="1536" />
    </Layout>
    );
  }