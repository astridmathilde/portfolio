import Link from "next/link";
import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import style from "../../../assets/scss/project.module.scss";
import projectNav from "../../../assets/scss/components/project-navigation.module.scss";
import BlockImage from "../../../components/image";
import BlockImageRow from "../../../components/image_row";
import BlockProjects from "../../../components/projects";
import BlockRow from "../../../components/row";
import BlockColumn from "../../../components/column";

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

const projectID = projects[1];

export default function mensn() {
  return (
    <>
    <article className={style.project}>
    <header className={style.header}>
    <h2>{projectID.title}</h2>
    </header>
    
    <BlockImage class={style.thumbnail} url={projectID.thumbnail} alt={projectID.title} width="1378" height="1008"  />
    
    <div className={style.container}>
    
    <div className={style.meta}>
    <ul>
    <li key="project_type"><span className={style.label}>Type of project:</span> {projectID.type}</li>
    <li key="project_location"><span className={style.label}>Location:</span> <a href={projectID.location.url}>{projectID.location.name}</a></li>
    <li key="project_time_frame"><span className={style.label}>Time frame:</span> {projectID.time}</li>
    </ul>
    </div>
    
    <div className={style.content}>
    <p>En digital tjeneste fra Helsedirektoratet som skal hjelpe unge jenter med å forstå mensen bedre, og gi innsikt i hvordan de ulike delene av syklusen påvirker kroppen og hodet.</p>
    
    <h3>Problem</h3>
    <p>Mange jenter bruker egne apper for å logge menssyklus og forstå egen kropp, men problemet med disse appene er at dataen ofte blir lekket eller solgt videre. I tillegg er seksualundervisningen på skolen mangelfull, og mange jenter kjenner ikke kroppen sin godt nok.</p>
    
    <BlockImage url={img_innsikt} alt="Skjermbilder av artikler om mensapper og personvern" />
    
    <h3>Prosess</h3>
    <p>Konseptet ble til i løpet av en utforskende prosjekmodul der vi arbeidet med datavisualiseringer basert på egne datasett. Jeg valgte å ta utgangspunkt i min egen menstruasjonssyklus, og kombinerte denne dataen med offentlige tilgjengelige data for månefaser, for å undersøke om de fantes sammenhenger. Det mest interessante var likevel da jeg loggførte mine egne "cravings" over flere dager, og oppdaget at jeg nesten alltid fikk lyst på sukker mellom eggløsning og menstruasjon.</p>
    
    <p>Da jeg leste meg opp på de ulike fasene i menstruasjonssyklusene, forstod jeg at dette var helt vanlig. I lutelfasen, ukene mellom eggløsning og menstruasjon, trenger kroppen nemlig mer energi enn vanlig, og om du ikke spiser nok i løpet av dagen, er det helt naturlig at kroppen får lyst på raske karbohydrater.</p>
    
    <p>Ved nærmere undersøkelser, innså jeg at dette var noe mange ikke visste om, og hvertfall ikke noe man lærte om på skolen.</p>
    
    <BlockImage url={img_datasett} width="1093" alt="Skjermbilder av eksperimentering med datasett" caption="Sammenhengen mellom månefaser, cravings og egen menssyklus."/>
    
    <BlockImage url={img_prosess_1}width="1093"  alt="Datavisualisering som viser sammenhengen mellom månefaser og egen menssyklus." caption="Datavisualisering som viser sammenhengen mellom månefaser og egen menssyklus."/>
    
    <p>Da jeg skulle designe løsningen, startet jeg med å bruke <a href="https://kjernemodellen.no/" target="_blank" rel="external">Kjernemodellen</a>, for å avdekke de viktigste funksjonene. </p>
    
    <BlockImage url={img_prosess_2} width="1093" alt="Arbeid med Kjernemodellen" caption="Kjernemodellen" />
    
    <p>Basert på <a href="https://kjernemodellen.no/" target="_blank" rel="external">Kjernemodellen</a>, lagde jeg noen kjappe flytdiagrammer over innholdsstrukten.</p>
    
    <BlockImage url={img_prosess_3} width="1093" alt="Flytdiagrammer" caption="Flytdiagram" />
    
    <p>Deretter tegnet jeg wireframes på papir og lekte meg med ulike oppsett. Når flyten og oppsettet var klart, satte jeg opp alt i Figma.</p>
    
    <BlockImage url={img_prosess_4} width="1093" alt="Wireframes på papir" caption="Wireframes på papir"/>
    
    <h3 id="result">Løsning</h3>
    <p>Ved å lage en ny digital tjeneste om mensen i samarbeid med Helsedirektoratet, vil unge jenter få økt kunnskap om egen syklus, samtidig som dataen deres holdes trygg.</p>
    
    <BlockImage url={img_proto_1} width="1093" alt="Prototype" />
    
    <BlockImage url={img_proto_2} width="1093" alt="Prototype" />
    
    <p>Appen "Mensn" lar deg loggføre mensen og få oversikt over hvor du er i syklusen akkurat nå, med informasjon om hvordan dette påvirker kroppen og hodet. Ved daglige innsjekk får du også mulighet til å loggføre symptomer gjennom hele syklusen, og dermed få økt forståelse for hvordan syklusen din påvirker deg.</p>
    
    <BlockImageRow>
    <BlockImage url={img_resultat_1} alt="Resultat" />
    <BlockImage url={img_resultat_2} alt="Resultat" />
    </BlockImageRow>
    
    </div>
    </div>
    </article>
    
    <h2>Keep looking 👀</h2>
    <div className={projectNav.container}>
    {projects.filter(project => project.id != '1').map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} />
    ))}
    </div>
    </>
  )
}