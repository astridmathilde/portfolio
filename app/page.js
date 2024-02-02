import { siteTitle } from "./layout";
import BlockDisplay from "../components/display";
import BlockIcon from "../components/icon";

export const metadata = {
  title: siteTitle,
  description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
}

export default function Index() {
  return (
    <>
    <BlockDisplay>Heia! <BlockIcon>👋</BlockIcon> I am a designer from Northern Norway with a background in graphic design and web development, currently doing a master's degree in design at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>. I want to design digital products and services that matter, contributing to a more sustainable future. <BlockIcon>🌍</BlockIcon></BlockDisplay>

    </>
    );
  }