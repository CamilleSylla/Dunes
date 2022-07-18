import Banner from "../components/global/Banner/Banner";
import Header from "../components/global/Head/Head";
import LeftLayout from "../components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";

export default function Home() {
  const layouts = [
    {
      title: "Accompagnement vers <span>vos objectifs</span>",
      desc: "Tu veux perdre du poids ? Tu veux prendre de la masse musculaire ? Tu veux passer un cap dans ta pratique sportive ? Tu désires découvrir les entraînements fonctionnels ?",
      img: "/assets/img/home_first.png",
      button: {
        link: "/programmes",
        label: "Nos programmes",
      },
      left: false,
    },
    {
      title: "staff de <span>qualité</span>",
      desc: "Nos coachs vous accompagnent lors des séances afin de vous aider à atteindre vos objectifs grâce à leur méthode unique sur la ville de Saint-Quentin.",
      img: "/assets/img/home_two.png",
      button: {
        link: "/staff",
        label: "Voir le staff",
      },
      left: true,
    },

    {
      title: "Notre <span>complexe</span>",
      desc: "Dunes vous accueille du lundi au samedi, dans un espace de 200 m². Un lieu chaleureux, familial où vous pourrez développer et découvrir votre plein potentiel.",
      img: "/assets/img/home_three.png",
      button: {
        link: "/complexe",
        label: "Le complexe",
      },
      left: false,
    },
    {
      title: "prix <br/><span>flexibles</span>",
      desc: "Dunes propose à ses adhérents des forfaits adaptés en fonction des séances que vous voulez effectuer dans la semaine. Qu'attendez-vous pour atteindre vos objectifs ?",
      img: "/assets/img/home_four.png",
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
