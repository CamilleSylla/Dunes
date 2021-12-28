import React, { useState, createContext } from "react";

export const ResponsiveContext = createContext();

export function ResponsiveProvider(props) {
    const [responsive, setResponsive] = useState(null)
  return (
    <ResponsiveContext.Provider value={[responsive, setResponsive]}>
      {props.children}
    </ResponsiveContext.Provider>
  );
}