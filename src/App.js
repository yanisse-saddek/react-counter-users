import React, { useReducer } from 'react'
import data from './components/data.json'
import {Count} from './components/count'



export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
        count: 10
    }
  }

  decrementCount = ()=>{
    this.setState({
        count: this.state.count-1
    })
  }
  incrementCount = ()=>{
    this.setState({
        count: this.state.count+1
    })
  }


    render(){
      var array  = []
        for(var i=0; i<this.state.count; i++){
          array.push(<p>{data[i].name}</p>)
        }


      return(
            <div>
              {console.log(data.length)}
              <Count list={data.length} count={this.state.count} addFunction={this.incrementCount} substractFunction={this.decrementCount}></Count>
              <p>{array}</p>
            </div>
        )
    }
}