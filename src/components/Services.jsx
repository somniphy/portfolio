import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faSearch } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "I create fully responsive, scalable, and performance-driven websites.",
      icon: faCode, 
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and user-friendly interfaces for digital products.",
      icon: faPalette,
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Optimizing websites to improve visibility and drive more traffic.",
      icon: faSearch,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-zinc-900  dark:text-white">My Services</h2>
        <p className="mt-4 text-lg text-zinc-700  dark:text-white">
          Here are some services I can provide to help your business grow.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-50 p-6 rounded-lg dark:bg-zinc-950"
            >
              <div className="text-4xl text-zinc-900 dark:text-white">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-800 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
