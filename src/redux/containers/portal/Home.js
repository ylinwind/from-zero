import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Banner from '../../components/ant-motion/Banner';

class Home extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div className="home-bg">12
                <ul className="home-nav-list" >
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/mine">personal</Link>
                    </li>
                    <li>
                    <Link to="/artcle">Topics</Link>
                    </li>
                </ul>
                <div>
                    {/* <Banner/> */}
                    <div className="home-bg-img">
                    </div>
                    {/* <img src='./src/imgs/banner_1.jpg'/> */}
                </div>
            </div>
        )
    }

}

export default Home;