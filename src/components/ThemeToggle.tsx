import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";
import useSound from "use-sound";

const sound = "/sounds/switch.mp3";

const ThemeToggle = () => {
  const [play] = useSound(sound, { volume: 0.5 });

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <SunMoon
      onClick={() => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
        play();
      }}
    />
  );
};

export default ThemeToggle;
