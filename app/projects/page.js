/* Projects */
import { siteTitle } from "../layout";
import ListProjects from "../../components/list-projects";
import utils from "../../assets/scss/utils.module.scss";

const pageTitle = 'Projects';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
  description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
}

export default function Projects() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>{ pageTitle }</h2>
    <ListProjects />
    </>
    );
  }