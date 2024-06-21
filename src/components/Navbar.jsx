const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-5">
      <a href="#" className="text-2xl font-bold">
        Joshua Foti
      </a>
      <div className="flex flex-row gap-5">
        <a href="#" className="hover:text-customHover text-xl">
          Home
        </a>
        <a href="#about" className="hover:text-customHover text-xl">
          About
        </a>
        <a href="#contact" className="hover:text-customHover text-xl">
          Contact
        </a>
        <a href="#resume" className="hover:text-customHover text-xl">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
