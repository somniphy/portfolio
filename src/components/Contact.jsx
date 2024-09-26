
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Contact Me</h2>
        <p className="mt-2 text-xl text-zinc-900 dark:text-white">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> penalescjay@gmail.com
        </p>
        <p className="mt-12 text-lg text-zinc-800 dark:text-white">
          Connect with me on social media.
        </p>

        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 hover:text-zinc-700 text-3xl dark:text-white"
              aria-label={link.name}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
