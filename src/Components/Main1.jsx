const Main1 = () => {
  return (
    <div className="w-[96%] mx-auto flex gap-6 text-[#1B1B19]">
      <div id="col1" className="w-2/3 pr-4">
        <h1 className="font-medium text-9xl tracking-tighter font-Canopee  ">
          INTERA<span className="font-CondMedium">C</span>TIVE
        </h1>
        <h1 className="font-normal text-[220px] tracking-tighter font-Canopee py-14 mb-11">
          ARTIST!
        </h1>
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
          alt="half head"
          className="mb-20 border-black border-[1px]"
        />

        <div className="">
          <p className="bg-black text-white text-7xl pt-3 px-1 inline-block">
            A
          </p>
          <p className="text-4xl">
            s a multidisciplinary freelancer, I'm passionate about creating
            iconic digital experiences through motion, typography, and creative
            coding for companies and agencies around the world.
          </p>
        </div>
      </div>

      <div
        id="col2"
        className="tracking-[-0.4em] border-l-[1px] border-black pl-10"
      >
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
          alt="mugshot like half head"
          className="border-black border-[1px]"
        />
        <h1 className="text-9xl pt-7 font-Canopee font-medium ">
          DI<span className="font-CondMedium">G</span>ITAL ART DIRE
          <span className="font-CondMedium">C</span>T
          <span className="font-CondMedium">O</span>R
        </h1>
        <h1 className="text-9xl font-Canopee font-medium">
          INTERA<span className="font-CondMedium">C</span>TIVE DESI
          <span className="font-CondMedium">G</span>NER
        </h1>
        <h1 className="text-9xl font-Canopee font-medium">
          <span className="font-CondMedium">C</span>REATIVE DEVEL
          <span className="font-CondMedium">O</span>PER
        </h1>
        <h1 className="text-9xl font-Canopee font-medium">
          BASED IN AMSTERDAM, NL.
        </h1>
      </div>
    </div>
  );
};

export default Main1;
