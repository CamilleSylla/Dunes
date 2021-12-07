import axios from "axios";
import React, { useState, createContext } from "react";

export const FreeReservationsContext = createContext();

export function FreeReservationsProvider(props) {
    const [active, setActive] = useState(null)
  return (
    <FreeReservationsContext.Provider value={[active, setActive]}>
      {props.children}
    </FreeReservationsContext.Provider>
  );
}