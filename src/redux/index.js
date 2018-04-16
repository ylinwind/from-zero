import React from 'react';
import { dirname } from 'path';
import TestContainer from './containers/portal/test';
import Home from './containers/portal/Home';

import './style';

class Main extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>
                {/* <TestContainer/> */}
                <Home />
            </div>
        )
    }

}

export default Main;