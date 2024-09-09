"use client"

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import styles from '../assets/scss/layout.module.scss';
import BlockIcon from "../components/icon.js";

export default function LightSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true)
  }, []);
  
  if(!mounted) return null;

  return (
    <>
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Switch theme"><BlockIcon>{theme === "dark" ? "🌞"  : "🌘"}</BlockIcon></button>
    </>
    )
  };