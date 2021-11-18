import style from './button.module.scss'

export default function Button ({text}) {

    return (
        <div className={style.button}>
            <div className={style.filter}/>
            <span>{text}</span>
        </div>
    )
}