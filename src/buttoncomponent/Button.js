import React,{Component} from "react"
import { action } from "@storybook/addon-actions"
class Button extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
    }

    handleChange()
    {
        this.setState(function(prevState){
            //console.log(prevState.count)
             return {count:prevState.count+1}
            
        })
    }
    handleChange2()
    {
        this.setState(function(prevState){
            //console.log(prevState.count)
             return {count:prevState.count-1}
            
        })
    }
    render()
    {
        return(
        <div style={{textAlign:"center"}}>
        <h1 data-test="counter1">{this.state.count}</h1>
        <button value="increment" data-test="buttoni" onClick={action('clicked')} onClick={this.handleChange}>increment</button>
        
        <button value="decrement" data-test="buttond" onClick={action('clicked')} onClick={this.handleChange2} >decrement</button>
        </div>
        )
    } 
}
export default Button