import Head from "next/head";
import Banner from "../components/global/Banner/Banner";
import PageEnd from "../components/global/pageEnd/PageEnd";
import LeftLayout from "../components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";

export default function Complexe () {
  
    const layouts = [
        {
          title: "120m² de <span>Workout</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/global.jpg",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: false,
        },
        {
          title: "Cardio",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/assault.jpg",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: true,
        },
        {
          title: " Strength & <span>Power</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/power.jpg",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: false,
        },
        {
          title: "Mobility & <span>Explosiveness</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/mobility.jpg",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: true,
        },
        {
          title: "isolation & <span>stretching</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/elastic.jpg",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: false,
        },
        {
          title: "Specific",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/anneau.jpg",
          button: {
            link: "/planning",
            label: "Le planning",
          },
          left: true,
        },
      ];
  return (
    <div>
      <Head>
        <title>Dunes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="scroll">
        <Banner title="Environnement de qualité" imgSrc="/assets/img/complexe.jpg"/>
        {layouts.map((el, i) => {
          return el.left ? (
            <LeftLayout
              i={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              button={el.button}
            />
          ) : (
            <RightLayout
              i={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              button={el.button}
            />
          );
        })}
        <PageEnd video_url='/assets/video/complexe.mp4' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis.' title="Rejoindre Dunes"/>
      </main>
    </div>
  );
}