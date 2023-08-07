const QuoteCards = () => {
  return (
    <div className="w-[96%] mx-auto mt-14">
      <div id="main-container" className="flex">
        <div className="w-[44%] border-black border-[3px] rounded-xl h-96">
          <div
            id="card"
            className="border-black border-[2px] m-3 rounded-xl border-dashed"
          >
            <p className="p-10">
              <u className="text-4xl tracking-tighter ">
                "Blurring the line between design & dev, Niccoli has an
                unmatched eye for detail and precise execution in his words
                which pushes the whole industry forward"
              </u>
            </p>
            <div id="source" className="px-10 pb-5 flex">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/6172987a792f18104ce0ce14_sam-day.jpg"
                alt="sam day"
                className="rounded-[50%] w-[50px] h-[50px] mr-3 mt-3 border-black border-[1px]"
              />
              <div id="source-details">
                <h3 className="tracking-tighter font-Canopee text-4xl">
                  SAM DAY
                </h3>
                <p className="tracking-tighter text-2xl">
                  Creative Director & Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[44%] border-black border-[3px] rounded-xl h-96">
          <div
            id="card"
            className="border-black border-[2px] m-3 rounded-xl border-dashed"
          >
            <p className="p-10">
              <u className="text-4xl tracking-tighter ">
                "Niccoli's eye for detail and design as well as his impeccable
                aesthetics, make him one the leaders in today's digital scene"
              </u>
            </p>
            <div id="source" className="px-10 py-8 flex">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/615b54ee54045a4769f04eba_sofia-papadopoulou.jpg"
                alt="sofia"
                className="rounded-[50%] w-[50px] h-[50px] mr-3 mt-3 border-black border-[1px]"
              />
              <div id="source-details">
                <h3 className="tracking-tighter font-Canopee text-4xl">
                  S<span className="font-CondMedium">O</span>FIA PAPAD
                  <span className="font-CondMedium">O</span>P
                  <span className="font-CondMedium">O</span>UL
                  <span className="font-CondMedium">O</span>U
                </h3>
                <p className="tracking-tighter text-2xl">
                  Designer & Art Director
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[44%] border-black border-[3px] rounded-xl h-96">
          <div
            id="card"
            className="border-black border-[2px] m-3 rounded-xl border-dashed"
          >
            <p className="p-10">
              <u className="text-4xl tracking-tighter ">
                "High-skilled designer who creates novel experiences with ease
                and craft. His signature is more vivid on each new project he
                launches and this is only the start"
              </u>
            </p>
            <div id="source" className="px-10 pb-5 flex">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/615b54ee0df682e04e089676_bruno-arizio.jpg"
                alt="bruno"
                className="rounded-[50%] w-[50px] h-[50px] mr-3 mt-3 border-black border-[1px]"
              />
              <div id="source-details">
                <h3 className="tracking-tighter font-Canopee text-4xl">
                  BRUN<span className="font-CondMedium">O</span> ARIZI
                  <span className="font-CondMedium">O</span>
                </h3>
                <p className="tracking-tighter text-2xl">
                  Creative Director at{" "}
                  <span>
                    <u>Studio BA</u>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[44%] border-black border-[3px] rounded-xl h-96">
          <div
            id="card"
            className="border-black border-[2px] m-3 rounded-xl border-dashed"
          >
            <p className="p-10">
              <u className="text-4xl tracking-tighter ">
                "A very promising Creative Director and Interactive Designer
                given his natural aesthetic taste and innate instinct for
                functionality"
              </u>
            </p>
            <div id="source" className="px-10 pb-5 flex">
              <img
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/615b54ee9805af64275d2b44_enea-rossi.jpg"
                alt="rossi"
                className="rounded-[50%] w-[50px] h-[50px] mr-3 mt-3 border-black border-[1px]"
              />
              <div id="source-details">
                <h3 className="tracking-tighter font-Canopee text-4xl">
                  ENEA R<span className="font-CondMedium">O</span>SSI
                </h3>
                <p className="tracking-tighter text-2xl">
                  Co-Founder at{" "}
                  <span>
                    <u>Adoratorio</u>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCards;
