import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    //функция возвращает разметку jsx
    //props - объект, который передает в компоненту какие-то данные

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <Dialogs state={props.state.dialogsPage}
                                              dispatch={props.dispatch}
                       />}/>

                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}
                           />}/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>

            </div>
        </div>
    );
};

export default App;