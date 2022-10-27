import React, {useContext} from "react";
import {UserApiContext} from "../ApiContext/userApiContext";
import {useLoading} from "../lib/useLoading";
import {useNavigate} from "react-router-dom";

export function UserProfilePage() {
    const urlPathParam = window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
    );

    const navigate = useNavigate();
    const {getUserById} = useContext(UserApiContext);
    const {loading, error, data} = useLoading(
        async () => await getUserById({googleid: urlPathParam}),
        []
    );

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div id="error-text">{error.toString()}</div>
            </div>
        );
    }

    return (
        <div>
            <h3>User Profile</h3>
            <div>Name:{data.nickName}</div>
            <div>Bio:{data.bio}</div>
            <div>
                <input type={"button"} value={"Back"} onClick={ () => navigate("/")} />
            </div>
        </div>
    );
}