import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../src/components/layout/layout';
import BlockImage from '../src/components/image/image';

export default function about() {
  const pageTitle = 'About me';
  
  return (
    <Layout about>
    <Head>
    <title>{pageTitle} – {siteTitle}</title>
    </Head>
    <h2>{pageTitle}</h2>
    <p>I am from Kvænangen/Skjervøy in Northern Norway, recently turned 25, and right now I am in my third year of the five
    year master's
    programme in design at <a href="https://aho.no/" target="_blank" rel="external">The Oslo School of
    Architecture and Design</a> while working with <a href="https://www.openbridge.no/" target="_blank"
    rel="external">OpenBridge</a>, an open-source design system for better and safer user interfaces on ships, aiming to reduce the carbon emissions in the
    ocean industry by helping ship operators make energy-efficient decisions.</p>
    
    <p>Previously I have worked with <a href="https://www.seam.no" target="_blank" rel="external">SEAM</a> and designed user
    interfaces for alarm systems at their electric ferries, as a part of my current position as a student assistant at <a
    href="https://www.oicl.no/" target="_blank" rel="external">Ocean Industries Concept Lab</a>. During the summer of
    2022 I worked at <a href="https://www.bigfish.no" target="_blank" rel="external">Big Fish</a>, where I made social
    media content for <a href="https://www.becour.com" target="_blank" rel="external">Becour</a> and helped design a
    new landing page for <a href="https://www.becour.com" target="_blank" rel="external">Marbly</a>, a platform that makes
    it easier for companies to source renewable energy.</p>
    
    <p>As a child I enjoyed taking photos, which
    sparked my interest for design and
    technology later on. I learned to code when I was 10, and at 19 I started my first job as a web designer/developeçr,
    after finishing my craft certificate in digital media design. I worked in Tromsø for a couple of years, before I
    decided to do a master's degree in interaction design, and moved to Oslo to become a full-time design student. If you want to read more about my career, <Link href="./resumee">take a look at my resumee</Link> 🔎</p>
    
    <p>When I am not at school working on design projects or designing components in Figma, you can probably find me in the stable, outside hiking in the forest, at a café
    sipping oat latte and writing something in my Moleskine, or maybe at
    a concert somewhere headbanging to a rock or metal band.</p>
    
    <BlockImage url="/images/astrid-og-theia.jpg" width="2268" height="1814" alt="Astrid is hugging her horse, Theia" caption="I used to have my own horse, Theia <3" />
  
    </Layout>
    );
  }