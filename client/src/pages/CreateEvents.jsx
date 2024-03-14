
import HeroC from "../components/CreateEvents/HeroC";
import Solution from "../components/CreateEvents/Solution";
import Brands from "../components/brand/Brands";
function CreateEvents() {
  return (
    <div className=" bg-[#fefefe] h-fit w-full flex flex-col items-center overscroll-x-none">
      <div className="md:w-[66rem] w-full items-center flex flex-col gap-4 justify-center">
        <HeroC />
        <Brands />
        <Solution />
      </div>
    </div>
  );
}

export default CreateEvents;
