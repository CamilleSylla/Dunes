import Button from '../../../button/Button'
import Spacing from '../../../Spacing'
import Layout from '../../../wrappers/Layout/Layout'
import style from './coaches.module.scss'

export default function Coaches () {
    const Content = () => {
        return (
            <article className={style.content}>
                <div className={style.container} style={{textAlign: "rigth"}}>
          <h1>
            Des coachs <span>Incroyables</span>
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
          <Button text="Nos coachs" />
        </div>
            </article>

        )
    }

    return (
        <Layout>
            <Content/>
            <img className={style.illustration} src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
        </Layout>
    )
}