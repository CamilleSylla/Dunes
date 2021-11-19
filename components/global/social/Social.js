import style from './social.module.scss'

export default function Social () {

    const images  = [
        {
            src: "/assets/icon/fb.png",
            url: ""
        },
        {
            src: "/assets/icon/ig.png",
            url: ""
        },
        {
            src: "/assets/icon/mail.png",
            url: ""
        },
    ]

    return (
        <div className={style.wrapper}>
            {images.map((el, i) => {
                return <img src={el.src}/>
            })}
        </div>
    )
}