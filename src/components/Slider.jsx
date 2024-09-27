import {
  faCss3,
  faFigma,
  faGit,
  faHtml5,
  faLaravel,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS", icon: faCss3 },
  { name: "Vanilla", icon: faSquareJs },
  { name: "React", icon: faReact },
  { name: "Node", icon: faNodeJs },
  { name: "Laravel", icon: faLaravel },
  { name: "Git", icon: faGit },
  { name: "Figma", icon: faFigma },
];

const Slider = () => {
  return (
    <div className="overflow-hidden max-w-full flex mt-4">
       <div className="flex justify-between space-x-6">
        {/* Duplicate items for the seamless infinite loop effect */}
        {items.map((item, index) => (
          <div className="flex" key={index}>
            <FontAwesomeIcon
              icon={item.icon}
              className="flex text-zinc-950 dark:text-white text-xl md:text-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
