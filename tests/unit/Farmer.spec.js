import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import Farmer from "@/components/Farmer.vue";

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
describe("Farmer", () => {
  //  first spec to test splitFarmername()
  it("has the farmers' fullname with two names and then splits them into two", () => {
    const wrapper = shallowMountFunction(Farmer, {});
    const farmerName = 'John Doe';
    // set the farmer name
    wrapper.setData({ farmer: { name: farmerName} });
    // click the save farmer button to trigger the splitFarmername()
    wrapper.find('button#save-btn').trigger('click');
    // get the full name list item
    const fullname = wrapper.findAll('li').at(0) 
    // get the first name list item
    const firstname = wrapper.findAll('li').at(1) 
    // get the last name list item
    const lastname = wrapper.findAll('li').at(2) 
    // get the other name list item
    const othername = wrapper.findAll('li').at(3) 
    // assert the full name value
    expect(fullname.text()).equal('Full name is: John Doe')
    // assert the first name value
    expect(firstname.text()).equal('First name is: John')
    // assert the last name value
    expect(lastname.text()).equal('Last name is: Doe')
    // assert the other name value
    expect(othername.text()).equal('Other name is:')
  });

    //  second spec to test splitFarmername()
    it("the farmers' fullname with 3 names and then splits all accordingly", () => {
        const wrapper = mountFunction(Farmer, {});
        const farmerName = 'John Doe Maddison';
        // set the farmer name
        wrapper.setData({ farmer: { name: farmerName} });
        // click the save farmer button to trigger the splitFarmername()
        wrapper.find('button#save-btn').trigger('click');
        // get the full name list item
        const fullname = wrapper.findAll('li').at(0) 
        // get the first name list item
        const firstname = wrapper.findAll('li').at(1) 
        // get the last name list item
        const lastname = wrapper.findAll('li').at(2) 
        // get the other name list item
        const othername = wrapper.findAll('li').at(3) 
        // assert the full name value
        expect(fullname.text()).equal('Full name is: John Doe Maddison')
        // assert the first name value
        expect(firstname.text()).equal('First name is: John')
        // assert the last name value
        expect(lastname.text()).equal('Last name is: Doe')
        // assert the other name value
        expect(othername.text()).equal('Other name is: Maddison')
    });

    //  third spec to test splitFarmername()
    it("the farmers' fullname with more than 3 names and then splits the first two then joins the rest", () => {
        const wrapper = mountFunction(Farmer, {});
        const farmerName = 'John Doe Maddison Peters Cameron';
        // set the farmer name
        wrapper.setData({ farmer: { name: farmerName} });
        // click the save farmer button to trigger the splitFarmername()
        wrapper.find('button#save-btn').trigger('click');
        // get the full name list item
        const fullname = wrapper.findAll('li').at(0) 
        // get the first name list item
        const firstname = wrapper.findAll('li').at(1) 
        // get the last name list item
        const lastname = wrapper.findAll('li').at(2) 
        // get the other name list item
        const othername = wrapper.findAll('li').at(3) 
        // assert the full name value
        expect(fullname.text()).equal('Full name is: John Doe Maddison Peters Cameron')
        // assert the first name value
        expect(firstname.text()).equal('First name is: John')
        // assert the last name value
        expect(lastname.text()).equal('Last name is: Doe')
        // assert the other name value
        expect(othername.text()).equal('Other name is: Maddison Peters Cameron')
    });

    //  third spec to test splitFarmername()
    it("shows an error when the farmers' fullname is empty string", () => {
        const wrapper = mountFunction(Farmer, {});
        const farmerName = '';
        // set the farmer name
        wrapper.setData({ farmer: { name: farmerName} });
        // click the save farmer button to trigger the splitFarmername()
        wrapper.find('button#save-btn').trigger('click');
        // text content for div showing an error 
        expect(wrapper.find("div .error").text()).to.be.string(
            "A valid farmer full name has atleast 2 names"
          );
        // get the full name list item
        const fullname = wrapper.findAll('li').at(0) 
        // get the first name list item
        const firstname = wrapper.findAll('li').at(1) 
        // get the last name list item
        const lastname = wrapper.findAll('li').at(2) 
        // get the other name list item
        const othername = wrapper.findAll('li').at(3) 
        // assert the full name value
        expect(fullname.text()).equal('Full name is:')
        // assert the first name value
        expect(firstname.text()).equal('First name is:')
        // assert the last name value
        expect(lastname.text()).equal('Last name is:')
        // assert the other name value
        expect(othername.text()).equal('Other name is:')
    });

    //  third spec to test splitFarmername()
    it("shows an error when the farmers' fullname has one name", () => {
        const wrapper = mountFunction(Farmer, {});
        const farmerName = 'John';
        // set the farmer name
        wrapper.setData({ farmer: { name: farmerName} });
        // click the save farmer button to trigger the splitFarmername()
        wrapper.find('button#save-btn').trigger('click');
        // text content for div showing an error 
        expect(wrapper.find("div .error").text()).to.be.string(
            "A valid farmer full name has atleast 2 names"
          );
        // get the full name list item
        const fullname = wrapper.findAll('li').at(0) 
        // get the first name list item
        const firstname = wrapper.findAll('li').at(1) 
        // get the last name list item
        const lastname = wrapper.findAll('li').at(2) 
        // get the other name list item
        const othername = wrapper.findAll('li').at(3) 
        // assert the full name value
        expect(fullname.text()).equal('Full name is: John')
        // assert the first name value
        expect(firstname.text()).equal('First name is:')
        // assert the last name value
        expect(lastname.text()).equal('Last name is:')
        // assert the other name value
        expect(othername.text()).equal('Other name is:')
    });
});
