import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./planning.module.scss";
import axios from "axios"
import { getWeekDays, organisePlanningsSpotVue } from "../../../../tools/planning";

export default function Planning ({data, trainings})  {

    const weekDays = getWeekDays('fr');
    const planning = organisePlanningsSpotVue(trainings, weekDays)
    const Card = ({training, i}) => {

        const formatTime = training.start.substring(0, 5);

        return (
            <article key={i} className={style.card}>
                <h1>{training.nom}</h1>
                <p>Eddy</p>
                <p>{formatTime}</p>
                <p>60 min</p>
            </article>
        )
    }

    const Day = ({day}) => {

        const currentDay = Object.keys(day)
        return (
            <div className={style.days}>
                <h1>{currentDay}</h1>
                {day[currentDay].map((training, i) => {
                    return <Card training={training} i={i}/>
                })}
            </div>
        )
    }
    
    const Schedule = () => {
        return (
            <div className={style.schedule}>
                {planning.map(el => {return <Day day={el}/>})}
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

