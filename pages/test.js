import { createClient } from 'next-sanity';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../src/components/layout/layout';
import BlockImage from '../src/components/image/image';

const client = createClient({
  projectId: "qrkazupd",
  dataset: "production",
  apiVersion: "2023-11-18",
  useCdn: false
});

export default function test({ projects} ) {
  return (
    <Layout>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    <h2>Projects</h2>
    {projects.map((project) => (
      <Link key={project['slug']} href="#">
      <header>
      <h3>{project['title']}</h3>
      <ul>
        <li>Type of project: {project['type']}</li>
      </ul>
      </header>

      </Link>
      ))}
      </Layout>
      );
    }
    
    export async function getStaticProps() {
      const projects = await client.fetch(`*[_type == "project"]`);
      
      return {
        props: {
          projects
        }
      };
    }