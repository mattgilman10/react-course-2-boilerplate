import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';
// react-test-renderer

test("Should render Dashboard correctly", () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});