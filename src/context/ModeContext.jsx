import { createContext, useState } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  const data = {
    mode,
    changeMode,
  }

  return <ModeContext.Provider value={data}>{children}</ModeContext.Provider>
}

export default ModeContextProvider;