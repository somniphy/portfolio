const Home = () => {
  return (
    <section id="home" className="dark:bg-zinc-950 bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">
            Hi, I&apos;m
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Christian Jay
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-white">
            Full-Stack Web Developer & UI Designer
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block px-8 py-3 dark:bg-white bg-zinc-900 dark:text-zinc-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-zinc-700"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
