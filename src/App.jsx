import styles from './app.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';




function App() {

  return (
    <div className={styles.App}>
        <Navbar />
        <Hero />
       
        <About />
         {/*
        <Experience />
        */}
        <Marquee>
          <Skill />
          <Skill />
          <Skill />
        </Marquee>
        <Projects />
    </div>
  );
}

export default App;
