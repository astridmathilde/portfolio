import Link from "next/link";
import localFont from 'next/font/local';
import BlockImage from "./image";
import style from "../assets/scss/components/projects.module.scss";
import utils from "../assets/scss/utils.module.scss";

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})

export default function BlockProjects(project) {

  return (
    <>
      <Link className={style.project} key={project.id} href={"/work/" + project.slug}>
      <article id={project.id}>
      <header>
      <h3 className={style.title + " " + inter.className}>{project.title}</h3>
      <ul className={style.meta + " " + inter.className}>
      <li><span className={utils.screen_reader_text}>Type of project:</span> {project.category}</li>
      </ul>
      </header>
      <BlockImage className={style.image} url={project.thumbnail} alt={project.title} priority={project.priority} sizes={project.sizes} />
      </article>
      </Link>  
      </>
      )
    }