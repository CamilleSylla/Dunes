import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import style from "./welcome.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { WelcomeContext } from "../../../../context/WelcomeContext";

export default function Welcome() {
  const [user, setUser] = useContext(UserContext);
  const [close, setClose] = useContext(WelcomeContext)

  const notifRef = useRef()

  const onClose = () => {
      gsap.to(notifRef.current, {
          x : "100%",
          opacity : 0,
          onComplete(){
            setClose(true)
          } 
      })
      
  }

  const Notif = () => {
    return (
      <div ref={notifRef} className={style.wrapper}>
        <h1>
          Ca fait plaisir de te revoir <span>{user.prenom}</span>
        </h1>
        <p>
          N'hésites pas a{" "}
          <Link href="/plannings">
            <a>reserver</a>
          </Link>{" "}
          tes prochains spots !
        </p>
        <p onClick={onClose} className={style.close}>FERMER</p>
      </div>
    );
  };

  useEffect(() => {
        gsap.from(notifRef.current, {
            x : "100%",
            opacity : 0
        })
  }, [close])

  return <>{!close && user? <Notif /> : null}</>;
}
