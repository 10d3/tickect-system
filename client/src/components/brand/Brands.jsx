import YT from '../../../public/youtube.png'
import SP from '../../../public/stripe.png'
import SY from '../../../public/spotify.png'
import GG from '../../../public/google.png'
import VA from '../../../public/visa.png'

function Brands() {

  const brands = [YT, SP, SY, GG, VA]
  return (
    <div className="w-full h-[23.5rem] flex justify-center items-center">
      <div className=" w-4/5 md:w-[66rem] h-full flex flex-col justify-center items-center">
        <div className="w-full h-1/2 flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold text-justify">Join these brands</h1>
          <p className=" text-justify ">We&apos;ve had the pleasure of working with industry-defining brands. These are just some of them.</p>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center gap-4 md:gap-10">
          {
            brands.map((brand, i) => (<img className=' w-[3rem] md:w-[4rem]' key={i} src={brand}></img>))
          }
        </div>
      </div>
    </div>
  );
}

export default Brands;
