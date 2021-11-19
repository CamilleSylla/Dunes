import Button from '../../../global/button/Button'
import Spacing from '../../../global/Spacing'
import Layout from '../../../global/wrappers/Layout/Layout'
import style from './banner.module.scss'

export default function Banner () {

    const Content = () => {

        return (
            <div className={style.content_wrapper}>
                <div className={style.container}>
                    <h1>Bienvenue chez Dunes</h1>
                    <Spacing height="1vh"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.</p>
                    <Spacing height="2.5vh"/>
                    <Button text="Reserver un spot"/>
                </div>

            </div>
        )
    }

    return (
        <Layout>
            <video loop="true" autoplay="autoplay" muted className={style.video} >
            <source src="/assets/video/banner.mp4"
            type="video/mp4"/>
            </video>
            <Content/>
            <div className={style.filter}/>
        </Layout>
    )
}