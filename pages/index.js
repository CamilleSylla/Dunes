import Banner from "../components/global/Banner/Banner";
import Header from "../components/global/Head/Head";
import LeftLayout from "../components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";

export default function Home() {
  const layouts = [
    {
      title: "Accompagnement vers <span>vos objectifs</span>",
      desc: "Tu veux perdre du poids ? Tu veux prendre de la masse musculaire ? Tu veux passer un cap dans ta pratique sportive ? Tu désires découvrir les entraînements fonctionnels ?",
      img: "https://frozen-atoll-08461.herokuapp.com/uploads/large_DSC_08056_min_3479232ad1.jpg?115444.69999998808",
      button: {
        link: "/programmes",
        label: "Nos programmes",
      },
      left: false,
    },
    {
      title: "staff de <span>qualité</span>",
      desc: "Nos coachs vous accompagnent lors des séances afin de vous aider à atteindre vos objectifs grâce à leur méthode unique sur la ville de Saint-Quentin.",
      img: "https://frozen-atoll-08461.herokuapp.com/uploads/large_DSC_01390_min_2414f61bc0.jpg?115445.60000002384",
      button: {
        link: "/staff",
        label: "Voir le staff",
      },
      left: true,
    },

    {
      title: "Notre <span>complexe</span>",
      desc: "Dunes vous accueille du lundi au samedi, dans un espace de 200 m². Un lieu chaleureux, familial où vous pourrez développer et découvrir votre plein potentiel.",
      img: "https://frozen-atoll-08461.herokuapp.com/uploads/large_DSC_08040_min_b5722b2573.jpg?306307.40000003576",
      button: {
        link: "/complexe",
        label: "Le complexe",
      },
      left: false,
    },
    {
      title: "prix <br/><span>flexibles</span>",
      desc: "Dunes propose à ses adhérents des forfaits adaptés en fonction des séances que vous voulez effectuer dans la semaine. Qu'attendez-vous pour atteindre vos objectifs ?",
      img: "https://frozen-atoll-08461.herokuapp.com/uploads/large_DSC_09206_min_c65412ada3.jpeg?115446.40000003576",
      button: {
        link: "/tarifs",
        label: "Decouvrir nos forfaits",
      },
      left: true,
    },
  ];

  return (
    <div>
      <Header/>
      <main id="scroll">
        <Banner 
        phrase="Centre de fitness situé à Saint-Quentin dans l'Aisne, venez accomplir vos objectifs grâce à nos programmes d'entraînement adaptés à chacun."
        videoSrc="/assets/video/DunesPromo.mp4"
        />
        {layouts.map((el, i) => {
          return el.left ? (
            <LeftLayout
            key={i}
              i={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              button={el.button}
            />
          ) : (
            <RightLayout
            key={i}
              i={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              button={el.button}
            />
          );
        })}
      </main>
    </div>
  );
}
