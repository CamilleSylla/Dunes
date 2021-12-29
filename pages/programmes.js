import Head from "next/head";
import Banner from "../components/global/Banner/Banner";
import PageEnd from "../components/global/pageEnd/PageEnd";
import LeftLayout from "../components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";

export default function Programmes () {

    const layouts = [
        {
          title: "Cross <span>training</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Haltero",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: true,
        },
        {
          title: "Personal <span>trainer</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Rehab",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: true,
        },
        {
          title: "Fit <span>&</span> Healthy",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Gym",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: true,
        },
        {
          title: "Open <span>training</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Kids <span>3 - 5ans</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: true,
        },
        {
          title: "Functional <span>Bodybuilding</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
          },
          left: false,
        },
        {
          title: "Cross <span>Team</span>",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
          img: "/assets/img/intensity.jpeg",
          button: {
            link: "",
            label: "Reserver mon spot",
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
        <Banner imgSrc="/assets/img/programmes.webp" title="Adaptée votre entrainement" />
        {layouts.map((el, i) => {
          return el.left ? (
            <LeftLayout
              i={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              buttonString={el.button.label}
            />
          ) : (
            <RightLayout
              i={i}
              img={el.img}
              title={el.title}
              desc={el.desc}
              buttonString={el.button.label}
            />
          );
        })}
        <PageEnd video_url='/assets/video/tarif.mp4' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis.' title="Reservez votre essaie gratuit"/>
      </main>
    </div>
  );
}