import { promises as fs } from 'fs';
import { siteTitle } from "../layout";
import ListProjects from "../../components/list-projects";
import utils from "../../assets/scss/utils.module.scss";

const pageTitle = 'Projects';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
  description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
}

async function getProjects() {
  const file = await fs.readFile(process.cwd() + '/projects.json');
  const data = JSON.parse(file);
  return data;
}

export default async function Projects() {
  const allProjects = await getProjects();

  return (
    <>
    <h2 className={utils.screen_reader_text}>{ pageTitle }</h2>
    <ListProjects projects={allProjects}/>
    </>
    );
  }