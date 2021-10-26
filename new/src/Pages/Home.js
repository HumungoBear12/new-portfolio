import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar' 
import {
  Switch,
  Route,
} from "react-router-dom";
import Links from '../Util/Links'  
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            {Links
            .filter((link) => link.text !== "Home")
            .map((link) => {
                const { id, url, page } = link;
                return (
                <Route key={id} path={url}>
                    {page}
                </Route>
                );
            })}
        </Switch>
        </div>
    )
}

export default Home
