import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import NavBar from "./Components/Nav/Nav";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import store from "./redux/store";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";


const App = () => {
    //функция возвращает разметку jsx
    //props - объект, который передает в компоненту какие-то данные
    let state = store.getState();

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar store={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer
                       />}/>

                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer
                       />}/>

                <Route path="/users"
                       render={() => <UsersContainer/>
                       }/>

                <Route path="/login"
                       render={() => <LoginPage/>
                       }/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
};

export default App;