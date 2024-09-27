import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggler from "./ThemeToggler";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" className="py-12 dark:bg-zinc-950 bg-white h-1/2 md:h-72">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-end border-t-2 border-zinc-950 dark:border-white">
       
          <p className="text-3xl py-2 md:text-8xl uppercase tracking-wide font-extrabold text-zinc-950 dark:text-white">
            <FontAwesomeIcon icon={faGlobe} className="text-xl md:text-3xl text-cyan-700 hover:-rotate-90 transition ease-in-out align-top"/>
            Web Developer
          </p>
          <p className="text-3xl md:text-8xl uppercase tracking-wide font-extrabold text-zinc-950 dark:text-white">
            &
            <ThemeToggler />
            UI Designer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
