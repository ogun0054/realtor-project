function Header() {
  return (
    <div className="bg-white border-b-1 shadow-sm sticky top-0 z-50 h-10">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto mt-5">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>

        <div>
          <ul className="flex space-x-10 ">
            <li className="hover:bg-black-700 hover:border-b-2 hover:color-">
              Home
            </li>
            <li>Offers</li>
            <li>SignIn</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
