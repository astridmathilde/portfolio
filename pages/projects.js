import Head from 'next/head';
import Layout, { siteTitle } from '../src/components/layout/layout';

export default function projects() {
  const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];

  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <h2>Projects</h2>
    <ul>
      {projects.map((project) => (
        <li key={project}>{project}</li>
        ))}
      </ul>
      
    </Layout>
    );
  }