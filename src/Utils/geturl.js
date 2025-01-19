'use client'
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import LoginForm from '../app/login/page'

export default function GetUrl({children}){
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const hash = window.location.hash; // Obtiene todo lo que está después de '#'
        const params = new URLSearchParams(hash.substring(1)); // Elimina el '#' y convierte en parámetros
        const accessToken = params.get("access_token"); // Obtiene el valor de access_token
        if(accessToken !== token){
            setToken(accessToken)
        }
        console.log("Access Token:", token);

        let getTokenValidity = async (token) => {
            console.log("intentando con la token validity")
            let url = "https://donebackk-948213617426.southamerica-east1.run.app//auth/userInfo";
            let options = {
                'method': 'POST',
                'headers': {
                    'Authorization': 'Bearer ' + token,
                    'Content-type': 'application/json'
                }
            }
            let response = await fetch(url, options);
            let data = await response.json();
            return data?.user?.id
        }

        async function setIdWithToken(token) {
            if(token !== null){
                let id = await getTokenValidity(token);
                if(!id){
                    console.log("no hay user id")
                    redirect('/login')
                } else {
                    setIsLoading(false)
                    console.log("SI hay user id")
    
                }
            }

        }

        setIdWithToken(token)
    }, [token]);
    if(isLoading){
        console.log("Is loading")
        return <LoginForm isLoading={{isLoading}}></LoginForm>
    }
    return(
        <>
            {children}
        </>
    )
}

