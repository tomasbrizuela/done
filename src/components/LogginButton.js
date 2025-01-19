'use client'
import { useState } from "react";
import { Button } from "./ui/button";

export default function LoginButton(){
    const [logingIn, setLogingIn] = useState(false)

    const handleLogin = () => {
        setLogingIn(true);
    }
    return (
    <Button className={logingIn ? 'w-full  bg-blue-400  hover:bg-blue-400' : 'w-full  bg-blue-500 hover:bg-blue-700'} onClick={handleLogin}>
        {logingIn ? "Logging in" : "Use Google"}
    </Button>
    )
}