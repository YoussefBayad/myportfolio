import React from "react";
import { StickyProvider } from "../contexts/app/app.provider";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import Contact from "../components/Contact/Contact";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <StickyProvider>
      <Layout>
        <SEO />
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
        <Contact />
      </Layout>
    </StickyProvider>
  );
};

export default Home;
