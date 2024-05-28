import Link from "next/link";
import { siteTitle } from "../../layout";
import { projects } from "../../../data/projects";
import BlockImage from "../../../components/image";

const pageTitle = 'The student association KAHOS';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle
}

export default function kahos() {
  return (
    <>
    <h2>{projects[1].title}</h2>
    <BlockImage url={projects[1].thumbnail} alt={projects[1].title} />
    </>
    )
  }