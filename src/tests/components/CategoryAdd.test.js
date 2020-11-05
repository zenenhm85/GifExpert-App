import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { CategoryAdd } from '../../components/CategoryAdd';

describe('Tests in CategoryAdd ', () => {
    const setCategories = ()=>{};
    const wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

    test('should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();                
    })
        
})
