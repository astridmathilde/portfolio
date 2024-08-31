import Link from "next/link";
import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockIcon from "../components/icon";
import BlockProjects from "../components/projects";
import { experience } from "../data/resumee";

export const metadata = {
  title: siteTitle,
  description: 'Heiaaa! I am Astrid, a designer and developer from Northern Norway. I have always been passionate about design and technology, but after working with graphic design, websites and coding for 5 years, I felt the need to do something else. Currently I am doing a master’s degree in design at The Oslo School of Architecture and Design, and I want to help design digital products and services that matter, improving the future for both people and planet.'
}

export default function Index() {
  return (
    <>
    <BlockDisplay>Heia! <BlockIcon>👋</BlockIcon> I am a designer from Northern Norway <BlockIcon>🏔️</BlockIcon> with a background in web development, currently doing a master's degree in design at The Oslo School of Architecture and Design. I want to design digital products and services that matter, contributing to a more sustainable future. <BlockIcon>🌍</BlockIcon></BlockDisplay>
    
    <BlockProjects />
    
    <h2>Recent work experience 👩🏻‍💻</h2>
    {experience.slice(0, 3).map((experience) => (
      <article key={experience.id}>
      <header>
      <h3>{experience.position} @ <a href={experience.location.url}>{experience.location.name}</a></h3>
      <p dangerouslySetInnerHTML={{ __html: experience.description }} />
      </header>
      <p>{experience.time}</p>
      </article>
      ))}
      
      
      <h2>Life lately ✨</h2>
      <p>Living with friends in Oslo, currently on my third year at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a> specializing in interaction & service design, but I have taken a break from my studies this year to work full-time. I have started re-reading the entire Harry Potter series,  and I spend a lot of time in the stable, doing yoga or working on various creative projects.</p>
      <p className="small">Last updated in February 2024. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
      
      <h2>Contact 🤝</h2>
      <p>My email is <a href="mailto:heia@astridmathilde.no?subject=Heia!">heia@astridmathilde.no</a>, but you can also write to me on <a href="https://instagram.com/astridmathildeb" target="_blank" rel="nofollow noreferrer">Instagram</a> or add me on <a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="nofollow noreferrer">LinkedIn</a>!</p>
      
      <h2>Further discovery 🔎</h2>
      <p>You can <Link href="resumee">read my full resumee</Link>, <a href="https://github.com/astridmathilde/astridmathilde/" target="_blank" rel="nofollow noreferrer">view the code on Github</a> or see what I have done to reduce <Link href="colophon">this site’s carbon emissions</Link>.</p>
      </>
      );
    }
    
