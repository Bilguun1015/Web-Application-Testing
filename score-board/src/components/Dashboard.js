import React from "react"
import Display from './Display'

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            strikes: 0,
            balls: 0
        }
    }
     strike = () => {
        // this.setState({count: this.state.strikes + 1})
        
        this.setState({
            strikes: this.state.strikes+1});
        if(this.state.strikes > 1){
            this.setState({strikes: 0})
            this.setState({balls: 0})
        }
        //console.log('after: ' + this.state.strikes);
    }
     ball = () => {
        this.setState({balls: this.state.balls+1})
        if (this.state.balls > 2){
            this.setState({strikes: 0})
            this.setState({balls: 0})
        }
        console.log('after: ' + this.state.balls);
      }
    //  checkMax = () => {
    //     if(this.state.strikes > 3){
    //         this.setState({strikes: 0})
    //         this.setState({balls: 0})
    //     } else if (this.state.balls > 4){
    //         this.setState({strikes: 0})
    //         this.setState({balls: 0})
    //     }
    // }
    render() {
        return (

            <>
                <Display strikes={this.state.strikes}
                balls = {this.state.balls}    
                />
                <div>
                    <button onClick={ this.strike}>Strike</button>
                    <button onClick={this.ball}>Ball</button>
                    <button>Foul</button>
                    <button>Hit</button>
                </div>
            </>
        )
    }
}

export default Dashboard