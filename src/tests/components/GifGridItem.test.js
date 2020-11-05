import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

describe("Tests for GifGridItem", () => {
  const url = "https://image.jpg";
  const title = "Title of GIF";
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with the title text", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("should have a img with url equal to this url and alt equal to this title", () => {
    const img = wrapper.find("img");
    /* expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title); esto devuelve todas las propiedades */
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("the div should have the class animate__animated animate__fadeInDown animate__delay-2s", () => {
    const div = wrapper.find("div");

    const [
      ,
      animate__animated,
      animate__fadeInDown,
      animate__delay,
    ] = div.props().className.split(" ");
    expect(animate__animated).toBe("animate__animated");
    expect(animate__fadeInDown).toBe("animate__fadeInDown");
    expect(animate__delay).toBe("animate__delay-2s");
  });
});
