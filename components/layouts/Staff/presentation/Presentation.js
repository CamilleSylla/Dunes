import { useContext } from 'react'
import { PresentationContext } from '../../../../context/PresentationContext'
import style from './presentation.module.scss'

export default function Presentation () {
    const [presentation, setPresentation] = useContext(PresentationContext)

    const Head = () => {
        return (
            <div className={style.head}>
                <h1 dangerouslySetInnerHTML={{ __html: presentation.name }} />
                <img src={presentation.profile_url}/>
                <Close/>

            </div>
        )
    }
    const Close = () => {
        return <span onClick={() => setPresentation(null)} className={style.ferme}>Ferme</span>
    }

    const Content = () => {
        console.log(presentation);
        return (
            <article className={style.wrapper}>
                <div className={style.container}>
                    <Head/>
                </div>
            </article>
        )
    }

    return (
        <>
        {presentation ? <Content/> : null}
        </>
        )

    
}