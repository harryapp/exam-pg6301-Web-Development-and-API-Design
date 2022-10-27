import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import "./chatroom.css"
import {ChatRoomPage} from "./pages/ChatRoomPage";
import {LoginPage} from "./pages/LoginPage";
import {Top} from "./Top";
import {UserListPage} from "./pages/UserListPage";
import {UserProfilePage} from "./pages/UserProfilePage";
import {UserApiContext} from "./ApiContext/userApiContext";
import {useLoading} from "./lib/useLoading";

function FrontPage() {
    return (
        <div>
            <h3>Menu</h3>
            <div>
                <Link to={"/edit-profile"}>Edit profile</Link>
            </div>
            <div>
                <Link to={"/browse-users"}>Find other users</Link>
            </div>
            <div>
                <Link to={"/chatroom"}>Enter chatroom</Link>
            </div>

        </div>
    )
}


function EditProfilePage({user}) {
    const {editUser} = useContext(UserApiContext)
    const [nickName, setNickname] = useState(user.nickName)
    const [bio, setBio] = useState(user.bio)

    const navigate = useNavigate();

    function submitHandler() {
        editUser({nickName, bio, googleId: user.googleId})
        navigate("/")
    }


    return (
        <div>
            <h3>Edit your profile</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input onChange={(event) => setNickname(event.target.value)} defaultValue={user.nickName}
                           type={"text"}/>
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea onChange={(event) => setBio(event.target.value)} defaultValue={user.bio} name="" id=""
                              cols="30" rows="10"/>
                </div>
                <input type={"submit"} value={"Submit"}/>
                <input type={"button"} value={"Back"} onClick={ () => navigate("/")} />
            </form>

        </div>
    );
}

export function Application() {
    const {getCurrentUser} = useContext(UserApiContext);
    const {loading, error, data} = useLoading(
        async () => await getCurrentUser(),
        []
    );

    if (data === undefined || data === null) {
        return (
            <div>
                <LoginPage/>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <header>
                <Top user={data}/>
            </header>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/chatroom"} element={<ChatRoomPage user={data}/>}/>
                <Route path={"/browse-users"} element={<UserListPage/>}/>
                <Route path={"/browse-users/:id"} element={<UserProfilePage/>}/>
                <Route path={"/edit-profile"} element={<EditProfilePage user={data}/>}/>

            </Routes>
        </BrowserRouter>
    );
}