import style from './social.module.scss'

export default function Social () {

    const images  = [
        {
            src: "/assets/icon/fb.svg",
            url: "https://www.facebook.com/dunes.gst.saintquentin/"
        },
        {
            src: "/assets/icon/ig.svg",
            url: "https://www.instagram.com/dunes_gst/?hl=fr"
        },
        {
            src: "/assets/icon/mail.svg",
            url: "mailto:mail@example.org",
            mail: true
        },
    ]

    return (
        <div className={style.wrapper}>
            {images.map((el, i) => {
                return <img  key={i} onClick={() => window.open(el.url)} src={el.src}/>
            })}
        </div>
    )
}