import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const currentRef = introRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={introRef}
      className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-4xl font-bold mb-4">Joshua Foti</h1>
      <p className="text-xl lg:text-2xl mb-8 w-2/3">
        Recent IT grad certified with Security+, Network+, A+, AWS Cloud Practitioner, ITIL Foundation, and Linux Essentials.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/joshua-foti-23676b182/"
          className="flex flex-row items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          <p>LinkedIn</p>
        </a>
        <a
          href="https://github.com/Jfoti64"
          className="flex flex-row items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Intro;
