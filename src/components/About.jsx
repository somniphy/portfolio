import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "./Slider";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section id="about" className="py-20 dark:bg-zinc-950 bg-white md:h-72">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left border-t-2 border-zinc-950 dark:border-white">
          <p className="text-3xl md:text-8xl uppercase tracking-wide font-extrabold text-zinc-950 dark:text-white">
            About Me
            <FontAwesomeIcon icon={faAnglesLeft} className="text-3xl text-red-600 align-baseline hover:-rotate-180 transition ease-in-out" />
          </p>
          <p className="py-6 text-sm md:text-xl tracking-wide font-light text-zinc-950 dark:text-white">
            I&apos;m an aspiring full-stack web developer with a passion for
            building dynamic websites and web apps using industry-standard tools
            and best practices.
          </p>
          <div className="container pb-2 md:pb-4">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
