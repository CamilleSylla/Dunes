import style from './nav.module.scss'
import Link from 'next/link'

export default function Nav () {
    const navContent  = [
        {
            label: "accueil",
            link: "/"
        },
        {
            label: "le staff",
            link: "/staff"
        },
        {
            label: "nos programmes",
            link: "/programmes"
        },
        {
            label: "les plannings",
            link: "/plannings"
        },
        {
            label: "le complexe",
            link: "/complexe"
        },
        {
            label: "nos tarifs",
            link: "/tarifs"
        },
    ]
    

    return (
        <nav className={style.wrapper}>
            <div className={style.menu}>
                <ul>
                    {navContent.map((el, i) => {
                        return (
                            <Link key={i} href={el.link}>
                                <li>
                                    {el.label}
                                </li>
                            </Link>
                        )
                    })}

                </ul>
                <div className={style.login}>
                    <Link href="/connection">
                    <p>Connection</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}