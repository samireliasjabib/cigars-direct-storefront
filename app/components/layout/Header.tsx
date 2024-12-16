const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Logo</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
