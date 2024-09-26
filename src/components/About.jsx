import profileImage from "../assets/me.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-around">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              About Me
            </h2>
            <p className="mt-4 text-lg text-zinc-800 dark:text-white">
              Hi, I&apos;m Christian Jay, a passionate full-stack web developer
              and UI designer. 
            </p>
            <p className="mt-4 text-lg text-zinc-900  dark:text-white">
              My current development stack includes:
            </p>
            <ul className="list-disc list-inside mt-4 text-lg text-zinc-900  dark:text-white">
              <li>
                <strong>Frontend:</strong> React, Vue, Tailwind CSS, JavaScript
                (ES6+)
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, Prisma, Laravel,
                MySQL, PostgreSQL, Supabase
              </li>
              <li>
                <strong>Version Control:</strong> Git, GitHub
              </li>
              <li>
                <strong>Design Tools:</strong> Figma
              </li>
              <li>
                <strong>Other Tools:</strong> NPM, REST APIs
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 w-1/2 md:w-1/6 items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
