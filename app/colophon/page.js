import Link from "next/link";
import { siteTitle } from "../layout";
import utils from "../../assets/scss/utils.module.scss";
import BlockIcon from "../../components/icon";
import BlockEmphasis from "../../components/emphasis";

const pageTitle = 'Colophon';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/colophon'),
  title: pageTitle + ' – ' + siteTitle
}

export default function Colophon() {
  return (
    <>
    <h2>Colophon <BlockIcon>✏️</BlockIcon></h2>
    <p>For the past 8 years this website has served as my own personal sandbox for learning new technologies and maintaining my coding skills. This version is using <a href="https://rsms.me/inter" target="_blank" rel="external">Inter Display</a> for the text, a JSON-file for the content, and <a href="https://nextjs.org/" target="_blank" rel="external">Next.js</a> to display everything on the front-end. The site is hosted on <a href="https://www.netlify.com/" target="_blank" rel="external">Netlify</a>.</p>
    
    <h3>Carbon footprint <BlockIcon>🌍</BlockIcon></h3>
    <p>Did you know that the Internet requires a huge amount of electricity, which in turn leads to immense carbon emissions? According to <a href="    https://www.websitecarbon.com/" target="_blank" rel="external">websitecarbon.com</a>, the average website produces about 0,5 gram of CO2 per page view.</p>
    
    <p>In order to reduce the carbon emissions, it is important to create fast websites that consumes less of the world’s resources. Normal websites are built each time they are loaded, but using modern technology we can make sure they are only built once 💚.</p>
    
    <p>For this website, I have made sure to keep the design simple and minimize the amount of images and videos. The images are compressed and adapted to the screen resolution. Hosting the site on <a href="https://www.netlify.com/" target="_blank" rel="external">Netlify</a> means that it is running on sustainable energy. And of course, this site is using a modern Javascript framework (<a href="https://nextjs.org/" target="_blank" rel="external">Next.js</a>), which means it is only built when I publish any changes.</p>
    
    <BlockEmphasis>
    <p><em>The carbon footprint for this website is 0,09 gram of CO2 per page view.</em></p>
    <p className={utils.small}>According to <a href="https://www.websitecarbon.com/website/astridmathilde-no/" target="_blank" rel="external noreferrer">websitecarbon.com</a>. Last checked September 2024.</p>
    </BlockEmphasis>
    
    <h3>Further discovery 🔎</h3>
    <p>You can <a href="https://github.com/astridmathilde/astridmathilde/" target="_blank" rel="nofollow noreferrer">view the code on Github</a>, <Link href="/about">learn more about me</Link>, or look at <Link href="/projects/kahos">one of my projects.</Link></p>
    </>
  )
}