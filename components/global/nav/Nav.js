import style from './nav.module.scss'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { getCurrentUser } from '../../../tools/user'
import { ResponsiveContext } from '../../../context/MobileContext'
import { userDevice } from '../../../tools/global'

export default function Nav () {

    const [user, setUser] = useContext(UserContext)
    const [responsive, setResponsive] = useState(null)
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

    function logOut () {
        localStorage.clear()
        location.reload()
    }

    useEffect(() => {
        setResponsive(userDevice())
        getCurrentUser(setUser)
    }, [])
    
    const LaptopNav = () => {
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
                 {user ? user.prenom + " " + user.nom  : <Link href="/connection"><p>Connexion</p></Link>}
                 {user ?
                 (
                     <div onClick={() => logOut()} className={style.logout}>
                    <p>Déconnexion</p>
                    </div>
                 )
                 : null}
                </div>
            </div>
        </nav>
        )
    }

    return (
        <>
        {responsive ? null : <LaptopNav/>}
        </>
    )
}