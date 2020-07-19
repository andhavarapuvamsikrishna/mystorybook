import React from "react"
import { shallow } from "enzyme"
import Textarea from "./Textarea"
import { findByTestAttr } from "../utils/find.js"
import renderer from "react-test-renderer" 
const setUp=(props={}) =>{
    const component =shallow(<Textarea {...props} />)
    return component
    }

describe("my text area component",() =>{
    it("should match the snapshot",() =>{
        const tree=renderer.create(<Textarea />).toJSON()
        expect(tree).toMatchSnapshot() 
  
    })

    it("should renspond to change",()=>{
       
        const wrapper=setUp()
        let textarea=findByTestAttr(wrapper,"texta")
        textarea.simulate('change',{target:{name:"r1",value:"vamsi"}})
        textarea=findByTestAttr(wrapper,"texta")
        expect(textarea.props().value).toEqual("vamsi")    
  
    })
    it("should have maximum 40 characters",()=>{
       //let v="my name is vamsikrishna, iam doing intern"
        const wrapper=setUp()
        let textarea=findByTestAttr(wrapper,"texta")
        textarea.simulate('change',{target:{name:"r1",value:"my name is vamsi krishna iam an internal"}})
        textarea.simulate('change',{target:{name:"r1",value:"my name is vamsi krishna iam an internaladff"}})
        textarea=findByTestAttr(wrapper,"texta")  
        expect(wrapper.state('r1')).toEqual("my name is vamsi krishna iam an internal")      
      
    })      
        
})  
         