const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between items-center p-5 bg-customBackground backdrop-blur-md bg-opacity-70">
      <a href="#" className="text-2xl font-bold">
        Joshua Foti
      </a>
      <div className="flex flex-row gap-5">
        <a href="#projects" className="hover:text-customHover text-xl">
          Projects
        </a>
        <a href="#about" className="hover:text-customHover text-xl">
          About
        </a>
        <a href="#contact" className="hover:text-customHover text-xl">
          Contact
        </a>
        <a
          href="public/JoshuaFotiResume.pdf"
          className="hover:text-customHover text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
