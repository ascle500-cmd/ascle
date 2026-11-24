import { createContext, useContext, useState } from "react";
const UIContext = createContext();
export function UIProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <UIContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </UIContext.Provider>
  );
}
export const useUI = () => useContext(UIContext);
