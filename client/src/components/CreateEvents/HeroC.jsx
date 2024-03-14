import img from "../../../public/heroimg.jpg";
function HeroC() {
  return (
    <section className=" h-dvh w-[90%] md:w-full flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-12">
      <div className="flex gap-4 flex-col w-full md:w-[50%]">
        <h1 className="text-4xl md:text-5xl font-bold">
          Créez votre billetterie en ligne en quelques clics
        </h1>
        <div>
          <h4 className="text-2xl font-bold">Billetterie & Inscription</h4>
          <p className=" text-justify ">
            Créez votre billetterie en ligne personnalisée, gérez simplement vos
            inscriptions, gagnez du temps et offrez une expérience mémorable à
            vos participants!
          </p>
        </div>
        <button className=" py-2 px-4 w-fit bg-blue-600 text-white rounded-md ">
          Creer un compte gratuitement
        </button>
      </div>
      <div className="md:w-[50%] w-full h-[25%] justify-center flex items-center">
        <img className=" w-full h-fit md:w-full md:h-fit" src={img} alt="" />
      </div>
      <div className=" absolute bottom-4 flex items-end">
        <span className="scroll-icon border-black border-[.1em] border-solid">
          <span className="scroll-icon__dot bg-black"></span>
        </span>
      </div>
    </section>
  );
}

export default HeroC;
