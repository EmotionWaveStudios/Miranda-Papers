const Main1 = () => {
  return (
    <div className="w-11/12 mx-auto flex gap-6">
      <div id="col" className="w-2/3">
        <h1 className="font-bold text-md">INTERACTIVE</h1>
        <h1 className="font-bold text-lg my-11">ARTIST!</h1>
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
          alt="half head"
          className="mb-20"
        />

        <div className="flex">
          <p className="bg-black text-white text-lg py-7 px-5">A</p>
          <p className="text-md-[20px] ">
            s a multidisciplinary freelancer, I'm passionate about creating
            iconic digital experiences through motion, typography, and creative
            coding for companies and agencies around the world.
          </p>
        </div>
      </div>

      <div id="col">
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
          alt="mugshot like ha;f head"
        />
        <h1>DIGITAL ART DIRECTOR</h1>
        <h1>INTERACTIVE DESIGNER</h1>
        <h1>CREATIVE DEVELOPER</h1>
        <h1>BASED IN AMSTERDAM, NL.</h1>
      </div>
    </div>
  );
};

export default Main1;
