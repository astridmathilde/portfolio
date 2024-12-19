import Link from "next/link";
import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockIcon from "../components/icon";
import BlockResumee from "../components/resumee";
import BlockProjects from "../components/projects";
import utils from "../assets/scss/utils.module.scss";
import style from "../assets/scss/home.module.scss";
import { projects } from "../data/projects";
import { experience } from "../data/resumee";

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no'),
  title: siteTitle + " – Designer & developer",
  description: 'Heia! I am a designer from Northern Norway with a background in web development and a passion for sustainability, currently doing a masters degree in design at The Oslo School of Architecture and Design while being in charge of the product development at Gemz.'
}

export default function Index() {
  return (
    <>
    <BlockDisplay>Heia! <BlockIcon>👋</BlockIcon> I am a designer and developer from Northern Norway <BlockIcon>🏔️</BlockIcon> with a passion for sustainability. Currently I am doing a master's degree in design at <a href="https://aho.no/en" target="_blank" rel="external">The Oslo School of Architecture and Design</a>, while managing the product development at <a href="https://www.gemz.fashion/" target="_blank" rel="external">Gemz</a> 💃</BlockDisplay>
    
    
    <h2 className={utils.screen_reader_text}>This is some of my projects 👇</h2>
    
    <div className={style.projects}>
    {projects.toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2>Recent work experience <BlockIcon>👩🏻‍💻</BlockIcon></h2>
    {experience.slice(0, 3).map((experience) => (
      <BlockResumee id={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h2>Life lately <BlockIcon>✨</BlockIcon></h2>
    <p>Moved to Oslo four years ago for my studies, about to finish my third year at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a> after having a break. I enjoy going to concerts, doing yoga and spending time with horses. Also, I recently joined the startup company <a href="https://www.gemz.fashion/" target="_blank" rel="external">Gemz</a> as their product lead, and we just started working on the MVP, which is a lot of fun!</p>
    
    <p className={utils.small}>Last updated December 18th, 2024. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h2>Contact <BlockIcon>🤝</BlockIcon></h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also write to me on <a href="https://instagram.com/astridmathildeb" target="_blank" rel="nofollow noreferrer">Instagram</a> or <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/about">learn more about me</Link>, <a href="https://github.com/astridmathilde/portfolio/" target="_blank" rel="nofollow noreferrer">view the code on Github</a> or see what I have done to reduce <Link href="colophon">this site’s carbon emissions</Link>.</p>
    </>
  );
}

