import Button from "../../../global/button/Button";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./tarifs.module.scss";

export default function Tarifs() {
  const programs = [
    {
      label: "Découverte",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
      price: "Gratuit",
      btn: {
        label: "Réserver un essai",
        link: "",
      },
    },
    {
      label: "Découverte",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
      price: "Gratuit",
      btn: {
        label: "Réserver un essai",
        link: "",
      },
    },
    {
      label: "Découverte",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
      price: "Gratuit",
      btn: {
        label: "Réserver un essai",
        link: "",
      },
    },
    {
      label: "Découverte",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
      price: "Gratuit",
      btn: {
        label: "Réserver un essai",
        link: "",
      },
    },
  ];

  const Title = () => {
    return <h1 className={style.title}>Nos Tarifs</h1>;
  };

  const Card = ({ data, i }) => {
    return (
      <article key={i} className={style.card}>
        <div className={style.container}>
          <h1>{data.label}</h1>
          <p>{data.desc}</p>
          <p>{data.price}</p>
          <Button text={data.btn.label} />
        </div>
      </article>
    );
  };

  const CardWrapper = () => {
    return (
      <div className={style.cardWrapper}>
        {programs.map((el, i) => {
          return <Card data={el} i={i} />;
        })}
      </div>
    );
  };

  return (
    <Layout>
      <div className={style.wrapper}>
        <Title />
        <CardWrapper />
      </div>
    </Layout>
  );
}
