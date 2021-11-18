import style from './layout.module.scss'

export default function Layout ({children}) {

    return (
        <section className={style.wrapper}>
            {children}
        </section>
    )
}