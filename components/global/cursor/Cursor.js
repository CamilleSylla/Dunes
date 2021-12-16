import style from './cursor.module.scss'
import {useEffect, useRef} from 'react'

export default function Cursor () {
    const pointer = useRef()

    useEffect(() => {
        const cursor = pointer.current
        document.addEventListener('mousemove', e => {
            cursor.style.top = `${e.pageY - cursor.style.width/2}px`
            cursor.style.left = `${e.pageX - cursor.style.width/2}px`

            // cursor.setAttribute('style', "top: "+ e.pageY+"px; left: " +e.pageX+"px;")
        })
    }, [])

    return <div ref={pointer} className={style.wrapper}></div>
}