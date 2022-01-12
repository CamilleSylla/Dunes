import style from './footer.module.scss'
import Link from 'next/link'
import Social from '../../../components/global/social/Social'
import { useEffect, useRef, useState } from 'react'

export default function Footer () {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef()
    useEffect(() => {
        if (open === true) {
            console.log(open);
            wrapperRef.current.style.transform = "translate3d(0,0,0)"
        } else {
            wrapperRef.current.style.transform = "translate3d(0, 100%,0)"
        }
    },[open])
    return (
        <footer ref={wrapperRef} className={style.wrapper}>
            <div className={style.button} onClick={() => setOpen(!open)}> <p>Pied de page</p> <Social/></div>
            <div className={style.container}>
            <p>© {new Date().getFullYear()} Dunes GST | powered by Modular Studio</p>
            <p className={style.middle}>Mentions légales</p>
            <Link href="/contact"><p>Contact</p></Link>
            </div>
        </footer>
    )
}