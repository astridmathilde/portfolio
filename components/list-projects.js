import Link from "next/link";
import BlockImage from "./image";
import listProjects from "../assets/scss/components/list-projects.module.scss";

/* Images */
import sense from "../assets/img/projects/sense/thumbnail.jpg";
import gamleMunch from "../assets/img/projects/gamle-munch/thumbnail.jpg";
import bams from "../assets/img/projects/bams/thumbnail.jpg";
import mensn from "../assets/img/projects/mensn/thumbnail.jpg";

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
export default function ListProjects( {projects} ) {
  return (
    <>
    {projects.map((project) => (
      <Link className={listProjects.project} key={project.slug} href={project.url}>
      <h3 className={listProjects.title}>{project.title}</h3>
      <BlockImage className={listProjects.image} url={projectImage[project.slug]} alt={project.title} />
      </Link>
      ))}
      </>
      )
    }
