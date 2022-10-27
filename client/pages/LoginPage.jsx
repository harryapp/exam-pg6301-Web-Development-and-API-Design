import React, {useContext} from "react";
import {UserApiContext} from "../ApiContext/userApiContext";
import {Link, useNavigate} from "react-router-dom";
import {config} from "../config/constants";


export function LoginPage() {
    const {registerUser} = useContext(UserApiContext)

    function google() {
        window.open(config.url.BASE_URL + "/auth/google", "_self");
    }

    function microsoft() {
        window.open(config.url.BASE_URL + "/auth/microsoft", "_self");
    }


    async function onclickHandler() {
        google()
        await registerUser()
        location.reload();


    }

    return (
        <div>
            <h3>Login Page</h3>
            <div>
                <button onClick={google}>google</button>
                <button onClick={microsoft}>microsoft</button>
            </div>
            <div>
                <div>Ikke eksisterende bruker? Registerer bruker
                    <button onClick={onclickHandler}>Her</button>
                </div>

            </div>
        </div>
    );
}