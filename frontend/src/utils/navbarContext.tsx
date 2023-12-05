import React, { createContext, useContext, useState } from "react";

interface NavbarContextType {
  homeSelected: boolean;
  setHomeSelected: React.Dispatch<React.SetStateAction<boolean>>;
  actionSelected: boolean;
  setActionSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [homeSelected, setHomeSelected] = useState(true);
  const [actionSelected, setActionSelected] = useState(false);
  return (
    <NavbarContext.Provider
      value={{
        homeSelected,
        setHomeSelected,
        actionSelected,
        setActionSelected,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
