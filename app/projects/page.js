import { promises as fs } from 'fs';
import { siteTitle } from "../layout";
import ListProjects from "../list-projects";

const pageTitle = 'Projects';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
  description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
}

async function getProjects() {
  const file = await fs.readFile(process.cwd() + '/assets/json/projects.json', 'utf8');
  const data = JSON.parse(file)
  return data;
}

export default async function Projects() {
  const allProjects = await getProjects();

  return (
    <>
    <h2>{ pageTitle }</h2>
    <ListProjects projects={allProjects}/>
    </>
    );
  }