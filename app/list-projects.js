'use client';

import Link from "next/link";
import BlockImage from "../components/image/image";

export default function ListProjects( {projects} ) {
  return (
    <>
    {projects.map((project) => (
      <Link key={project['slug']} href={project['url']}>
      <h3>{project['title']}</h3>
      <BlockImage url={project['img_url']} alt={project['title']} width={project['img_width']} height={project['img_height']} />
      </Link>
      ))}
      </>
    )
  }