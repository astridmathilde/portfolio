import { promises as fs } from "fs";
import { siteTitle } from "../../layout";
import styles from "../../../assets/scss/projects.module.scss";
import Title from "../../../components/title";
import ProjectHeader from "../../../components/project/header";
import ProjectMeta from "../../../components/project/meta";
import BlockImage from "../../../components/image";
import NavProject from "../../../components/project/nav";

/* Get images */
import thumbnail from "../../../assets/img/projects/gamle-munch/thumbnail.jpg";
import image1 from "../../../assets/img/projects/gamle-munch/image1.jpg";
import image2 from "../../../assets/img/projects/gamle-munch/image2.jpg";
import image3 from "../../../assets/img/projects/gamle-munch/image3.jpg";
import image4 from "../../../assets/img/projects/gamle-munch/image4.jpg";
import image5 from "../../../assets/img/projects/gamle-munch/image5.jpg";
import image6 from "../../../assets/img/projects/gamle-munch/image6.jpg";
import image7 from "../../../assets/img/projects/gamle-munch/image7.png";
import image8 from "../../../assets/img/projects/gamle-munch/image8.png";
import image9 from "../../../assets/img/projects/gamle-munch/image9.png";
import image10 from "../../../assets/img/projects/gamle-munch/image10.png";


/* Get content */
const file = await fs.readFile(process.cwd() + '/projects.json', 'utf8');
const project = JSON.parse(file);
const projectID = "2";

/* Set prev/next navigation */
const nextProject = "3";
const prevProject = "1";

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
    <BlockImage url={image2} alt={project[projectID].title} />
    <BlockImage url={image3} alt={project[projectID].title} />
    <BlockImage url={image4} alt={project[projectID].title} />
    <BlockImage url={image5} alt={project[projectID].title} />
    <BlockImage url={image6} alt={project[projectID].title} />
    <BlockImage url={image7} alt={project[projectID].title} />
    <BlockImage url={image8} alt={project[projectID].title} />
    <BlockImage url={image9} alt={project[projectID].title} />
    <BlockImage url={image10} alt={project[projectID].title} />
    </div>
    
    </div>
    
    <NavProject next={project[prevProject].url} prev={project[nextProject].url} />
    </>
    );
  }