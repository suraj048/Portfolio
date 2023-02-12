import Head from "next/head";
import About from "../../src/components/About";
import Contact from "../../src/components/Contact";
import Main from "../../src/components/Main";
import Skills from "../../src/components/Skills";
import Navbar from "../../src/components/Navbar";

export default function Home() {
  return (
    <div className="font-mons text-xl">
      <Head>
        <title>Suraj | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
        <Navbar />
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
