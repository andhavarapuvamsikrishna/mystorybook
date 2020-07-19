import React, {Component} from "react"
import textarea from "./textarea.css"
class Textarea extends Component {
    constructor() {
        super()
        this.state = {
            characters:40,
            r1:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        let v=value.length
        let m=40-v
        if(m<0)
        {
            this.setState((prevState) => ({
                [name]: prevState.r1,
                //characters:20-v
            }))  
        }
        else
        {
            this.setState({
                [name]: value,
                characters:40-v
            })
        }
        
    }
    
    render() {
        return (
            <form> 
                <textarea  data-test="texta" className="txt" placeholder="enter some text" name="r1" value={this.state.r1} onChange={this.handleChange}/>
                <br />
        <label>you have </label>
        <input type="text" name="r1" style={{width:"30px"}} value={this.state.characters}  readOnly/>left
            </form>
        )
    }
}

export default Textarea