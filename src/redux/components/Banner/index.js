import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style/index.css';

class Banner extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        const { datas = [] } = this.props;
        let lis = [];

        let nowAnimation = {
            animation: `bannerAnimation_fade 5s`,
            mozAnimation: `bannerAnimation_fade 5s`,	/* Firefox */
            webkitAnimation: `bannerAnimation_fade 5s`,	/* Safari 和 Chrome */
            oAnimation: `bannerAnimation_fade 5s`,	/* Opera */
        }

        let time = datas.length*5;

        datas.map((v,i)=>{
            lis.push(
                <li 
                    key={i} 
                    className='lx-coms-banner-item' 
                    style={{
                        background:`url(${v.src}) no-repeat center`,
                        backgroundSize:`100% auto`,
                        animation:`bannerAnimation_fade 5s linear ${i*5}s infinite alternate`,
                        // display:'none'
                        }}>
                </li>
            )
        });
        console.log('ininin')
        return(
            <div className='lx-coms-banner'>
                <ul className='lx-coms-banner-ul'>
                    {lis}
                </ul>
            </div>
        )
    }

}

export default Banner;