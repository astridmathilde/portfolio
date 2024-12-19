import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";
import BlockEmphasis from "../../components/emphasis";

const pageTitle = 'My life lately';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/now'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>My life lately <BlockIcon>✨</BlockIcon></h2>
    <p>Moved to Oslo four years ago for my studies, about to finish my third year at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a> after having a break. I enjoy going to concerts, doing yoga and spending time with horses. Also, I recently joined the startup company <a href="https://www.gemz.fashion/" target="_blank" rel="external">Gemz</a> as their product lead, and we just started working on the MVP, which is a lot of fun!</p>

        <p className={utils.small}>Last updated December 18th, 2024. Inspired by <a href="https://nownownow.com/about" target="_blank" rel="external">Now</a>.</p>

    
    <h3>Currently reading <BlockIcon>📚</BlockIcon></h3>
    <ul>
    <li><em>Radical Focus</em>, Christina Wodtke</li>
    <li><em>Bedre produkter</em>, Ida Aalen</li>
    <li><em>Intermezzo</em>, Sally Rooney</li>
    <li><em>The body keeps the score</em>, Bessel van der Kolk</li>
    <li><em>The design of everyday things</em>, Don Norman</li>
    </ul>
    
    <h3>Music on repeat <BlockIcon>🎧</BlockIcon></h3>
    <ul>
    <li><a href="https://open.spotify.com/album/5q2iMctlDvEMYVIawF6Vop?si=i2pS51P6T2OXgtlgjDEkHQ" rel="external norefferer" target="_blank">This album</a> by Fred again</li>
    <li>Bibio, especially the album <a href="https://open.spotify.com/album/5J9NcB7nK8kF7JsJur1V3G?si=2wPkucD9QAy-n8uJXTNBMg" rel="external norefferer" target="_blank"><em>Ambivalence Avenue</em></a></li>
    <li>My playlist <a href="https://open.spotify.com/album/5q2iMctlDvEMYVIawF6Vop?si=i2pS51P6T2OXgtlgjDEkHQ" rel="external norefferer" target="_blank">"into the zone"</a></li>
    </ul>
    
    <h3>Further discovery <BlockIcon>🔎</BlockIcon></h3>
    <p>You can <Link href="/colophon">read my thoughts about the usage of AI</Link>, <Link href="/about">learn more about me</Link>,<Link href="/projects/internship-fremtind"> look at one of my projects</Link> or <a href="https://github.com/astridmathilde/portfolio/" target="_blank" rel="nofollow noreferrer">view the code on Github</a>.</p>
    </>
  )
}