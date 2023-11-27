const Navbar = () => {
  return (
    <div className=" fixed w-full bg-[#C3BBB2]">
      <ul className=" flex items-center justify-between h-20gti border-[#9B968E] border-b-2 ">
        <li className="text-[14px] pl-8">Amsterdam. NL</li>
        <li>
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
            alt="logo"
            className="w-[141px]"
          />
        </li>
        <li>
          <p className="h-1 text-2xl font-bold pb-[9px] hover:cursor-pointer">
            —
          </p>
          <p className="leading-none pr-7 text-2xl font-semibold hover:cursor-pointer text-[#393734]">
            —
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
