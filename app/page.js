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
  description: 'Heiaaa! I am Astrid, a designer and developer from Northern Norway. I have always been passionate about design and technology, but after working with graphic design, websites and coding for 5 years, I felt the need to do something else. Currently I am doing a master’s degree in design at The Oslo School of Architecture and Design, and I want to help design digital products and services that matter, improving the future for both people and planet.'
}

export default function Index() {
  return (
    <>
    <BlockDisplay>Heia! <BlockIcon>👋</BlockIcon> I am a designer from Northern Norway <BlockIcon>🏔️</BlockIcon> with a background in web development and a passion for sustainability, currently doing a master's degree in design at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>.</BlockDisplay>
    
    <h2 className={utils.screen_reader_text}>This is some of my projects 👇</h2>
    
    <div className={style.projects}>
    {projects.toReversed().map((project) => (
      <BlockProjects id={project.id} slug={project.slug} title={project.title} category={project.category} location={project.location.name} thumbnail={project.thumbnail} priority="true" sizes="(min-width: 670px) 50vw, 100vw" />
    ))}
    </div>
    
    <h2>Recent work experience 👩🏻‍💻</h2>
    {experience.slice(0, 3).map((experience) => (
      <BlockResumee id={experience.id} position={experience.position} locationUrl={experience.location.url} locationName={experience.location.name} description={experience.description} time={experience.time} />
    ))}
    
    <h2>Life lately ✨</h2>
    <p>Currently on my third year at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>, specializing in interaction & service design, but I have taken a break from my studies this year to work with <a href="https://www.oicl.no/projects/openzero" target="_blank" rel="external">OpenZero</a> as well as some personal projects. I have started re-reading the entire Harry Potter series, and I spend a lot of time in the stable, doing yoga or journalling.</p>

    <p className={utils.small}>Last updated in August 2024. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    <h2>Contact 🤝</h2>
    <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also write to me on <a href="https://instagram.com/astridmathildeb" target="_blank" rel="nofollow noreferrer">Instagram</a> or <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">add me on LinkedIn</a>!</p>
    
    <h2>Further discovery 🔎</h2>
    <p>You can <Link href="/about">learn more about me</Link>, <a href="https://github.com/astridmathilde/astridmathilde/" target="_blank" rel="nofollow noreferrer">view the code on Github</a> or see what I have done to reduce <Link href="colophon">this site’s carbon emissions</Link>.</p>
    </>
  );
}

