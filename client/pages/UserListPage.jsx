import React, {useContext} from "react";
import {UserApiContext} from "../ApiContext/userApiContext";
import {useLoading} from "../lib/useLoading";
import {Link, useNavigate} from "react-router-dom";

export function UserListPage() {
    const navigate = useNavigate();
    const {listAllUsers} = useContext(UserApiContext);
    const {loading, error, data} = useLoading(
        async () => await listAllUsers(),
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
            <h3>List of users</h3>
            {data.map((user) => (
                <ul>
                    <li><Link to={"/browse-users/" + user.googleId}>{user.nickName}</Link></li>
                </ul>
            ))}
            <input type={"button"} value={"Back"} onClick={ () => navigate("/")} />
        </div>
    );
}