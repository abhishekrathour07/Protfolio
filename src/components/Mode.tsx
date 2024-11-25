import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:px-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Mode = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "white" : "black"; 
    document.body.style.color = mode === "light" ? "black" : "white"; 
  }, [mode]);

  const toggleMode = (selectedMode: "light" | "dark") => {
    setMode(selectedMode);
  };

  return (
    <div className="grid h-16 place-content-center px-4">
      <SliderToggle selected={mode} onToggle={toggleMode} />
    </div>
  );
};

type SliderToggleProps = {
  selected: "light" | "dark";
  onToggle: (mode: "light" | "dark") => void;
};

const SliderToggle: React.FC<SliderToggleProps> = ({ selected, onToggle }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      {/* Light Mode Button */}
      <button
        className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-slate-300"
          }`}
        onClick={() => onToggle("light")}
      >
        <Sun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>

      {/* Dark Mode Button */}
      <button
        className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-800"
          }`}
        onClick={() => onToggle("dark")}
      >
        <Moon className={`relative  z-10 text-lg md:text-sm ${selected === "dark" ? "text-white" : "text-slate-300"
          }`} />
        <span className={`relative  z-10  ${selected === "dark" ? "text-white" : "text-slate-300"
          }`}  >Dark</span>
      </button>

      {/* Slider */}
      <div
        className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"
          }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-violet-800"
        />
      </div>
    </div>
  );
};

export default Mode;
