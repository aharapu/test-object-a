import Header from './Header';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testing/helpers';

const setup = () => shallow(<Header />);

describe('Header component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
    });

    it('should render a page title', () => {
        const wrapper = setup();
        const title = findByTestAttr(wrapper, 'page-title');
        expect(title).toHaveLength(1);
    });
});
