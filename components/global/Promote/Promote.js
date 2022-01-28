import { useContext, useEffect } from "react";
import style from "./promote.module.scss";
import Button from "../button/Button";
import { PromoteContext } from "../../../context/PromoteContext";
import { UserContext } from "../../../context/UserContext";
import { FreeReservationsContext } from "../../../context/FreeReservation";
import NotificationWrapper from "../Notifications/Wrapper/Wrapper";
// import {useEffect} from 'react'
export default function Promote() {
  const [promote, setPromote] = useContext(PromoteContext);
  const [user, setUser] = useContext(UserContext)
  const [active, setActive] = useContext(FreeReservationsContext)

  useEffect(() => {
    const isLogged = localStorage.getItem('dunes_token')
    if(isLogged) {
      setPromote(null)
    }
  },[active])
  const PopUp = () => {
    return (
      <NotificationWrapper>
        <div className={style.container}>

          <h1>Reserver mon essaie gratuit</h1>
          <p style={{marginBottom : "2vh"}}>
            Venez tester notre efficacité en toute simplicité en reservant
            directement en ligne
          </p>
          <div className={style.action}>
            <div onClick={() => setActive(true)} className={style.btn_wrapper}>
            <p>Reserver</p>
            </div>
          <p className={style.close} onClick={() => setPromote(!promote)}>Non Merci</p>
            
          </div>
        </div>
      </NotificationWrapper>
    );
  };
  return <>{promote ? <PopUp /> : null}</>;
}
