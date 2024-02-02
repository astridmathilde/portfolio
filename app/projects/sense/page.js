/**
* Project: Sense
*/

import { promises as fs } from "fs";
import { siteTitle } from "../../layout";
import Title from "../../../components/title";
import Container from "../../../components/container";

import ProjectHeader from "../../../components/project/header";
import ProjectContent from "../../../components/project/content";
import ProjectMeta from "../../../components/project/meta";
import BlockImage from "../../../components/image";
import NavProject from "../../../components/project/nav";

/* Get images */
import thumbnail from "../../../assets/img/projects/sense/thumbnail.jpg";
import image1 from "../../../assets/img/projects/sense/image1.jpg";

/* Get content */
const file = await fs.readFile(process.cwd() + '/projects.json', 'utf8');
const project = JSON.parse(file);
const projectID = "3"; 

/* Set metadata  */
const pageTitle = project[projectID].title;
export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
}

/* Set prev/next navigation */
const nextProject = "0";
const prevProject = "2";

/* Display content */
export default function Project() {
  return (
    <>
    <ProjectHeader>
    <Title>{pageTitle}</Title>
    </ProjectHeader>
    
    <Container>
    <ProjectMeta 
    location={project[projectID].location.name}
    locationURL="https://aho.no"
    contributors={project[projectID].contributors}
    time={project[projectID].time}
    tools={project[projectID].tools}
    />
    
    <ProjectContent>
    <BlockImage url={thumbnail} alt={project[projectID].title} />
    <BlockImage url={image1} alt={project[projectID].title} />    
    </ProjectContent>
    
    </Container>
    
    <NavProject next={project[prevProject].url} prev={project[nextProject].url} />
    </>
    );
  }