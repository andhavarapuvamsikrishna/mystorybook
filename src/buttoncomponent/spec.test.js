import React from "react"
import Button from "./Button.js"
import {shallow} from "enzyme"
import { findByTestAttr } from "../utils/find.js"
import renderer from "react-test-renderer"
const setUp=(props={}) =>{
    const component = shallow(<Button {...props} />)
    return component
}

describe("my button component",() =>
{
    it("matches the snapshot",() =>{
        const tree = renderer.create(<Button />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("starts with count 0",()=>
    {
        let wrapper=setUp();
        const counter=findByTestAttr(wrapper,"counter1")
        expect(counter.text()).toEqual("0")  
        //const counter=wrapper.state().count
        //console.debug(counter)
        //expect(counter).toBe(0)
    })   
    it("should increment the count when the button is clicked",() =>{
        let wrapper = setUp()
        const buttoni=findByTestAttr(wrapper,"buttoni")
        buttoni.simulate("click")
        const counter=findByTestAttr(wrapper,"counter1")
        expect(counter.text()).toEqual("1")  
    })
    it("should decrement the count when th button is clicked",() =>{
        let wrapper=setUp()
        const buttond=findByTestAttr(wrapper,"buttond")
        buttond.simulate("click")
        const counter=findByTestAttr(wrapper,"counter1")
        expect(counter.text()).toEqual("-1")
    })
})           