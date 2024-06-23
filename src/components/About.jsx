const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center text-center p-5 bg-customBackground gap-5 w-full max-w-screen-lg"
    >
      <div className="flex flex-col items-center md:w-2/3">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Hi! I&apos;m Joshua Foti, a Web Developer based in Panama City, FL. I specialize in
          building seamless user experiences using technologies like JavaScript, React, and Node.js.
          My skills in database management with MongoDB and SQL, along with experience in version
          control, testing, and deployment, equip me to tackle any web development project.
        </p>
        <p className="text-xl mb-8 max-w-2xl">
          I thrive in collaborative environments and seek opportunities to grow as a developer
          within a team that values creativity, innovation, and excellence.
        </p>
        <p className="text-xl mb-8 max-w-2xl">
          Outside of work, you&apos;ll find me watching hockey, exercising, or indulging in my love
          for film and traveling. Let&apos;s connect and start building.
        </p>
      </div>
      <div className="flex flex-col items-center md:w-1/3 mt-8 md:mt-0 space-y-4">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-2 justify-center">
            {['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'SQL', 'HTML', 'CSS'].map(
              (skill) => (
                <li
                  key={skill}
                  className="bg-skillBox rounded-lg shadow-md p-2 text-xl hover:bg-skillBoxHover transition-colors duration-200"
                  style={{ cursor: 'default', userSelect: 'none' }}
                >
                  <span style={{ cursor: 'default', userSelect: 'none' }}>{skill}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Tools</h2>
          <ul className="flex flex-wrap gap-2 justify-center">
            {[
              'GitHub',
              'Vitest',
              'Jest',
              'Supertest',
              'Postman',
              'Netlify',
              'Fly.io',
              'Glitch',
            ].map((tool) => (
              <li
                key={tool}
                className="bg-skillBox rounded-lg shadow-md p-2 text-xl hover:bg-skillBoxHover transition-colors duration-200"
                style={{ cursor: 'default', userSelect: 'none' }}
              >
                <span style={{ cursor: 'default', userSelect: 'none' }}>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
