import React, {Component} from "react"
import textarea from "./textarea.css"
class Textarea extends Component {
    constructor() {
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form> 
                <textarea  className="txt" placeholder="enter some text" value={this.handleChange.value} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Textarea