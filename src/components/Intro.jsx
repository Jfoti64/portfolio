import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Fullstack Developer</h1>
      <p className="text-xl mb-8 w-2/3">
        I can help you bring your ideas to life with seamless and engaging user experiences.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/joshua-foti-23676b182/"
          className="flex flex-row items-center gap-1"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/Jfoti64" className="flex flex-row items-center gap-1">
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Intro;
