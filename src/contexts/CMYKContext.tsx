import React, { createContext, useState, useEffect } from "react";
import { CMYKContextProps } from "../types";

interface CMYKProviderProps {
  children: React.ReactNode;
}

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: CMYKProviderProps) {
  const [cyan, setCyan] = useState<number>(0);
  const [magenta, setMagenta] = useState<number>(0);
  const [yellow, setYellow] = useState<number>(0);
  const [black, setBlack] = useState<number>(0);
  const [color, setColor] = useState<string>("rgb(0, 0, 0)");

  // Atualizar a cor sempre que os valores CMYK mudarem
  useEffect(() => {
    const red = Math.round(255 * (1 - cyan / 100) * (1 - black / 100));
    const green = Math.round(255 * (1 - magenta / 100) * (1 - black / 100));
    const blue = Math.round(255 * (1 - yellow / 100) * (1 - black / 100));
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }, [cyan, magenta, yellow, black]);

  return (
    <CMYKContext.Provider
      value={{ cyan, magenta, yellow, black, color, setCyan, setMagenta, setYellow, setBlack }}
    >
      {children}
    </CMYKContext.Provider>
  );
}
