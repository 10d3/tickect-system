import img from "../../../public/heroimg.jpg";
import { useParams } from "react-router-dom";

function EventsDetails() {
  const params = useParams();

  return (
    <div className="  bg-[#fefefe] m-0 p-0 h-fit w-full flex flex-col justify-center items-center text-black px-4 md:mb-8">
      <h1 className=" mt-[5rem] pb-10 flex left-0">
        events title
      </h1>
      <div className="md:w-[66rem] flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col w-full md:w-2/3 gap-4">
            <img className=" rounded-md " src={img} alt="" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                sint, voluptatibus provident hic error ab magni atque nihil nam,
                sequi quod inventore necessitatibus libero! Aliquid laborum
                atque voluptatem aut consequuntur! Mollitia ipsam et ullam
                deserunt eius. Pariatur inventore, at voluptatum accusantium
                neque corrupti beatae ducimus earum ab! Modi quam nulla
                doloremque eaque totam consectetur at, dignissimos eveniet iure
                tempora aliquid. Sunt, harum! Inventore, autem distinctio fugit
                unde ad id vitae tempore nobis perferendis quod minus facere
                magnam blanditiis. Totam mollitia nesciunt laboriosam eum
                quisquam sequi laudantium soluta amet non cumque. Enim
                repellendus rerum ullam molestias, ad quod necessitatibus eum
                dolor a.
              </p>
            </div>
          </div>
          <div>
            <h2>Speacker</h2>
            <div>Carroussel</div>
          </div>
          <div>get ticket</div>
          <div>
            <h1>FAQ</h1>
            <div>faq question</div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 gap-3 ">
          <div className="bg-blue-100 w-full flex flex-col items-center rounded-sm">
            <h1>Details</h1>
            <div>
                <div className="flex flex-row gap-3">
                    <span>log</span>
                    <h1>date</h1>
                </div>
                <div className="flex flex-row gap-3">
                    <span>log</span>
                    <h1>date</h1>
                </div>
                <div className="flex flex-row gap-3">
                    <span>log</span>
                    <h1>date</h1>
                </div>
                <div className="flex flex-row gap-3">
                    <span>log</span>
                    <h1>date</h1>
                </div>
                <div className="flex flex-row gap-3">
                    <span>log</span>
                    <h1>date</h1>
                </div>
                <div className="flex flex-row gap-3">
                    <span>log</span>
                    <h1>date</h1>
                </div>
            </div>
          </div>
          <div className="bg-blue-100 w-full flex flex-col items-center rounded-sm">
            <div className="flex flex-col gap-2">
                <h1>organizer</h1>
                <p>Joe</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1>organizer</h1>
                <p>Joe</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1>organizer</h1>
                <p>Joe</p>
            </div>
          </div>
          <div className=" py-8 mb-8 md:mb-0 bg-blue-100 w-full flex flex-col items-center rounded-sm">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsDetails;
