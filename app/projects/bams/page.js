import { promises as fs } from "fs";
import { siteTitle } from "../../layout";
import styles from "../../../assets/scss/project.module.scss";
import Title from "../../../components/title";
import ProjectHeader from "../../../components/project/header";
import ProjectMeta from "../../../components/project/meta";
import BlockImage from "../../../components/image";
import NavProject from "../../../components/project/nav";

/* Get images */
import thumbnail from "../../../assets/img/projects/gamle-munch/thumbnail.jpg";
import image1 from "../../../assets/img/projects/gamle-munch/image1.jpg";

/* Get content */
const file = await fs.readFile(process.cwd() + '/projects.json', 'utf8');
const project = JSON.parse(file);
const projectID = "1";

/* Set prev/next navigation */
const nextProject = "2";
const prevProject = "0";

/* Set metadata */
const pageTitle = project[projectID].title;
export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
}

/* Display content */
export default function Project() {
  return (
    <>
 <ProjectHeader>
    <Title>{pageTitle}</Title>
    </ProjectHeader>
    
    <div className={styles.container}>
    <ProjectMeta 
    stakeholder={project[projectID].stakeholder.name}
    stakeholderURL={project[projectID].stakeholder.url}
    location={project[projectID].location.name}
    locationURL = "https://aho.no"
    contributors={project[projectID].contributors}
    time={project[projectID].time}
    tools={project[projectID].tools}
    />
    
    <div className={styles.content + " entry"}>
    <BlockImage url={thumbnail} alt={project[projectID].title} />
    <BlockImage url={image1} alt={project[projectID].title} />
    </div>
    
    </div>
    
    <NavProject next={project[prevProject].url} prev={project[nextProject].url} />
    </>
    );
  }