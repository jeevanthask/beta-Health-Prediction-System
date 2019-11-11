import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Admin from "./components/admin";
import Patient from "./components/patient";
import Doctor from "./components/doctor";
import Navigation from "./components/navigation";
import WelcomeScreen from "./components/welcomescreen";

class App extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <BrowserRouter>
                    <Navigation/>
                    <Switch>

                        <Route path = "/" component = {WelcomeScreen} exact/>
                        <Route path = "/admin" component = {Admin}/>
                        <Route path = "/patient" component = {Patient}/>
                        <Route path = "/doctor" component = {Doctor}/>
                        <Route component = {Error}/>

                    </Switch>
                </BrowserRouter>

            </div>

        )
    }
}

export default App