import Button from "../../../button/Button";
import Spacing from "../../../Spacing";
import Layout from "../../../wrappers/Layout/Layout";
import style from "./intensity.module.scss";

export default function Intensity() {
  const Content = () => {
    return (
      <div className={style.content}>
        <div className={style.container}>
          <h1>
            Une haute <span>intensité</span>
          </h1>
          <Spacing height="1vh" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet
            pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula
            quis. Quisque lacinia sem nec turpis fermentum gravida. Integer
            faucibus iaculis suscipit. In aliquet eleifend lacus sed laoreet.
            Aliquam consectetur, ipsum sodales pellentesque auctor, libero
            ligula suscipit ipsum, eu vehicula ex ipsum sit amet ipsum. Donec
            volutpat risus placerat lorem faucibus malesuada
          </p>
          <Spacing height="3vh" />
          <Button text="Decouvrir nos programme" />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <img
        src="https://images.unsplash.com/flagged/photo-1580052311973-b9544c0fdb9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80"
        className={style.illustration}
      />
      <Content />
    </Layout>
  );
}
