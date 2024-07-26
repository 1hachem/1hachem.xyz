import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import useSound from "use-sound";

const sound = "/sounds/switch.mp3";

const ThemeToggle = () => {
	const [play] = useSound(sound, { volume: 0.5 });

	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	if (theme == "dark") {
		return (
			<Sun
				className="hover:text-slate-200 hover:cursor-pointer"
				onClick={() => {
					setTheme("light");
					play();
				}}
			/>
		);
	} else {
		return (
			<Moon
				className="hover:text-slate-600 hover:cursor-pointer"
				data-te-toggle="tooltip"
				onClick={() => {
					setTheme("dark");
					play();
				}}
			/>
		);
	}
};

export default ThemeToggle;
