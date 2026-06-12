import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GitHubGraph from "@/components/GitHubGraph";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GitHubGraph />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
