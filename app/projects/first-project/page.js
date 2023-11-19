import { siteTitle } from "../../layout";

const pageTitle = 'First project';

export const metadata = {
  title: pageTitle + ' – ' + siteTitle,
}

export default function Projects() {
  return (
    <>
    <h2>{ pageTitle }</h2>
    </>
    );
  }