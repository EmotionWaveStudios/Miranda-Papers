import Awards from "./Components/Awards";
import ArtisanBanner from "./Components/ArtisanBanner";
import Footer from "./Components/Footer";
import HorizontalList from "./Components/HorizontalList";
import Main1 from "./Components/Main1";
import Main2 from "./Components/Main2";
import Main3 from "./Components/Main3";
import MirandaBanner from "./Components/MirandaBanner";
import Navbar from "./Components/Navbar";
import QuoteCards from "./Components/QuoteCards";
import WebsiteBanner from "./Components/WebsiteBanner";

const App = () => {
  return (
    <div
      id="main-page"
      className="bg-[#C3BBB2] m-0 p-0 box-border font-NewLight font-light leading-10"
    >
      <Navbar />
      <HorizontalList />
      <MirandaBanner />
      <Main1 />
      <WebsiteBanner />
      <Main2 />
      <Awards />
      <Main3 />
      <ArtisanBanner />
      <QuoteCards />
    </div>
  );
};

export default App;
