import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { getWeekDays, organisePlanningsSpotVue } from "../tools/planning";

export const PlanningContext = createContext();


async function setPlanningData () {
    let trainings, currentWeek;
    const fetchSpots = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/creneaux`)
  .then(res => {
      const formatted = res.data.map(el => {
        const formatted = {
          id: el.id,
          nom : el.entrainement.nom,
          start : el.start,
          day : el.jour.nom,
          color : el.entrainement.couleur
        }
        return formatted
      })
      trainings = formatted
  })
  const week = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/week`)
    .then(res => currentWeek =  res.data)
    const weekDays = getWeekDays('fr', currentWeek)
    const planning = organisePlanningsSpotVue(trainings, weekDays)
    return planning
}

export function PlanningProvider(props) {
    const [planning, setPlanning] = useState(null)

    useEffect(() => {
        setPlanningData().then(res => setPlanning(res))
    }, [])
  return (
    <PlanningContext.Provider value={[planning, setPlanning]}>
      {props.children}
    </PlanningContext.Provider>
  );
}