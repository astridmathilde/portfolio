import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";

const pageTitle = 'My life lately';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle,
  openGraph: {
    images: 'https://astridmathilde.no/opengraph-image.jpg',
  }
}

export default function Colophon() {
  return (
    <>
    <h2>My life lately <BlockIcon>✨</BlockIcon></h2>
    <p>Continuing on my third year at <a href="https://aho.no/en" target="_blank" rel="external">The Oslo School of Architecture and Design</a> after having a break. I might go on an exchange this fall. In December I joined the startup <a href="https://www.gemz.fashion/" target="_blank" rel="external">Gemz</a> as their head of product and CTO, currently working on the MVP. I spend my days trying to find a good way to balance this with my school projects, doing yoga and listening to music. I have also started writing more, might share something at some point.</p>
    
    <p className={utils.small}>Last updated on January 24th, 2025. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>
    
    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>Bedre produkter</em>, Ida Aalen</li>
    <li><em>Intermezzo</em>, Sally Rooney</li>
    <li><em>Outline</em>, Rachel Cusk</li>
    <li><em>Designing Complexity</em>, Birger Sevaldson</li>
    </ul>
    
    <h3>Music on repeat <BlockIcon>🎧</BlockIcon></h3>
    <ul>
    <li>My playlist "<a href="https://open.spotify.com/playlist/7jC9vbS62NA9tjJyjx4BsX?si=992409c7f8fb4711" rel="external norefferer" target="_blank">soft stimulants"</a></li>
    <li>The album <em><a href="https://open.spotify.com/album/07iv0tkKefJPUp9RFDOuNQ?si=XFWIOAjYQIC5iTCS6SBp0Q" rel="external norefferer" target="_blank">New Light</a></em> by Gidge</li>
    </ul>
    
    <h2>Further discovery <BlockIcon>🔎</BlockIcon></h2>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, find out <Link href="/about">more about me</Link>, or <Link href="/work/internship-fremtind">look at one of my projects</Link>.</p>
    </>
  )
}