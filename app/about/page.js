import { siteTitle } from "../layout";
import Link from "next/link";
import style from "../../assets/scss/components/skills.module.scss";
import BlockIcon from "../../components/icon";
import BlockRow from "../../components/row";
import BlockColumn from "../../components/column";
import BlockResumee from "../../components/resumee";
import BlockImage from "../../components/image";
import { experience, education, skills } from "../../data/resumee";

import portrait from "../../assets/img/about/portrait-astrid-boberg.jpg";

const pageTitle = 'About me';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
  description: 'I was born in April 1998 (currently 26 🎉) and I have 6 years experience in web design and coding after working in design agencies in Harstad, Tromsø and Oslo. In August 2021, I started doing a five year integrated master in design at The Oslo School of Architecture and Design.'
}

export default function Resumee() {
  return (
    <>
    <BlockRow align="center" height="50vh">
    <BlockColumn>
    <h2>About me</h2>
    <p>I was born in April 1998 (currently 26 <BlockIcon>🎉</BlockIcon>) and I have 6 years experience with digital design and coding after working for design agencies in Harstad, Tromsø and Oslo. In August 2021, I started doing a five year integrated master in design at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>.</p>
    </BlockColumn>
    <BlockColumn>
    <BlockImage url={portrait} alt="Astrid Mathilde Boberg" width="600" height="600" priority />
    </BlockColumn>
    </BlockRow>
    
    <h2>Work experience <BlockIcon>👩🏻‍💻</BlockIcon></h2>
    {experience.map((experience) => (
      <BlockResumee key={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h2>Education <BlockIcon>👩🏻‍🎓</BlockIcon></h2>
    {education.map((education) => (
      <BlockResumee id={education.id} position={education.grade} locationUrl={education.location.url} locationName={education.location.name} description={education.description} time={education.time} />
    ))}
    
    <div className={style.container}>
    <BlockRow>
    {skills.map((skills) => (
      <BlockColumn key={skills.title}>
      <h2>{skills.title}</h2>
      <ul>
      {skills.keywords.map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
      </ul>
      </BlockColumn>
    ))}
    </BlockRow>
    </div>
    
    <h2>Contact 🤝</h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also write to me on <a href="https://instagram.com/astridmathildeb" target="_blank" rel="nofollow noreferrer">Instagram</a> or add me on <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">LinkedIn</a>!</p>
    
    <h2>Further discovery 🔎</h2>
    <p>You can see what I have done to reduce <Link href="colophon">this site’s carbon emissions</Link>, look at <Link href="/projects/kahos">one of my projects</Link>, or <a href="https://github.com/astridmathilde/astridmathilde/" target="_blank" rel="nofollow noreferrer">view the code on Github</a>.</p>              
    </>
  )
}