import { darkTheme } from "../../../styles";
import { ThemeType } from "../types/themeTypes";

const isDarkUtils = (currentTheme: ThemeType): boolean => {
  return Boolean(currentTheme === darkTheme);
};

export default isDarkUtils;
