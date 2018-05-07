// Make Enzyme functions available in all test files without importing
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const  { shallow, render, mount } = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};