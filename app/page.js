import { promises as fs } from 'fs';
import { siteTitle } from "./layout";
import ListProjects from "./list-projects";

export const metadata = {
  title: siteTitle,
  description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
}

async function getProjects() {
  const file = await fs.readFile(process.cwd() + '/assets/json/projects.json', 'utf8');
  const data = JSON.parse(file)
  return data;
}

export default async function Index() {
  const featuredProjects = await getProjects();

  return (
    <>
    <p>Heia! I am from Northern Norway and I have always been passionate about design and coding. Currently I am a third year design student at The Oslo School of Architecture and Design while working with OpenBridge, an open-source design system for better and safer user interfaces on ships.</p>

    <ListProjects projects={featuredProjects} />
    </>
    );
  }