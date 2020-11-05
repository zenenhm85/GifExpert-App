import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifExpertApp } from "../GifExpertApp";

describe('Tests for GifExpertApp', () => {
    test("should display the component correctly", () => {
       
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
      });    
      test("should display the component correctly, when items gifts are providers", () => {
       
        const categories = ["Spider", "Simpson"]
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
      }); 
})
