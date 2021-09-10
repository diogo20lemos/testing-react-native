import { BarCodeSection } from "./App";
import React from "react";
import TestRenderer from 'react-test-renderer'

test('no ready', () => {
    const testRenderer = TestRenderer.create(<BarCodeSection />);
    console.log(testRenderer.toJSON());
    expect(testRenderer.toJSON()).toBeNull()
})
test('ready', () => {
    const testRenderer = TestRenderer.create(<BarCodeSection readyScan={true} />);
    console.log(testRenderer.toJSON());
    expect(testRenderer.toJSON()).toBeTruthy() 
})