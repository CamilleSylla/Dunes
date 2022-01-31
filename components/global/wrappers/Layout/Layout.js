import { useEffect, useState } from 'react'
import { userDevice } from '../../../../tools/global'
import style from './layout.module.scss'

export default function Layout ({children, height}) {

    const [responsive, setResponsive] = useState("100vh")

    useEffect(()=> {
        if (userDevice() != null) {
            setResponsive("auto")
        }
    },[])

    return (
        <section style={{height: `${height ? height : responsive}`}} className={style.wrapper}>
            {children}
        </section>
    )
}