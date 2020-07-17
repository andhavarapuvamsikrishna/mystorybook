import React from "react";
import {shallow} from "enzyme"
import Tablecom from "./Tablecom"
import { findByTestAttr } from "./utils/find"
import checkPropTypes from "check-prop-types"

const setUp = (props={}) =>{
    const component=shallow(<Tablecom {...props} />)
    return component;
} ;
describe("my table component",()=>{

    describe("checking prop types",() =>{
        it("should not throw a warning",() =>{
            const expectedProps = {  
                width:"90%",
                headers:[
                    { title: "Id" }, 
                    { title: "Name" },
                    { title: "Age" },
                    { title: "Qualification" },  
                    { title: "Rating" },
                  ],
                data:[
                    { id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3 },
                    { id: 2, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
                ]
            }
            const propsErr=checkPropTypes(Tablecom.propTypes,expectedProps,'props',Tablecom.name);
            expect(propsErr).toBeUndefined();
             
        })     
    })

    describe("have no props",() =>{
        let wrapper
        beforeEach(() =>
        {
            wrapper=setUp()
        })
        it("should not render without props",() =>{
            const table=findByTestAttr(wrapper,"table")
            expect(table.length).toBe(0) 
        })
        
    })

    describe('Have props',() =>{
        const tprops = {  
            headers:[
                { title: "Id" }, 
                { title: "Name" },
                { title: "Age" },
                { title: "Qualification" },
                { title: "Rating" },
              ],
            data:[
                { id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3 },
                { id: 2, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
                { id: 3, name: "c", age: 42, qualification: "B.E", rating: 3 },
                { id: 4, name: "a", age: 29, qualification: "B.tech", rating: 2 },
                { id: 5, name: "a", age: 29, qualification: "B.arch", rating: 1 }
            ],
            width:"100%"
        };
        let wrapper;
        beforeEach(() =>{
            const props = {
                headers:[ 
                    { title: "Id" },
                    { title: "Name" },
                    { title: "Age" },
                    { title: "Qualification" },
                    { title: "Rating" },
                  ],
                data:[
                    { id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3 },
                    { id: 2, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
                    { id: 3, name: "c", age: 42, qualification: "B.E", rating: 3 },
                    { id: 4, name: "a", age: 29, qualification: "B.tech", rating: 2 },
                    { id: 5, name: "a", age: 29, qualification: "B.arch", rating: 1 ,someTest:10 }
                ]  
            };
            //console.log(props.data.length) 
            wrapper=setUp(props)  
        });  
        it("should render without errors",() => {
            const table = findByTestAttr(wrapper,"nann")
            expect(table.length).toBe(1);
        })
        it("should have only one one head",() => {
            const thead=findByTestAttr(wrapper,"thead")
            expect(thead.length).toBe(1);
        })
        it("should only have one body tag",() => {
            
            const tbody=findByTestAttr(wrapper,"tbody")
            expect(tbody.length).toBe(1)    
        }) 
        it("the number of th tags should be equal to no of columns",() => {

            const th=findByTestAttr(wrapper,"th")
            expect(th.length).toBe(tprops.data.length) 
        })
        it("tbody should have the same no of tr tags as data rows",() =>{
            const tr=findByTestAttr(wrapper,"tr")
            expect(tr.length).toBe(tprops.data.length)
        }) 
        it("same number of content in header props and table props",() =>{
            const hrows=findByTestAttr(wrapper,"th")
            hrows.forEach((th,rowIndex) => { 
                const cells=findByTestAttr(wrapper,"th");
                expect(cells.length).toBe(tprops.headers.length)
 
            })  
              
        }) 

    })

})





