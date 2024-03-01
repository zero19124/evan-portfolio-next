import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
// import { GlobalLoading, showLoading } from "react-global-loading";

export default function Home() {
  // const show = () => {
  //   showLoading(true);
  //   setTimeout(() => {
  //     showLoading(false);
  //   }, 1000);
  // };
  // show()
  return (
    <main className="flex flex-col items-center px-4" id="main">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      {/* <GlobalLoading /> */}
    </main>
  );
}
