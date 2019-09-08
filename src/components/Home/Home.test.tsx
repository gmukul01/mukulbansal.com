import { render } from '@test-utils';
import React from 'react';
import { Home } from './Home.component';

describe('Home Component', () => {
    it('should render properly', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});
