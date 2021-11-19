import style from './layout.module.scss'

export default function Layout ({children, height}) {

    return (
        <section style={{height: `${height ? height : "100vh"}`}} className={style.wrapper}>
            {children}
        </section>
    )
}