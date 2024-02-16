import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockIcon from "../components/icon";

export const metadata = {
  title: siteTitle,
}

export default function Index() {
  return (
    <>
    <BlockDisplay>Heia! <BlockIcon>👋</BlockIcon> I am a designer from Northern Norway with a background in web development, currently doing a master's degree in design at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>. I want to design digital products and services that matter, contributing to a more sustainable future. <BlockIcon>🌍</BlockIcon></BlockDisplay>

    </>
    );
  }