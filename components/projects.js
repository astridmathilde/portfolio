import Link from "next/link";
import localFont from 'next/font/local';
import BlockImage from "./image";
import utils from "../assets/scss/utils.module.scss";
import style from "../assets/scss/components/projects.module.scss";
import { projects } from "../data/projects";

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})

export default function BlockProjects() {
  return (
    <>
    <div className={style.projects}>
    {projects.map((project) => (
      <Link className={style.project} key={project.id} href={"/projects/" + project.slug}>
      <article id={project.id}>
      <header>
      <h3 className={utils.screen_reader_text}>{project.title}</h3>
      <ul className={style.meta + " " + inter.className}>
      <li className={utils.screen_reader_text}>Type of project: {project.type}</li>
      <li className={utils.screen_reader_text}>Time: {project.time}</li>
      </ul>
      </header>
      <BlockImage className={style.image} url={project.thumbnail} alt={project.title} />
      </article>
      </Link>  
      ))}
      </div>
      </>
      )
    }