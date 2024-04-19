import { createContext, useState } from "react";
import { CMYKContextProps } from "../types";

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: any) {
  const [cyan, setCyan] = useState(0);
  const [magenta, setMagenta] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [black, setBlack] = useState(0);
  const color = `cmyk(${cyan}%, ${magenta}%, ${yellow}%, ${black})%`;

  return (
    <CMYKContext.Provider
      value={{ cyan, magenta, yellow, black, color, setCyan, setMagenta, setYellow, setBlack }}
    >
      {children}
    </CMYKContext.Provider>
  );
}
