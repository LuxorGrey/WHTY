import "./Switch.css";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Switch({ toggleTheme, isDark }: HeaderProps) {
  return (
    <div style={{ display: "flex", paddingRight: "20px" }}>
      <SunIcon />
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <span className="switch" />
      </label>
      <MoonIcon />
    </div>
  );
}
