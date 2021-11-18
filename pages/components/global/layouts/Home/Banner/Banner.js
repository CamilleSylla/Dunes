import Layout from '../../../wrappers/Layout/Layout'
import style from './banner.module.scss'

export default function Banner () {

    return (
        <Layout>
            <video loop="true" autoplay="autoplay" muted className={style.video} >
            <source src="/assets/video/banner.mp4"
            type="video/mp4"/>
            </video>
        </Layout>
    )
}