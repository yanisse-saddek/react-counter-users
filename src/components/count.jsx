import React from 'react'
export class Count extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="app">
                <h1>Counter</h1>
                <div className="counter">
                    <p className="score">{this.props.count}</p>
                    <div className="buttons">
                    <button onClick={this.props.count !== 0 ?this.props.substractFunction : null}>-</button>
                    <button onClick={this.props.count <= 99? this.props.addFunction: null}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}