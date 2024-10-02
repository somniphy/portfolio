import {
  faCss3,
  faFlutter,
  faGitAlt,
  faGolang,
  faHtml5,
  faJs,
  faLaravel,
  faLinux,
  faNodeJs,
  faNpm,
  faPhp,
  faReact,
  faUbuntu,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextEffect } from "./TextEffect";

const About = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-800 p-[1px]">
      <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#000000_50%,#ffffff_100%)]" />

      <div className="p-4 relative z-10 rounded-xl bg-zinc-900  text-gray-50 ">
        <div className="text-white text-center md:text-lg text-sm md:text-left">
          <TextEffect text={"About Me"} interval={4} />
        </div>
        <div className="pt-2 text-gray-400 md:text-left text-center text-sm">
          Hey, I am Christian Penales. I am a full-stack web developer
          specializing in creating responsive and scalable websites and web
          applications, with a strong focus on UI/UX design principles.
          Programming and developing applications since 2020. I am also a
          cybersecurity enthusiast. Graduate of BS in Information Technology.
        </div>
        <div className="pt-6 text-gray-300 text-left text-sm font-bold">
          Im using:
          <div className="md:pt-4 grid auto-rows-[32px] grid-cols-4 gap-2 md:flex md:space-x-6 pt-4">
            <FontAwesomeIcon icon={faHtml5} className="text-2xl " />
            <FontAwesomeIcon icon={faCss3} className="text-2xl " />
            <FontAwesomeIcon icon={faJs} className="text-2xl " />
            <FontAwesomeIcon icon={faReact} className="text-2xl " />
            <FontAwesomeIcon icon={faVuejs} className="text-2xl " />
            <FontAwesomeIcon icon={faNodeJs} className="text-2xl " />
            <FontAwesomeIcon icon={faPhp} className="text-2xl " />
            <FontAwesomeIcon icon={faLaravel} className="text-2xl " />
            <FontAwesomeIcon icon={faNpm} className="text-2xl " />
            <FontAwesomeIcon icon={faGitAlt} className="text-2xl " />
            <FontAwesomeIcon icon={faFlutter} className="text-2xl " />
            <FontAwesomeIcon icon={faUbuntu} className="text-2xl " />
            <FontAwesomeIcon icon={faLinux} className="text-2xl " />
          </div>
          <div className="pt-4 text-gray-300 text-left text-sm font-bold">
            Currently learning:
            <div className="pt-4 flex space-x-6 w-full">
              <FontAwesomeIcon icon={faGolang} className="text-2xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
