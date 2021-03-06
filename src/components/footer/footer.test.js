import React from "react";
import Footer from "./footer.js";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Footer /> component", () => {
  it("should render as the footer", () => {
    const head = shallow(<Footer />);
    expect(head.find("footer").exists()).toBeTruthy();
  });

  it("should render the section", () => {
    const head = shallow(<Footer />);
    expect(head.find("section").exists()).toBeTruthy();
  });
});