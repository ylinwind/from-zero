import React from 'react';
import { dirname } from 'path';

class Hello extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>
                <p className="title">Hello World!</p>
                <p className="title_">hahahahah</p>
                <p><img src="../favicon.ico"/></p>
            </div>
        )
    }

}

export default Hello;