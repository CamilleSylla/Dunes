import { useContext } from "react";
import Banner from "../components/global/Banner/Banner";
import Header from "../components/global/Head/Head";
import PageEnd from "../components/global/pageEnd/PageEnd";
import LeftLayout from "../components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";
import { FreeReservationsContext } from "../context/FreeReservation";

export default function Programmes () {
  const [active, setActive] = useContext(FreeReservationsContext);


    const layouts = [
        {
          title: "Functional <span>training</span>",
          desc: "Développer les compétences fondamentales de la motricité sportive (endurance cardio-vasculaire, endurance musculaire, vitesse, coordination, agilité, souplesse, mobilité, puissance, force). Ces entraînements sont accessibles à tous et à tous les niveaux comme chacun de nos programmes.",
          img: "/assets/img/aimel.webp",
          button: {
            link: "/plannings",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Haltérophilie <span>&</span> Gym",
          desc: "Tu désires améliorer tes entraînements functionnels. Ces classes te permettront d’accélérer ton processus d’apprentissage dans ces deux domaines fondamentaux des entraînements fonctionnels.",
          img: "/assets/img/box.webp",
          button: {
            link: "/plannings",
            label: "Reserver mon spot",
          },
          left: true,
        },
        {
          title: "Personal <span>trainer</span>",
          desc: "Ce programme te permet d’être encadré individuellement par nos coachs, un programme personnalisé sera établi en accord avec tes objectifs (performance, réhabilitation ou sport santé).",
          img: "/assets/img/ousmane.webp",
          button: {
            link: "/plannings",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Fit <span>&</span> Healthy",
          desc: "Si perdre du poids est ta priorité, tu as choisi le programme par excellence pour perdre du poids tout en gagnant en masse. Ce programme est composé de renforcement musculaire et d'exercices d'endurance à haute intensité. Pour ceux qui le désirent nous pouvons vous guider sur votre alimentation via nos partenaires nutrition.",
          img: "/assets/img/programmes.webp",
          button: {
            link: "/plannings",
            label: "Reserver mon spot",
          },
          left: true,
        },
        {
          title: "Open <span>training</span>",
          desc: "Ces créneaux sont ouverts aux personnes qui maîtrisent les fondamentaux, l’accès à ces créneaux doit être validé par nos coachs. Une fois validé, vous aurez donc libre accès à la salle. ",
          img: "/assets/img/papy.webp",
          button: {
            link: "/plannings",
            label: "Reserver mon spot",
          },
          left: false,
        },
      ];
  
  return (
    <div>

      <Header/>
      <main id="scroll">
        <Banner imgSrc="/assets/img/box.webp" title="ADAPTER VOTRE ENTRAINEMENT" />
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
              i={i}
              key={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              button={el.button}
            />
          );
        })}
        <div onClick={() => setActive(true)}>
        <PageEnd video_url='/assets/video/tarif.mp4' desc="N'hésitez pas à venir tester notre salle en faisant une demande de réservation via notre formulaire" title="Reservez votre essai gratuit"/>
        </div>
      </main>
    </div>
  );
}