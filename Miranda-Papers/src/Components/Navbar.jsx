const Navbar = () => {
  return (
    <div className=" fixed w-full">
      <ul className=" flex items-center justify-between h-20 border-[#6F6C66] border-b-2 ">
        <li className="text-xs pl-8 translate-x-">Amsterdam. NL</li>
        <li>
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
            alt="logo"
            className="w-32"
          />
        </li>
        <li>
          <p className="h-2 text-4xl hover:cursor-pointer">—</p>
          <p className="leading-none pr-9 text-4xl hover:cursor-pointer text-[#393734]">
            —
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
