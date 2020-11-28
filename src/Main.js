import React, {Component} from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "./Home"
import AboutUs from "./AboutUs"
import Gallery from "./Gallery"
import Events from "./Events"
import Parts from "./Parts"
import Technical from "./Technical"
import ContactUs from "./ContactUs"


class Main extends Component
{
    render() {
        return (
            <HashRouter>
            <div>
                <h1>MGBD Parts & Service</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/parts">Parts</NavLink></li>
                    <li><NavLink to="/technical">Technical</NavLink></li>
                    <li><NavLink to="/contactUs">Contact Us</NavLink></li>
                    
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/events" component={Events} />
                    <Route path="/parts" component={Parts} />
                    <Route path="/technical" component={Technical} />
                    <Route path="/contactUs" component={ContactUs} />
                   
                    
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main