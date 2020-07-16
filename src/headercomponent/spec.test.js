import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../utils/find.js"

const getComponent=(props={})=>{
    const cm=shallow(<Header {...props} />)
    return cm
}

describe("my header component", () => {
    let component;
    beforeEach(() =>{
        component=getComponent()
    })
  it("it should render without errors", () => {
    let wrapper = findByTestAttr(component,'wrap')
    expect(wrapper.length).toBe(1);
  });
  it("should render a logoimg",() =>{
    const wrapper=findByTestAttr(component,'logoimg')
    expect(wrapper.length).toBe(1);
})
});
