import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { CategoryAdd } from "../../components/CategoryAdd";

describe("Tests in CategoryAdd", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
  });

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("The submit simulation, should not submit if not exist inputValue(the preventFDefault is OK)", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("The submit should work as expected", () => {
    const value = "Hello Word";
    //Comprobamos que se haya llamado a setCategories uan vez y como parametro una funcion
    //ademas que se limpie la caja de texto
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value")).toBe("");
  });
  test("The submit not work if length of value is less than 3", () => {
    const value = "Hi";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
