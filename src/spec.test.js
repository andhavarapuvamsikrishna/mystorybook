import React from "react";
import {shallow} from "enzyme"
import Tablecom from "./Tablecom"
import { findByTestAttr } from "./utils/find"
const setUp = ({props={}}) =>{
    const component=shallow(<Tablecom {...props} />)
    return component;
} ;
describe("my table component",()=>{

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
            ]
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
            console.log(props.data.length) 
            wrapper=shallow(<Tablecom {...props} />)
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
            expect(tprops.data.length).toBe(5)    
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





