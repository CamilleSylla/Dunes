import React, { useState, createContext } from "react";

export const PromoteContext = createContext();

export function PromoteProvider(props) {
    const [promote, setPromote] = useState(true)
  return (
    <PromoteContext.Provider value={[promote, setPromote]}>
      {props.children}
    </PromoteContext.Provider>
  );
}