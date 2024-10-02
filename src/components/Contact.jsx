import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub, 
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/somniphy",
      icon: faGithub,
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christian-jay-penales-2b33b1200/",
      icon: faLinkedin,
    },
    {
      id: 3,
      name: "Facebook",
      url: "https://www.facebook.com/christian.penales.927",
      icon: faFacebook,
    },
  ];
  return (
    <section id="contact">
        <div className="container space-x-4">
          {" "}
          {/* Adjust the value (space-x-6) as needed */}
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-700 text-2xl text-white"
              aria-label={link.name}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
    </section>
  );
}

export default Contact;
