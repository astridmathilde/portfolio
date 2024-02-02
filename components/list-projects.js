import { promises as fs } from 'fs';
import Link from "next/link";
import BlockImage from "./image";
import listProjects from "../assets/scss/components/list-projects.module.scss";

/* Images */
import sense from "../assets/img/projects/sense/thumbnail.jpg";
import gamleMunch from "../assets/img/projects/gamle-munch/thumbnail.jpg";
import bams from "../assets/img/projects/bams/thumbnail.jpg";
import mensn from "../assets/img/projects/mensn/thumbnail.png";

/* Map images */
const [projectImage] = [
  {
    "sense": sense, 
    "gamlemunch": gamleMunch,
    "bams": bams,
    "mensn": mensn 
  }
];

/* Display content */
export default async function ListProjects() {
  const file = await fs.readFile(process.cwd() + '/projects.json', 'utf8');
  const projects = JSON.parse(file);

  return (
    <>
    <div classname={listProjects.projects}>
    {projects.map((project) => (
      <Link className={listProjects.project} key={project.slug} href={"/projects/" + project.slug}>
      <h3 className={listProjects.title}>{project.title}</h3>
      <BlockImage className={listProjects.image} url={projectImage[project.slug]} alt={project.title} />
      </Link>
      ))}
      </div>
      </>
      )
    }
