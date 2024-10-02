import profilePicture from "../assets/prof.jpg";
import Contact from "./Contact";
import { TextEffect } from "./TextEffect";
const Home = () => {
  return (
    <div className="px-4 md:px-0 md:max-w-5xl mx-auto pt-2 h-1/2 md:h-96">
      <div className="w-full md:w-64 flex flex-col items-center md:items-start">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className=" w-32 h-32 rounded-full object-cover border-gray-800"
        />
        <div className="pt-8 md:text-lg text-sm  text-zinc-50">
        <TextEffect text={"Christian Penales"}/>
        </div>
  
        
        <div className="pt-6 text-sm text-zinc-400">Web Developer</div>
        <div className="text-sm text-zinc-400">UI/UX Designer</div>
        <div className="text-sm text-zinc-400">Cybersecurity</div>
        <div className="pt-8">
          <div className="pt-2">
            <Contact />
          </div>
        </div>
        <div className="pt-2">
          <span
            className="text-sm animate-text-gradient bg-gradient-to-r from-[#ffffff] via-[#dddddd] to-[#bebebe] 
                bg-[200%_auto] bg-clip-text text-transparent"
          >
            penalescjay@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
