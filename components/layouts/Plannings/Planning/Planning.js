import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./planning.module.scss";
import axios from "axios";
import {
  getWeekDays,
  organisePlanningsSpotVue,
} from "../../../../tools/planning";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import gsap from "gsap";

export default function Planning({ data, trainings, currentWeek }) {
  const validationRef = useRef();
  const weekDays = getWeekDays("fr", currentWeek);
  const planning = organisePlanningsSpotVue(trainings, weekDays);
  const [user, setUser] = useContext(UserContext);
  const [validation, setValidation] = useState(null);

  const targetSpot = (training) => {
    const spot = {
      reservation_le: new Date(training.reservation_day),
      user_id: `${user.id}`,
      user_name: user.nom + " " + user.prenom,
      traning_name: training.nom,
      traning_day: training.day,
      traning_start: training.start,
    };
    return spot;
  };

  async function newCreaneau(training) {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dunes_token")}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
      targetSpot(training),
      config
    );
    setValidation(data);
    console.log(data);
    return data;
  }

  const Card = ({ training, i, reservation_date }) => {
    const formatTime = training.start.substring(0, 5);
    training.reservation_day = reservation_date;
    return (
      <article
        onClick={() => {
          user ? newCreaneau(training) : null;
        }}
        key={i}
        className={style.card}
      >
        <h1>{training.nom}</h1>
        <p>Eddy</p>
        <p>{formatTime}</p>
        <p>60 min</p>
      </article>
    );
  };

  const Day = ({ day }) => {
    const formattedDay = day.day.substring(0, 3)
    const date = new Date(day.full_date)
    const month = date.getUTCMonth() + 1;
    const currentDay = date.getUTCDate();
    return (
      <div className={style.days}>
        <h1>{formattedDay + "   " + `${currentDay} / ${month}` }</h1>
        {day.trainings.map((training, i) => {
          return (
            <Card training={training} reservation_date={day.full_date} i={i} />
          );
        })}
      </div>
    );
  };

  const Schedule = () => {
    return (
      <div className={style.schedule}>
        {planning.map((el) => {
          return <Day day={el} />;
        })}
      </div>
    );
  };

  const Header = () => {
    return <section className={style.header}></section>;
  };

  const ReservationValidation = () => {
    return (
      <div ref={validationRef} className={style.validation}>
        <h1>{validation ? validation.user_name : null},</h1>
        <p>
          Tu viens de reserver ton spot a l'entrainement{" "}
          <span>{validation ? validation.traning_name : null}</span> du{" "}
          <span>{validation ? validation.traning_day : null}</span> à{" "}
          <span>
            {validation ? validation.traning_start.substring(0, 5) : null}
          </span>
        </p>
      </div>
    );
  };

  useEffect(() => {
    if (validation) {
      gsap.from(validationRef.current, {
        x: "100%",
      });
    }
  }, []);

  return (
    <Layout>
      <ReservationValidation />

      <div className={style.wrapper}>
        <Header />
        <Schedule />
      </div>
    </Layout>
  );
}
