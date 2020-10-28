import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testing/helpers'
import App from './App';

describe('App component', () => {
	const setup = () => shallow(<App />);

    beforeAll(() => {
    });

    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
    });

    it('should render a Header component', () => {
        const wrapper = setup();
        const header = findByTestAttr(wrapper, 'header-component');
        expect(header.length).toBe(1);
	});
	
	it('should render a Footer component', () => {
        const wrapper = setup();
        const footer = findByTestAttr(wrapper, 'footer-component');
        expect(footer.length).toBe(1);
    });
});
