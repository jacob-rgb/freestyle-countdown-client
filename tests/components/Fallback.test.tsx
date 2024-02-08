import React from 'react'; React // React import to avoid warning
import { render } from '@testing-library/react';
import Fallback from '../../src/components/commons/Fallback';
describe('Fallback component', () => {

    const component = render(<Fallback/>);
    it('Component shpuld render with loading text', () => {
        expect(component.queryByText('Loading')?.textContent).toBe('Loading');
    }); 
}); 