import { useEffect, useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const currentRef = projectsRef.current;

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
    <div className="flex justify-center w-full">
      <div
        ref={projectsRef}
        className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out flex flex-col items-center text-center p-5 bg-customBackground gap-5 w-full max-w-screen-lg lg:max-w-screen-xl"
      >
        <div className="flex flex-col items-center md:w-2/3">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start mt-8 md:mt-0 space-y-4 md:space-y-0 md:space-x-4 w-full">
          <div className="w-full md:w-2/3">
            <div className="p-2">
              <img
                src="public/Screenshot 2024-06-16 at 6.18.16 PM.png"
                alt="SocialNet Screenshot"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <ul className="flex flex-wrap gap-2 justify-center mt-3">
              {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Vite', 'Vitest'].map(
                (item) => (
                  <li
                    key={item}
                    className="bg-skillBox rounded-lg shadow-md p-2 text-xl hover:bg-skillBoxHover transition-colors duration-200"
                    style={{ cursor: 'default', userSelect: 'none' }}
                  >
                    <span style={{ cursor: 'default', userSelect: 'none' }}>{item}</span>
                  </li>
                )
              )}
            </ul>

            <ul className="flex flex-wrap gap-2 justify-center mt-3">
              <li className="bg-linkBox rounded-lg shadow-md p-2 text-xl hover:bg-linkBoxHover transition-colors duration-200">
                <a
                  href="https://github.com/Jfoti64/socialnet-frontend?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {'GitHub Page'}
                </a>
              </li>
              <li className="bg-linkBox rounded-lg shadow-md p-2 text-xl hover:bg-linkBoxHover transition-colors duration-200">
                <a
                  href="https://socialnet-jfoti64.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {'Live Demo'}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-0">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">SocialNet</h2>
            <p className="text-xl lg:text-2xl mb-4">
              SocialNet is a social networking platform built with React and Node.js. It features
              user authentication, profile creation, friend requests, and interactive posts with
              likes and comments. My role included front-end and back-end development, ensuring
              responsiveness and optimizing performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
