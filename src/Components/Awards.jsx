const Awards = () => {
  return (
    <div className="w-[96%] mx-auto text-[#1C1C19] tracking-tighter">
      <hr className="my-16 bg-[#6E6A64] py-[1px]" />
      <div id="container" className="flex justify-evenly gap-16">
        <div id="card" className="flex">
          <div>
            <p className="text-3xl text-center">SITE OF THE DAY</p>
            <h2 className="font-Canopee text-7xl text-center tracking-tighter">
              AWARDS
            </h2>
          </div>
          <h1 className="text-9xl px-2">9</h1>
        </div>

        <div id="card" className="flex">
          <div>
            <p className="text-3xl text-center">SITE OF THE MONTH</p>
            <h2 className="font-Canopee text-7xl text-center tracking-tighter">
              WINNERS
            </h2>
          </div>
          <h1 className="text-9xl px-2">1</h1>
        </div>

        <div id="card" className="flex">
          <div>
            <p className="text-3xl text-center">FWA OF THE DAY</p>
            <h2 className="font-Canopee text-7xl text-center tracking-tighter">
              AWARDS
            </h2>
          </div>
          <h1 className="text-9xl px-2">6</h1>
        </div>

        <div id="card" className="flex">
          <div>
            <p className="text-3xl text-center">ACCLAIMED</p>
            <h2 className="font-Canopee text-7xl text-center tracking-tighter">
              MENTI<span className=" font-CondMedium">O</span>NS
            </h2>
          </div>
          <h1 className="text-9xl px-2">8</h1>
        </div>
      </div>
      <hr className="my-5 bg-[#6E6A64] py-[1px]" />
    </div>
  );
};

export default Awards;
