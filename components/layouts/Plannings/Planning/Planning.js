import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./planning.module.scss"

export default function Planning ({data})  {


    const Card = ({data, i}) => {
        return (
            <article key={i} className={style.card}>
                <h1>{data.activity}</h1>
                <p>{data.coach}</p>
                <p>{data.start}:00</p>
                <p>{data.length}min</p>
            </article>
        )
    }

    const Day = ({el}) => {
        const day = Object.keys(el)
        return (
            <div className={style.days}>
                <h1>{day}</h1>
                {el[day].map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        )
    }
    
    const Schedule = () => {
        return (
            <div className={style.schedule}>
                {data.map(el => {return <Day el={el}/>})}
            </div>
        )
    }

    const Header = () => {

        return (
            <section className={style.header}>

            </section>
        )
    }

    return (
        <Layout>
            <div className={style.wrapper}>
                <Header/>  
                <Schedule/>          
                </div>
        </Layout>
    )
}