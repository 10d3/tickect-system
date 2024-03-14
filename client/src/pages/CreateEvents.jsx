import img from '../../public/heroimg.jpg'
function CreateEvents() {
  return (
    <div className=" bg-[#fefefe] h-fit w-full flex flex-col items-center overscroll-x-none">
      <div className="md:w-[66rem] w-[90%] flex flex-col gap-4 justify-center">
        <section className="h-dvh w-full flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-4">
          <div>
            <h1>Créez votre billetterie en ligne en quelques clics</h1>
            <div>
              <h4>Billetterie & Inscription</h4>
              <p>
                Créez votre billetterie en ligne personnalisée, gérez simplement
                vos inscriptions, gagnez du temps et offrez une expérience
                mémorable à vos participants !
              </p>
            </div>
          </div>
          <div className="md:w-[25%] h-[25%]">
            <img className='w-fit h-full' src={img} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateEvents;
