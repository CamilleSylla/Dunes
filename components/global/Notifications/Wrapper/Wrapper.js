import style from "./wrapper.module.scss"

export default function NotificationWrapper ({children, ref}) {


    return (
        <div ref={ref} className={style.wrapper}>
            {children}
        </div>
    )
}