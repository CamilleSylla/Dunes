import { useContext, useEffect } from "react";
import style from "./promote.module.scss";
import Button from "../button/Button";
import { PromoteContext } from "../../../context/PromoteContext";
import { UserContext } from "../../../context/UserContext";
// import {useEffect} from 'react'
export default function Promote() {
  const [promote, setPromote] = useContext(PromoteContext);
  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    if(user) {
      setPromote(!promote)
    }
  },[user])
  const PopUp = () => {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Reserver mon essaie gratuit</h1>
          <p>
            Venez tester notre efficacité en toute simplicité en reservant
            directement en ligne
          </p>
          <div className={style.action}>
            <Button text="Réserver" />
            <p className={style.close} onClick={() => setPromote(!promote)}>Ferme</p>
          </div>
        </div>
      </div>
    );
  };
  return <>{promote ? <PopUp /> : null}</>;
}
