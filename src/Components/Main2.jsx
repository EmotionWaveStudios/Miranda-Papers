const Main2 = () => {
  return (
    <div id="container" className="w-[96%] mx-auto mt-20 flex">
      <div id="col1" className="tracking-tighter w-2/3 pr-10">
        <div id="mini-container" className="flex mb-10">
          <div id="card" className="w-2/5 pr-10">
            <h2 className="text-[70px] font-normal font-Canopee tracking-tighter">
              UP<span className="font-CondMedium">C</span>
              <span className="font-CondMedium">O</span>MIN
              <span className="font-CondMedium">G</span> NEXT
            </h2>
            <h3 className="text-4xl py-8">
              Fresh entry - A selected work from the latest digital releases.
            </h3>
            <p className="text-lg">
              <span className="font-Canopee">TIP!</span> Click on the image to
              explore
            </p>
          </div>

          <div id="card" className="w-3/5 border-l-[1px] border-black pl-10">
            <img
              src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5c79f349770ebcc28ec4_thumbnail-small.webp?"
              alt="man in hat"
              className="w-[85%]"
            />
            <h3 className="tracking-tighter font-Canopee text-3xl py-2">
              UNEXPE<span className="font-CondMedium">C</span>TED TIME
            </h3>
            <p className="text-xl w-[85%]">
              Unexpected Time is a classic-futiristic gamification web
              experience showcasing the lost history & culture in a world
              dominated by the virtual reality.
            </p>
          </div>
        </div>
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg"
          alt="half and half"
        />
      </div>

      <div
        id="col2"
        className="w-1/3 border-l-[1px] tracking-tighter border-black pl-10"
      >
        <h1 className="tracking-tighter font-normal font-Canopee text-[115px] pb-24 pt-8">
          THINK, <span className="font-CondMedium">C</span>REATE
        </h1>
        <h1 className="font-normal font-Canopee text-[220px] tracking-tighter pb-32">
          DELIVER
        </h1>

        <p className="text-4xl">
          <span>A</span> strong project is created by deep collaboration. I
          design, develop, and deliver websites that drive results and win
          awards.
        </p>

        <p className="text-4xl pt-10">
          Like an artisan, I like to start from raw matter and giv life to and
          iconic product that makes your brand stand out, starting from a Visual
          Strategy that guide the client's vision to reality.
        </p>

        <button className="font-Canopee bg-[#C8BFB5] border-[#9E9890] border-2 rounded-[50%] w-[100%] h-[150px] text-8xl mt-10">
          ALL W<span className="font-CondMedium">O</span>RK
        </button>
      </div>
    </div>
  );
};

export default Main2;
