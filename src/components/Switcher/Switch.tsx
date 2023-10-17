import "./Switch.css";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export default function Switch({ toggleTheme, theme }: HeaderProps) {
  return (
    <div style={{ display: "flex", paddingRight: "20px" }}>
      <SunIcon />
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="switch" />
      </label>
      <MoonIcon />
    </div>
  );
}
