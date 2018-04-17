import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Banner from '../../components/ant-motion/Banner';
import BannerComs from '../../components/Banner';

import {AntBanner,LxBanner} from 'LxComs';

class Home extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let banners = [
            {src:'./src/imgs/banner_1.jpg',text:'1'},
            {src:'./src/imgs/banner_2.jpg',text:'2'},
            {src:'./src/imgs/banner_3.jpg',text:'3'},
            {src:'./src/imgs/banner_4.jpg',text:'4'}
        ]
        return(
            <div className="home-bg">
                {/*<ul className="home-nav-list" >
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
                    <Banner/> 
                    <div className="home-bg-img">
                    1
                    </div>
                    <img src='./src/imgs/banner_1.jpg'/>
                </div>*/}
                    
                <LxBanner
                    datas={banners}
                />
            </div>
        )
    }

}

export default Home;