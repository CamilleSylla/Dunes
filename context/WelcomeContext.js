import React, { useState, createContext } from "react";

export const WelcomeContext = createContext();

export function WelcomeProvider(props) {
    const [close, setClose] = useState(null)
  return (
    <WelcomeContext.Provider value={[close, setClose]}>
      {props.children}
    </WelcomeContext.Provider>
  );
}