'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ChangeThemeButton() {
    const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme('light')
        }
    }
    return (
        <Button className={theme == "light" ? "bg-white hover:bg-slate-200" : "bg-black hover:bg-gray-600"} onClick={changeTheme}>
            {theme == "light" ? <Moon className="text-black" /> : <Sun className="text-white" />}
        </Button>
    );
}