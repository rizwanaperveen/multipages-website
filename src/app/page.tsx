'use client';
import Hero from "./hero";
import Content from "./content";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      duration: 1000,
      delay: 100,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 200
    });
    AOS.refresh();
  }, []);
  return (
    <main>

      <Hero />
      <Content />
     
    </main>
  );
}
