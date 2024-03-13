import Brands from "../components/brand/Brands";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MakeYour from "../components/ownEvent/MakeYour";
import SearchBar from "../components/search/SearchBar";
import TopEvent from "../components/topEvent/TopEvent";
import UpComing from "../components/upComing/UpComing";

function Home() {
  const upCo = 'Upcoming Events'
  return (
    <div className=" bg-[#fefefe] m-0 p-0 h-auto w-dvw flex flex-col items-center ">
      <Hero />
      <SearchBar />
      <TopEvent />
      <UpComing data={upCo} />
      <MakeYour />
      <Brands />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
