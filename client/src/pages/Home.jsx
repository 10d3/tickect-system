import Brands from "../components/brand/Brands";
import Hero from "../components/hero/Hero";
import MakeYour from "../components/ownEvent/MakeYour";
import SearchBar from "../components/search/SearchBar";
import TopEvent from "../components/topEvent/TopEvent";
import UpComing from "../components/upComing/UpComing";

function Home() {
  const upCo = 'Upcoming Events'
  return (
    <div className=" bg-[#fefefe] m-0 p-0 h-auto w-[100%] flex flex-col items-center overscroll-x-none">
      <Hero />
      <SearchBar />
      <TopEvent />
      <UpComing data={upCo} />
      <MakeYour />
      <Brands />
    </div>
  );
}

export default Home;
