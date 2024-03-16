import { useState } from "react";
import img from "../../../public/heroimg.jpg";

function Solution({data1 , idx}) {
  const otherData = {
    title: "La solution de billetterie à portée de tous.",
    desc: "Découvrez la plateforme de billetterie conçue pour simplifier votre expérience et celle de vos participants :",
  };
  // const data = [
  //   {
  //     title: "Expérience utilisateur optimale",
  //     content:
  //       "Profitez d’une expérience fluide sur tous les écrans, que vous soyez en train de configurer votre billetterie d’événement ou d’acheter un billet.",
  //   },
  //   {
  //     title: "Simplicité et rapidité de configuration",
  //     content:
  //       "Pas besoin d’être un expert en billetterie ! Configurez votre événement et commencez à vendre des billets en quelques minutes.",
  //   },
  //   {
  //     title: "Formulaires intuitifs et sur-mesure",
  //     content:
  //       "Créez autant de formulaires que vous le souhaitez pour récupérer les informations qui vous intéressent. Utilisez ces données pour les afficher sur vos billets ou exploitez les pour réaliser vos opérations marketing et mieux répondre aux attentes de votre public.",
  //   },
  //   {
  //     title: "Accompagnement personnalisé",
  //     content:
  //       "Que vous ayez besoin d’aide pour les réglages ou pour choisir les meilleures options pour votre événement, notre équipe qualifiée est là pour vous guider. Nous sommes disponibles via téléphone, e-mail et chat pour assurer votre succès à chaque étape.",
  //   },
  // ];

  const changeF = idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row';

  const dat = data1

  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className= {`w-[90%] h-fit flex flex-col-reverse mb-4 justify-between ${changeF}`} >
      <div className=" w-full h-full md:w-[45%] flex justify-center items-center" >
        <img className=" h-fit w-full " src={img} alt="" />
      </div>
      <div className=" w-full h-fit md:w-[45%] flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold ">{otherData.title}</h1>
          <p>{otherData.desc}</p>
        </div>
        <div className="h-fit">
          {dat.map((item, i) => {
            return (
              <div
                className="bg-blue-200 my-4 rounded-md h-fit gap-4 flex flex-col"
                key={i}
              >
                <div
                  className="flex flex-row justify-between items-center cursor-pointer p-4"
                  onClick={() => {
                    toggle(i);
                  }}
                >
                  <h2 className=" text-xl font-bold ">{item.title}</h2>
                  {/* <span>{selected === i ? "-" : "+"}</span> */}
                  {selected === i ? (
                    <i className="fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                  )}
                </div>
                <div className={selected === i ? "flex h-fit p-4" : "hidden"}>
                  <p className=" text-justify ">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-blue-500 px-4 py-2 w-1/2 mb-4 rounded-md text-white">
          Creer une billetterie
        </button>
      </div>
    </section>
  );
}

export default Solution;
