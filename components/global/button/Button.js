import style from './button.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Button ({text , link}) {

    const currentUrl = useRouter()

    return (
        <Link href={link ? link : currentUrl.pathname}>
        <div  className={style.button}>
            <div className={style.filter}/>
            <span>{text}</span>
        </div>
        </Link>
    )
}