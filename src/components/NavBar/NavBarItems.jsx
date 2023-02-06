const NavBarItems = (props) => {
  const closeMenuHandler = () => {
    props.onSetIsOpen(false);
  };
  return (
    <nav>
      <ul>
        <li>
          <a href="/#home" onClick={closeMenuHandler}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={closeMenuHandler}>
            About Me
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={closeMenuHandler}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={closeMenuHandler}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarItems;
