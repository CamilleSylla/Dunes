import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./planning.module.scss";
import axios from "axios";
import {
  allUserReservation,
  getWeekDays,
  organisePlanningsSpotVue,
} from "../../../../tools/planning";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import gsap from "gsap";
import Router from "next/router";
import Spacing from "../../../global/Spacing";
import Button from "../../../global/button/Button";
import { FreeReservationsContext } from "../../../../context/FreeReservation";

export default function Planning({ trainings, currentWeek }) {
  const validationRef = useRef();
  const weekDays = getWeekDays("fr", currentWeek);
  const planning = organisePlanningsSpotVue(trainings, weekDays);
  const [user, setUser] = useContext(UserContext);
  const [validation, setValidation] = useState(null);
  const [config, setConfig] = useState(null);
  const [userReservation, setUserReservation] = useState(null);
  const [active, setActive] = useContext(FreeReservationsContext)

  const targetSpot = (training) => {
    const spot = {
      reservation_le: new Date(training.reservation_day),
      user_id: `${user.id}`,
      user_name: user.nom + " " + user.prenom,
      traning_name: training.nom,
      traning_day: training.day,
      traning_start: training.start,
      creneau_id : training.id
    };
    return spot;
  };

  async function newCreaneau(training) {
    const addNewCreneau = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
        targetSpot(training),
        config
      )
      .then((res) => (res.status !== 500 ? setValidation(res.data) : null))
      .catch((err) => {
        alert(
          "Une erreur c'est produite, assurez vous de ne pas deja avoir reserver cette entrainement ou de ne pas avoir depasser votre limite de séance par semaine"
        );
        console.log(err);
      });
    return addNewCreneau;
  }

  async function deletePracticeOrRedirect(isTaken){
    let token = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dunes_token")}`,
      },
    };
    if (isTaken.length > 0) {
      // console.log({id : isTaken[0].id});
      const deleteReservation = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/annulation`,
        {id : isTaken[0].id},
        token
      )

      const deleteFromUserReservation = userReservation.filter((reservation, i )=> {
        if (reservation.id === isTaken[0].id) {
          userReservation.splice(i,1)
          isTaken=[]
        }
      })
      // location.reload();
    } else {
      Router.push("/connection")
    }
  }
  function bookingLimit (active_reservations) {
    const limit = 8
    if (active_reservations >= limit) {
      return <p style={{color: "red", fontFamily: "'Antonio', sans-serif;"}}>COMPLET</p>
    } else {
      return <p>Places : { 8 - active_reservations}</p>
    }
  }

  const Card = ({ training, i, reservation_date }) => {
    const formatTime = training.start.substring(0, 5);
    training.reservation_day = reservation_date;
    const trainingStart = new Date("1970-01-01 " + training.start).getHours();
    const currentTime = new Date().getHours();
    const parentDay = training.day.toLowerCase();
    const today = new Date().toLocaleDateString("fr", { weekday: "long" });
    let isAlreadyTook = [];
    console.log(training);
    if (userReservation) {
      const result = userReservation.filter(
        (el) =>
          new Date(el.reservation_le).toLocaleDateString() ===
            new Date(training.reservation_day).toLocaleDateString() &&
          training.start === el.traning_start
      );
      isAlreadyTook = result;
    }
    if (today === parentDay && currentTime >= trainingStart) {
      return null;
    } else {
      return (
        <article
          onClick={() => {
            user && isAlreadyTook.length == 0 ? newCreaneau(training) : deletePracticeOrRedirect(isAlreadyTook);
          }}
          key={i}
          className={style.card}
        >
          <h1
            style={{ color: training.color ? training.color : "var(--dark)" }}
          >
            {training.nom}
          </h1>
          <p>Eddy</p>
          <p>{formatTime}</p>
          <p>60 min</p>
          {isAlreadyTook.length ? (
            <div className={style.reservation_marker}>Réserve</div>
          ) : null}
          {isAlreadyTook.length ? (<div className={style.reservation_annuler}>Annuler ma seance</div>) : null}
          {user ? bookingLimit(training.active_reservations) : null}
        </article>
      );
    }
  };

  const Day = ({ day, i }) => {
    const formattedDay = day.day.substring(0, 3);
    const date = new Date(day.full_date);
    const month = date.getUTCMonth() + 1;
    const currentDay = date.getUTCDate();
    return (
      <div key={i} className={style.days}>
        <h1 style={{position : "fixed"}}>
          {i == 0 ? "Aujourd'hui, " : null}
          {formattedDay + "   " + `${currentDay} / ${month}`}
        </h1>
        <Spacing height="5vh"/>
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
        {planning.map((el, i) => {
          return <Day day={el} i={i} />;
        })}
      </div>
    );
  };

  const HeaderProfile = () => {
    const comingPractice = userReservation.sort(function (a, b) {
      return new Date(a.reservation_le) - new Date(b.reservation_le);
    })[0];

    return (
      <section className={style.header}>
        <article>
          <h1>{user.prenom + " " + user.nom}</h1>
          <p>
            Nombre de séances maximum par semaine :{" "}
            <span>{user.book_limit}</span>{" "}
          </p>
          <p>
            Prochain entrainement :{" "}
            <span>
              { comingPractice ? comingPractice.traning_name : "Aucun entrainement de prevue prochainement"}
              {comingPractice ? "  le  " : null}
              {comingPractice ? new Date(comingPractice.reservation_le).toLocaleDateString() : null}
            </span>
          </p>
          <p>
            Nombre de reservations active :{" "}
            <span>{userReservation.length}</span>
          </p>
        </article>
      </section>
    );
  };

  const PublicHeader = () => {
    return (
      <div className={style.header}>
        <article>
        <h1>Notre programmation des prochains jours</h1>
        <Spacing height="1vh"/>
        <div onClick={() => setActive(true)}>
          <Button text="Réserver Gratuitement"/>
        </div>  
          </article>
      </div>
    )
  }

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
    gsap.from(validationRef.current, {
      x: "100%",
      opacity: 0,
      onComplete() {
        gsap.to(validationRef.current, {
          delay: 4,
          x: "100%",
          opacity: 0,
          onComplete() {
            setValidation(null);
          },
        });
      },
    });
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dunes_token")}`,
      },
    };
    setConfig(config);

    if (user) {
      const allUserReservation = axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, config)
        .then((res) => setUserReservation(res.data));
    }
  }, [validation, user]);

  return (
    <Layout>
      {validation ? <ReservationValidation /> : null}
      <div className={style.wrapper}>
        {userReservation ? <HeaderProfile /> : <PublicHeader/>}
        <Schedule />
      </div>
    </Layout>
  );
}
