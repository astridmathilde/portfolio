import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../src/components/layout/layout';
import BlockImage from '../src/components/image/image';

export default function projects() {
  const projects = [
     {
      title: 'Talking about conversations',
      slug: 'talking-about-conversations',
      url: 'projects/talking-about-conversations',
      img_url: '/images/projects/samtaler/thumbnail.jpg',
      img_width: 2048,
      img_height: 1536
    },
    {
      title: 'Bridge Alert Management System',
      slug: 'bams',
      url: 'projects/bams',
      img_url: '/images/projects/bams/thumbnail.jpg',
      img_width: 2048,
      img_height: 1536
    },
    {
      title: 'Gamle Munch',
      slug: 'gamle-munch',
      url: 'projects/gamle-munch',
      img_url: '/images/projects/gamle-munch/thumbnail.jpg',
      img_width: 2048,
      img_height: 1536
    },
    {
      title: 'Experiments in digital aesthetics',
      slug: 'sense',
      url: 'projects/experiments-in-digital-aesthetics',
      img_url: '/images/projects/sense/thumbnail.jpg',
      img_width: 2048,
      img_height: 1331
    },
    {
      title: 'The student organization KAHOS',
      slug: 'kahos',
      url: 'projects/kahos',
      img_url: '/images/projects/kahos/thumbnail.jpg',
      img_width: 1536,
      img_height: 2048
    }
  ];
  
  return (
    <Layout>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    <h2>Projects</h2>
    {projects.map((project) => (
      <Link key={project['slug']} href={project['url']}>
      <h3>{project['title']}</h3>
      <BlockImage url={project['img_url']} alt={project['title']} width={project['img_width']} height={project['img_height']} />
      </Link>
      ))}
      </Layout>
      );
    }