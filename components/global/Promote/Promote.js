import style from "./promote.module.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { PromoteContext } from "../../../context/PromoteContext";
export default function Promote() {
  const [promote, setPromote] = useContext(PromoteContext);

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
