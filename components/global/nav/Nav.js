import style from './nav.module.scss'
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { getCurrentUser } from '../../../tools/user'
import { ResponsiveContext } from '../../../context/MobileContext'
import { userDevice } from '../../../tools/global'
import gsap from 'gsap'

export default function Nav () {

    const [user, setUser] = useContext(UserContext)
    const [responsive, setResponsive] = useState(null)
    const [open, setOpen] = useState("")
    const listRef = useRef()
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

    
    const DefaultNav = () => {
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

    const Hamburger = () => {

        return (
            <div onClick={() => slideList()}  className={style.hamburger}>
                <div/>
                <div/>
                <div/>
            </div>
        )
    }
    useEffect(() => {
        setResponsive(userDevice())
        getCurrentUser(setUser)
        
    }, [])

    function slideList () {
        if (open === "") {
            listRef.current.style.transform = "translate3d(-100%,0,0)"
            setOpen(1)
        } else if (open === 1) {
            listRef.current.style.transform = "translate3d(0,0,0)"
            setOpen("")
        }
    }

    const Action = () => {

        return (
            <nav className={style.mobile_wrapper}>
                <div className={style.container}>
                    <p>Logo</p>
                    <Hamburger/>
                    <img src='/assets/icon/user.svg'/>
                </div>
            </nav>
        )
    }
    
    const List = () => {
        return (
            <div ref={listRef} className={style.list}>
            </div>
        )
    }
    
    const MobileNav = () => {
        return (
            <>
            <Action/>
            <List/>
            </>
        )
    }
    
    return (
        <>
        {responsive ? <MobileNav/> : <DefaultNav/>}
        </>
    )
}