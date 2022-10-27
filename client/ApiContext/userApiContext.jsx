import React from "react";
import {postJSON} from "../lib/postJSON";
import {fetchJSON} from "../lib/fetchJSON";
import {updateJSON} from "../lib/updateJSON";

export const UserApiContext = React.createContext({

    async getUserById(query) {
        console.log("test: " + new URLSearchParams(query))
        return await fetchJSON("/api/users?" + new URLSearchParams(query));
    },

    async getCurrentUser() {
        return await fetchJSON("/api/users/login");
    },

    async listAllUsers() {
        return await fetchJSON("/api/users/all");
    },

    async editUser(query) {
        return await updateJSON("/api/users", query)
    },

    async registerUser() {
        return await postJSON("/api/users/register")
    }


});