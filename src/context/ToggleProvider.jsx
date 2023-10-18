import { createContext, useState } from "react";

export const ToggleContext = createContext(null);

const ToggleProvider = ({ children }) => {
  const [openOrderDetailsToggle, setOrderDetailsToggle] = useState(false);
  const [control, setControl] = useState(false);

  const OpenOrderDetails = () => {
    console.log("click");
    setOrderDetailsToggle(!openOrderDetailsToggle);
  };
  const toggleInfo = {
    OpenOrderDetails,
    openOrderDetailsToggle,
    setOrderDetailsToggle,
    setControl,
    control,
  };
  return (
    <ToggleContext.Provider value={toggleInfo}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
