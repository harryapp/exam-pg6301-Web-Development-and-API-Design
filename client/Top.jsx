import {Link} from "react-router-dom";
import React from "react";

export function Top({user}) {
    return (
        <div className={"top"}>
            <h1>Chat app</h1>
            <div>{user.nickName}</div>

        </div>
    );
}