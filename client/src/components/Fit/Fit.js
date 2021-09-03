import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import './Fit.css';

class Fit extends Component{

    constructor(props){
        super(props)
        this.state = {show : false, show2 : false};
       // this.state = {show2 : false};

        this.toggleDiv = this.toggleDiv.bind(this);
        this.toggleDiv2 = this.toggleDiv2.bind(this);
    }

    toggleDiv = () => {
        const{show} = this.state;
        this.setState({show: !show})
    }

    toggleDiv2 = () => {
        const{show2} = this.state;
        this.setState({show2: !show2 })
    }

    render(){
        return(
            <div className= "Fit">
                <header>
                    <div>
                    <h1 className="heading">Welcome to fitness chart</h1>
                    <h3 className= "pHeading">Here is your desired contents</h3>
                    </div>
                    <div>
                        <br />
                        <button className="btn btn1" onClick= {this.toggleDiv}>{this.state.show ? "Hide" : "Show" }</button> <label className = "line">the contets related to weight lose</label>
                        <br /> <br /> 
                        {this.state.show && <Player />}
                    </div>
                    <div>
                        <br />
                        <button className="btn btn2" onClick= {this.toggleDiv2}>{this.state.show2 ? "Hide" : "Show"} </button> <label className = "line">the contets related to exercise tips</label>
                        <br /> <br />
                        {this.state.show2 && <Player2 />}
                    </div>
                </header>
    
            </div>
        )
    }
    
}

class Player extends Component{
    render(){
        return(
            <div>
                    <ReactPlayer width = "400px" height= "240px" className = "player" url ="https://www.youtube.com/watch?v=2MoGxae-zyo " controls={true}/>
                    <ReactPlayer width = "400px" height= "240px" className = "player"  url ="https://www.youtube.com/watch?v=enYITYwvPAQ " controls={true}/>
            </div>
        )
    }
}

class Player2 extends Component{
    render(){
        return(
            <div>
                    <ReactPlayer width = "400px" height= "240px" className = "player" url ="https://www.youtube.com/watch?v=yL_dE81O_mw " controls={true}/>
                    <ReactPlayer width = "400px" height= "240px" className = "player" url ="https://www.youtube.com/watch?v=2pLT-olgUJs " controls={true}/>
            </div>
        )
    }
}
export default Fit;