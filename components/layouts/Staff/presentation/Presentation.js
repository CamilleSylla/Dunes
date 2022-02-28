import { useContext } from 'react'
import { PresentationContext } from '../../../../context/PresentationContext'
import style from './presentation.module.scss'

export default function Presentation () {
    const [presentation, setPresentation] = useContext(PresentationContext)

    const Close = () => {
        return <span onClick={() => setPresentation(null)} className={style.ferme}>Fermer</span>
    }

    const Content = () => {
        console.log(presentation);
        return (
            <article className={style.wrapper}>
                <div className={style.container}>
                <img src={presentation.profile_url}/>
                    <div className={style.content}>
                        <h1 dangerouslySetInnerHTML={{ __html: presentation.name }} />
                        <h2 dangerouslySetInnerHTML={{ __html: presentation.role }}/>
                        <h3 className={style.slogan} dangerouslySetInnerHTML={{ __html: presentation.slogan }}/>
                        <p style={{whiteSpace: "pre-line"}}>{presentation.bio}</p>
                    </div>
                <Close/>
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