import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  //функция возвращает разметку jsx
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={ () => <Dialogs /> } />
          <Route path="/profile" render={ () => <Profile />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;