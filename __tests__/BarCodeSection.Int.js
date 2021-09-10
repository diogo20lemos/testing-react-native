import 'react-native';
import React from 'react';
import { BarCodeSection } from '../App';

import {render, fireEvent} from '@testing-library/react-native';

it('renders correctly',() => {
    const rendered = render(<BarCodeSection />)
});
it('handles null value',() => {
    const rendered = render(<BarCodeSection />)
    expect(rendered.toJSON()).toBeNull()
});
it('handles non-null value',() => {
    const rendered = render(<BarCodeSection readyScan={true} />)
    expect(rendered.toJSON()).toBeTruthy()
});
it('handles scanned png',() => {
    const mock = jest.fn()
    const rendered = render(<BarCodeSection readyScan={true} mockScan={'https://pluralsight.com/'} scanned={mock}  />)
    expect(mock).toBeCalled()
});