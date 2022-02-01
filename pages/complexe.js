import Banner from "../components/global/Banner/Banner";
import Header from "../components/global/Head/Head";
import PageEnd from "../components/global/pageEnd/PageEnd";
import LeftLayout from "../components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";

export default function Complexe () {
  
    const layouts = [
        {
          title: "120m² de <span>Workout</span>",
          desc: "",
          img: "/assets/img/global.webp",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: false,
        },
        {
          title: "Cardio",
          desc: "",
          img: "/assets/img/assault.webp",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: true,
        },
        {
          title: " Strength & <span>Power</span>",
          desc: "",
          img: "/assets/img/power.webp",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: false,
        },
        {
          title: "Mobility & <span>Explosiveness</span>",
          desc: "",
          img: "/assets/img/mobility.webp",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: true,
        },
        {
          title: "isolation & <span>stretching</span>",
          desc: "",
          img: "/assets/img/elastic.webp",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: false,
        },
        {
          title: "Specific",
          desc: "",
          img: "/assets/img/anneau.webp",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: true,
        },
      ];
  return (
    <div>
     <Header/>
      <main id="scroll">
        <Banner title="Environnement de qualité" imgSrc="/assets/img/complexe.webp"/>
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
        <PageEnd video_url='/assets/video/complexe.mp4' url="/contact" desc="N'attendez plus ! Rejoingnez nous pour reussir vos objectifs et vous surpasser" title="Rejoindre Dunes"/>
      </main>
    </div>
  );
}