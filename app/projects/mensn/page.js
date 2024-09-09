import Link from "next/link";
import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import BlockImage from "../../../components/image";
import BlockImageRow from "../../../components/image_row";

import img_innsikt from "../../../assets/img/projects/mensn/innsikt.jpg"
import img_datasett from "../../../assets/img/projects/mensn/datasett.png"
import img_prosess_1 from "../../../assets/img/projects/mensn/prosess-1.jpg"
import img_prosess_2 from "../../../assets/img/projects/mensn/prosess-2.jpg"
import img_prosess_3 from "../../../assets/img/projects/mensn/prosess-3.jpg"
import img_prosess_4 from "../../../assets/img/projects/mensn/prosess-4.jpg"
import img_resultat_1 from "../../../assets/img/projects/mensn/resultat-1.jpg"
import img_resultat_2 from "../../../assets/img/projects/mensn/resultat-2.jpg"
import img_proto_1 from "../../../assets/img/projects/mensn/prototype-1.jpg"
import img_proto_2 from "../../../assets/img/projects/mensn/prototype-2.jpg"

const pageTitle = 'Helping young girls understand their own menstrual cycle';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle
}

export default function mensn() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projects[1].title}</h2>
    </header>
    
    <BlockImage class={style.thumbnail} url={projects[1].thumbnail} alt={projects[1].title} />
    
    <div className={style.container}>

    <div className={style.meta}>
    <ul>
    <li key="project_type"><span className={style.label}>Type of project:</span> {projects[1].type}</li>
    <li key="project_location"><span className={style.label}>Location:</span> <a href={projects[1].location.url}>{projects[1].location.name}</a></li>
    <li key="project_time_frame"><span className={style.label}>Time frame:</span> {projects[1].time}</li>
    </ul>
    </div>
    
    <div className={style.content}>
    <BlockImage url={img_innsikt} alt="Skjermbilder av artikler om mensapper og personvern" />

    <BlockImage url={img_datasett} alt="Skjermbilder av eksperimentering med datasett" />
    
    <BlockImage url={img_prosess_1} alt="Datavisualisering som viser sammenhengen mellom månefaser og egen menssyklus." />
  
    <BlockImage url={img_prosess_2} alt="Arbeid med Kjernemodellen" />
    
    <BlockImage url={img_prosess_3} alt="Flytdiagrammer" />

    <BlockImage url={img_prosess_4} alt="Wireframes på papir" />

    <BlockImage url={img_proto_1} alt="Prototype" />
    
    <BlockImage url={img_proto_2} alt="Prototype" />

    <BlockImageRow>
    <BlockImage url={img_resultat_1} alt="Resultat" />
    <BlockImage url={img_resultat_2} alt="Resultat" />
    </BlockImageRow>

    </div>
    </div>
    </article>
    </>
    )
  }