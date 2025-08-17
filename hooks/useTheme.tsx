import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { Colors, ColorSchema } from "../constants/Colors";

export interface ColorSchema {
  Primary: string;
  Primary_Variant: string;
  Secendary: string;
  Background: string;
  Surface: string;
  Text_Primary: string;
  Text_Secondary: string;
  Border_Divider: string;
}
export const Colors = {
  light: {
    Primary: "#0369A1",
    Primary_Variant: "#075985",
    Secendary: "#0284C7",
    Background: "#F0F9FF",
    Surface: "#FFFFFF",
    Text_Primary: "#0C4A6E",
    Text_Secondary: "#0369A1",
    Border_Divider: "#BAE6FD",
  },
  dark: {
    Primary: "#0284C7",
    Primary_Variant: "#0369A1",
    Secendary: "#0EA5E9",
    Background: "#0C1821",
    Surface: "#1E2A3A",
    Text_Primary: "#F0F9FF",
    Text_Secondary: "#BAE6FD",
    Border_Divider: "#0369A1",
  },
};



interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorSchema;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? Colors.dark : Colors.light;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
