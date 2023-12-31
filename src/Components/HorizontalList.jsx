const HorizontalList = () => {
  return (
    <div id="container" className=" w-[97%] mx-auto pt-28 pb-6 flex gap-10">
      {/* <div id="card" className=" border-black border-2 w-1/3">
        <img
          src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/61cdc506856e75d4b33cd9bd_thumbnail-small.jpeg?"
          alt="books of ye"
        />
        <h3>BOOKS OF YE</h3>
        <p className="">
          The Books of Ye is a conceptual NFT web experience depicting the five
          Books of Moses, in which each instance of God is replaced with Ye
          (Kanye West).
        </p>
      </div>

      <div id="card" className="border-black border-2 w-1/3 ">
        <img
          src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/621f2de86891ea03211fe874_thumbnail-small.jpeg?"
          alt="om swami"
        />
        <h3>OM SWAMI</h3>
        <p>
          Om Swami is a spiritual leader, bestselling author and serial
          entrepreneur who resides in the Himalayans foothills.
        </p>
      </div> */}

      <div id="card" className=" w-1/3 border-black">
        <img
          src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
          alt="avro-ko"
          className=""
        />
        <div id="mix-size-title" className="flex">
          <h3>AVRO</h3>
          <h3>|</h3>
          <h3>
            KO <span>NEW</span>
          </h3>
        </div>
        <p>
          AvroKO is an award-winning global design firm, established itself as a
          global leader in interior architecture for hospitality, restaurant and
          bars.
        </p>
      </div>

      <div
        id="middle-card"
        className="w-1/3 text-center border-[#9B968E] border-x-2"
      >
        <h1 className=" text-7xl py-8 font-CondMedium">ALL WORK!</h1>
        <h2 className=" text-4xl">
          A Featured selection the latest work of the last years.
        </h2>
        {/* <p className=" text-3xl">
          <span>TIP!</span> Drag sideways to navigate
        </p> */}
      </div>

      <div id="card" className="w-1/3  border-black">
        <img
          src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
          alt="the roger hub"
        />
        <h3>
          THE ROGER HUB <span>NEW</span>
        </h3>
        <p>
          The Roger Hub is an immersive web experience showcasingg the
          tennis-inspired 'On' sneakers, a collaboration born out of a
          partnership with the legendary Roger Federer.
        </p>
      </div>

      {/* <div id="card" className="w-1/3 border-black border-2">
        <img
          src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/647dc0777b1a5df29f8e5a58_thumbnail-small.webp?"
          alt="wow concept"
        />
        <h3>
          WOW CONCEPT <span>NEW</span>
        </h3>
        <p>
          WOW Concept is a world's first concept store based in Madrdi
          revolutionizing retail with a dynamic and interactive shopping
          experirence.
        </p>
      </div>

      <div id="card" className="w-1/3 border-black border-2">
        <img
          src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d965c7d1e647b4cb97b73_thumbnail-small.jpeg?"
          alt="prada"
        />
        <h3>PRADA®</h3>
        <p>
          Prada Employees online store is an eCommerce outlet gathering previous
          Prada's collection seasons on a minimalist-based design.
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalList;
