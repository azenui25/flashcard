import React, {Component} from 'react'

class FlashCard extends Component{
    state ={
        displayQuestion: true

    }

    handleCLick = () => {
        console.log('Clicked')
        this.setState({ displayQuestion: !this.state.displayQuestion})
    }

    render(){
        return(
            <div>
                <h1>Question: {this.props.question} </h1>
                <h2>Answer: {this.props.answer}</h2>
                <p>{this.state.displayQuestion ? 'true' : 'false'} </p>
                <button onClick={this.handleCLick}>Click!</button>
            </div>
        )
    }

}


export default FlashCard