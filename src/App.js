import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Route, BrowserRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {Header} from "./components/Header";
import {Profile} from "./components/content/profile/Profile";
import {Messages} from "./components/content/messages/Messages";
import {News} from "./components/content/news/News";
import {Music} from "./components/content/music/Music";
import {Settings} from "./components/content/settings/Settings";

function App() {
    return (
        <div className={"container"}>
            <BrowserRouter>
                <Header/>
                <div className={"row"}>
                    <Navbar/>
                    <div className={"col-md-10 p-0"}>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/News" component={News}/>
                        <Route path="/Music" component={Music}/>
                        <Route path="/Settings" component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App