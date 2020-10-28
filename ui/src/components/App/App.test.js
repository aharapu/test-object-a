import { shallow } from "enzyme";
import App from './App';

describe('App component', () => {
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  })
  
  
});
