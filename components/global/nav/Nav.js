import style from './nav.module.scss'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext'
import { getCurrentUser } from '../../../tools/user'

export default function Nav () {

    const [user, setUser] = useContext(UserContext)
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
        {
            label: "contact",
            link: "/contact"
        },
    ]

    useEffect(() => {
        getCurrentUser(setUser)
    }, [])
    

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
                 {user ? user.prenom + " " + user.nom  : <Link href="/connection"><p>Connection</p></Link>}
                </div>
            </div>
        </nav>
    )
}