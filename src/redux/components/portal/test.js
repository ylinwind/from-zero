import React from 'react';

class TestComs extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        console.log(this.props,'---------------');
        const { clickHere , clickTest_2} = this.props;
        return(
            <div>
                test coms
                <p><button onClick={clickHere}>click_1</button></p>
                <p><button onClick={clickTest_2}>click_2</button></p>
            </div>
        )
    }

}

export default TestComs;