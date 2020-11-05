import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests for GifGrid", () => {
  const category = "One Punch";

  test("should display the component correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should display de items with useFetchGifs", () => {
    const gifts = [
      {
        id: "ABC",
        title: "The Title!",
        url: "https://localhost/anything.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifts,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifts.length);
  });
});
