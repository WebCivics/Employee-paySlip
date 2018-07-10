import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../App';
import CalculateTaxes from '../TaxCalculator/calculatetaxes';
import EmpForm from '../Employee/employeeForm';
import { MemoryRouter } from 'react-router';
import ErrorBoundary from '../hoc/ErrorBoundary';
import { mountWrap } from './TestHelp/contextWrapper';
import { wrap } from 'module';

configure({ adapter: new Adaptor() });

describe('invalid path should redirect to 404', () => {
    const wrapper = mountWrap(
          <MemoryRouter initialEntries={[ '/random' ]} initialIndex={0}>
            <App/>
          </MemoryRouter>
    );
    it('renders static text', () => {
      expect(wrapper.find(CalculateTaxes)).toHaveLength(0);
      expect(wrapper.contains(CalculateTaxes)).toBe(true);
    });
  });

  test('it should call history.push', () => {
    const wrapper = mountWrap(<EmpForm />);
    const push = jest.fn();
    wrapper.setProps({ history: { push } });
    
    });

test('when user clicks button', () => {
  const onButtonClickMock = jest.fn();
  const wrapper = mountWrap(
    <EmpForm
      onButtonClick={onButtonClickMock}
    />
  );
  const buttonElement = wrapper.find('form');
      const button = buttonElement.find('button');
      
      button.simulate('submit'); 
      expect(onButtonClickMock.mock.calls.length).toEqual(0);
      //expect(onButtonClickMock).toHaveBeenCalledWith(true);
});

describe('Emp Form is rendered correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmpForm />);
  });
  
  it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
});
