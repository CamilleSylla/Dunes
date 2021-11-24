import React, { useState, createContext } from "react";

export const PresentationContext = createContext();

export function PresentationProvider(props) {
    const [presentation, setPresentation] = useState(null)
  return (
    <PresentationContext.Provider value={[presentation, setPresentation]}>
      {props.children}
    </PresentationContext.Provider>
  );
}