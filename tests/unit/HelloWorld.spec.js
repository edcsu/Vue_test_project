import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import sinon from 'sinon';

// mount function to mount vue components
const mountFunction = (component, options) => {
  return mount(component, {
    ...options,
  })
}

// shallowMount function to ahallowmount vue components
const shallowMountFunction = (component, options) => {
  return shallowMount(component, {
    ...options,
  })
}

// HelloWorld test suite
describe("HelloWorld", () => {
  //  first spec to test prop
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMountFunction(HelloWorld, { propsData: { msg } });
    expect(wrapper.text()).to.include(msg);
  });

  // second spec to show the error is rendered
  it("renders error when the username is less than 7 characters", () => {
    const wrapper = shallowMountFunction(HelloWorld, {
      data: { username: "" }
    });
    expect(wrapper.find("div .error").text()).to.be.string(
      "Please enter a longer username"
    );
  });

  // third spec to show the error isnot rendered
  it("renders no error when the username is greater than 7 characters", () => {
    const wrapper = shallowMountFunction(HelloWorld, {
      data: { username: "Natukunda" }
    });
    expect(wrapper.find("div .error").text()).to.be.string("");
  });

  // fourth spec to show the error isnot rendered
  it("has no h1 tag with id of Hello", () => {
    const wrapper = shallowMountFunction(HelloWorld, {
      data: { showHello: false }
    });
    expect(wrapper.contains("h1 #hello")).to.be.false;
  });

  // fifth spec to show the error isnot rendered
  it("has an h1 tag with id of Hello", () => {
    const wrapper = shallowMountFunction(HelloWorld, {
      data: { showHello: true }
    });
    expect(wrapper.contains("h1 #hello")).to.be.false;
  });

  // sixth spec to show the error isnot rendered
  it("has the display method called when the show button is clicked", () => {
    const wrapper = shallowMountFunction(HelloWorld, {
      // data: { showHello: false }
    });
    const clickMethodStub = sinon.stub()
    wrapper.setMethods({ display: clickMethodStub })
    const button = wrapper.find("#display-btn");
    // Simulate a click on the button
    button.trigger('click', { mouse: true });
    expect(clickMethodStub.calledOnce).to.be.true;
    // expect(clickMethodStub.returnValues[0]).to.be.true;
  });

});
