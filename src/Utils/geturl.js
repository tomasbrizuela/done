'use client'
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetUrl({children}){
    const [token, setToken] = useState(null);
    const [userId, setId] = useState(null);
    useEffect(() => {
        const hash = window.location.hash; // Obtiene todo lo que está después de '#'
        const params = new URLSearchParams(hash.substring(1)); // Elimina el '#' y convierte en parámetros
        const accessToken = params.get("access_token"); // Obtiene el valor de access_token
        setToken(accessToken)
        console.log("Access Token:", accessToken);

        let getTokenValidity = async (token) => {
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
            console.log(data)

        setId(data?.user?.id)
        }

        token !== null && getTokenValidity(token);
        if(!userId){
            redirect('/login')
        }
    }, [token]);

    return(
        <>
        {
            userId && <>{children}<p>{userId}</p></>
        }
        </>
    )
}

