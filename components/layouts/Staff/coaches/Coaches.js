import Layout from '../../../global/wrappers/Layout/Layout'
import style from './coaches.module.scss'

export default function Coaches () {

    const coaches = [
        {
            id: 1,
            name: "Darnell <span>Williams</span>",
            role: "Fondateur de Dunes",
            carrere : "Ancien joueur proffessionel de basket-ball",
            profile_url: "/assets/img/darnell.png"
        },
        {
            id: 1,
            name: "Eddy <span>Lemaire</span>",
            role: "Co-fondateur et coach pour Dunes",
            carrere : "Ancien joueur proffessionel de basket-ball",
            profile_url: "/assets/img/eddy.png"
        },
        {
            id: 1,
            name: "Sylvain <span>Deleau</span>",
            role: "Fondateur de Dunes",
            carrere : "Ancien joueur proffessionel de basket-ball",
            profile_url: "/assets/img/sylvain.png"
        },
        {
            id: 1,
            name: "Quentin <span>Williams</span>",
            role: "Fondateur de Dunes",
            carrere : "Ancien joueur proffessionel de basket-ball",
            profile_url: "/assets/img/quentin.png"
        },
        {
            id: 1,
            name: "Yannis <span>Williams</span>",
            role: "Fondateur de Dunes",
            carrere : "Ancien joueur proffessionel de basket-ball",
            profile_url: "/assets/img/yannis.png"
        },
    ]
    
    const Title = () => {
        return <h1>L'équipe<br/> Dunes</h1>
    }

    const Card = ({name, imgSrc, }) => {

        return (
            <article className={style.card}>
                <h1 dangerouslySetInnerHTML={{__html: name}} />
                <img src={imgSrc}/>
            </article>
        )
    }

    const CardsGrid = () => {

        return (
            <div className={style.grid}>
                {coaches.map((el, i) => {
                    return <Card name={el.name} imgSrc={el.profile_url}/>
                })}
            </div>
        )
    }

    

    return (
        // <Layout height="auto">
            <div style={{background: "#F2F2F2"}} className={style.wrapper}>
                <Title/>
                <CardsGrid/>
            </div>
        // </Layout>
    )
}