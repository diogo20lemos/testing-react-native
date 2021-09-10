/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  const redered = render.create(<App />);
  redered.getAllByText("Select File");
});
it('2 text nodes', () => {
  const redered = render.create(<App />);
  expect(redered.getAllByA11yRole("Text")).toHaveLength(2);
});
it('buttons show', () => {
  const redered = render.create(<App />);
  expect(redered.getAllByA11yRole("Select File")).toHaveLength(1);
  expect(redered.getAllByA11yRole("Select Scanner")).toHaveLength(1);
});
it('file selectable', () => {
  const redered = render.create(<App />)
  const StartScanner = redered.getAllByA11yRole("Select Scanner")[0]
  expect(redered.queryAllByA11yLabel("Barcode Scanner")).toHaveLength(0)
  fireEvent.press(StartScanner)
  expect( await redered.findAllByA11yLabel("Barcode Scanner")).toHaveLength(1)
});
