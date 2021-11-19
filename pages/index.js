import Head from "next/head";
import Banner from "./components/layouts/Home/Banner/Banner";
import LeftLayout from "./components/layouts/Home/leftLayoiut/LeftLayout";
import RightLayout from "./components/layouts/Home/rightLayout/rightLayout";

export default function Home() {
  const layouts = [
    {
      title: "Une haute <span>intensité</span>",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
      img: "/assets/img/intensity.jpeg",
      button: {
        link: "",
        label: "Decouvrir nos programme",
      },
      left: false,
    },
    {
      title: "La crème des <span>coachs</span>",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
      img: "/assets/img/coach.jpeg",
      button: {
        link: "",
        label: "Nos coachs",
      },
      left: true,
    },

    {
      title: "Notre <span>complexe</span>",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
      img: "/assets/img/dunes.jpeg",
      button: {
        link: "",
        label: "Le complexe",
      },
      left: false,
    },
    {
      title: "prix <br/><span>adapté</span>",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis. Quisque lacinia sem nec turpis fermentum gravida. Integer faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet. Aliquam consectetur, ipsum sodales pellentesque auctor, libero ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec volutpat risus placerat lorem faucibus malesuada",
      img: "https://images.unsplash.com/photo-1584380663336-4cf2c885008b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      button: {
        link: "",
        label: "Decouvrir nos programme",
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
        <Banner />
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
      </main>
    </div>
  );
}
