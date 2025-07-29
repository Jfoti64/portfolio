import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutRef.current;

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
        ref={aboutRef}
        className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out flex flex-col md:flex-row items-center justify-center text-center p-5 bg-customBackground gap-5 w-full max-w-screen-md lg:max-w-screen-lg"
      >
        <div className="flex flex-col items-center md:w-2/3">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-2xl text-left">
            Hi, I&apos;m Joshua Foti—an IT professional based in Panama City, FL. I earned a
            B.S. in Information Technology from Western Governors University and hold
            CompTIA Security+, Network+, and A+ along with AWS Cloud Practitioner, ITIL
            Foundation, and Linux Essentials certifications.
          </p>
          <p className="text-xl lg:text-2xl mb-8 max-w-2xl text-left">
            I thrive in collaborative environments and seek opportunities to grow in IT
            within a team that values creativity, innovation, and excellence.
          </p>
          <p className="text-xl lg:text-2xl mb-8 max-w-2xl text-left">
            Outside of work, you&apos;ll find me watching hockey, exercising, learning
            Spanish, or indulging in my love for film and traveling. Let&apos;s connect and
            keep systems running smoothly.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 mt-8 md:mt-0 space-y-4">
          {/* Certifications Section */}
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Certifications</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
              {[
                'CompTIA Security+',
                'CompTIA Network+',
                'CompTIA A+',
                'AWS Cloud Practitioner',
                'ITIL Foundation',
                'LPI Linux Essentials',
              ].map((cert) => (
                <li
                  key={cert}
                  className="bg-skillBox rounded-lg shadow-md p-2 text-xl lg:text-2xl hover:bg-skillBoxHover transition-colors duration-200"
                  style={{ cursor: 'default', userSelect: 'none' }}
                >
                  <span style={{ cursor: 'default', userSelect: 'none' }}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Skills</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
              {[
                'JavaScript',
                'React.js',
                'Node.js',
                'Express',
                'MongoDB',
                'SQL',
                'HTML',
                'CSS',
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-skillBox rounded-lg shadow-md p-2 text-xl lg:text-2xl hover:bg-skillBoxHover transition-colors duration-200"
                  style={{ cursor: 'default', userSelect: 'none' }}
                >
                  <span style={{ cursor: 'default', userSelect: 'none' }}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Tools</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
              {[
                'GitHub',
                'Vite',
                'Jest',
                'Supertest',
                'Postman',
                'Netlify',
                'Fly.io',
                'Glitch',
              ].map((tool) => (
                <li
                  key={tool}
                  className="bg-skillBox rounded-lg shadow-md p-2 text-xl lg:text-2xl hover:bg-skillBoxHover transition-colors duration-200"
                  style={{ cursor: 'default', userSelect: 'none' }}
                >
                  <span style={{ cursor: 'default', userSelect: 'none' }}>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
