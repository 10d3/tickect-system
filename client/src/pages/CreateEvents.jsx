import HeroC from "../components/CreateEvents/HeroC";
import Solution from "../components/CreateEvents/Solution";
import Brands from "../components/brand/Brands";

function CreateEvents() {
  const otherData = [
    {
      title: "La solution de billetterie à portée de tous.",
      desc: "Découvrez la plateforme de billetterie conçue pour simplifier votre expérience et celle de vos participants :",
    },
    {
      title: "La solution de billetterie à portée de tous.",
      desc: "Découvrez la plateforme de billetterie conçue pour simplifier votre expérience et celle de vos participants :",
    },
  ];
  const data = [
    [
      {
        title: "Expérience utilisateur optimale",
        content:
          "Profitez d’une expérience fluide sur tous les écrans, que vous soyez en train de configurer votre billetterie d’événement ou d’acheter un billet.",
      },
      {
        title: "Simplicité et rapidité de configuration",
        content:
          "Pas besoin d’être un expert en billetterie ! Configurez votre événement et commencez à vendre des billets en quelques minutes.",
      },
      {
        title: "Formulaires intuitifs et sur-mesure",
        content:
          "Créez autant de formulaires que vous le souhaitez pour récupérer les informations qui vous intéressent. Utilisez ces données pour les afficher sur vos billets ou exploitez les pour réaliser vos opérations marketing et mieux répondre aux attentes de votre public.",
      },
      {
        title: "Accompagnement personnalisé",
        content:
          "Que vous ayez besoin d’aide pour les réglages ou pour choisir les meilleures options pour votre événement, notre équipe qualifiée est là pour vous guider. Nous sommes disponibles via téléphone, e-mail et chat pour assurer votre succès à chaque étape.",
      },
    ],
    [
      {
        title: "Expérience utilisateur optimale",
        content:
          "Profitez d’une expérience fluide sur tous les écrans, que vous soyez en train de configurer votre billetterie d’événement ou d’acheter un billet.",
      },
      {
        title: "Simplicité et rapidité de configuration",
        content:
          "Pas besoin d’être un expert en billetterie ! Configurez votre événement et commencez à vendre des billets en quelques minutes.",
      },
      {
        title: "Formulaires intuitifs et sur-mesure",
        content:
          "Créez autant de formulaires que vous le souhaitez pour récupérer les informations qui vous intéressent. Utilisez ces données pour les afficher sur vos billets ou exploitez les pour réaliser vos opérations marketing et mieux répondre aux attentes de votre public.",
      },
      {
        title: "Accompagnement personnalisé",
        content:
          "Que vous ayez besoin d’aide pour les réglages ou pour choisir les meilleures options pour votre événement, notre équipe qualifiée est là pour vous guider. Nous sommes disponibles via téléphone, e-mail et chat pour assurer votre succès à chaque étape.",
      },
    ],
    [
      {
        title: "Expérience utilisateur optimale",
        content:
          "Profitez d’une expérience fluide sur tous les écrans, que vous soyez en train de configurer votre billetterie d’événement ou d’acheter un billet.",
      },
      {
        title: "Simplicité et rapidité de configuration",
        content:
          "Pas besoin d’être un expert en billetterie ! Configurez votre événement et commencez à vendre des billets en quelques minutes.",
      },
      {
        title: "Formulaires intuitifs et sur-mesure",
        content:
          "Créez autant de formulaires que vous le souhaitez pour récupérer les informations qui vous intéressent. Utilisez ces données pour les afficher sur vos billets ou exploitez les pour réaliser vos opérations marketing et mieux répondre aux attentes de votre public.",
      },
      {
        title: "Accompagnement personnalisé",
        content:
          "Que vous ayez besoin d’aide pour les réglages ou pour choisir les meilleures options pour votre événement, notre équipe qualifiée est là pour vous guider. Nous sommes disponibles via téléphone, e-mail et chat pour assurer votre succès à chaque étape.",
      },
    ],
  ];

  return (
    <div className=" bg-[#fefefe] h-full w-full flex flex-col items-center overscroll-x-none">
      <div className="md:max-w-[70%] w-full items-center flex flex-col gap-4 justify-center">
        <HeroC />
        <Brands />
        {data.map((item, i) => (
          <Solution key={i} data1={item} idx = {i} />
        ))}
      </div>
    </div>
  );
}

export default CreateEvents;
