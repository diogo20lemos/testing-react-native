
describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });
    it('should run', async () => {

    });
    // it('renders correctly', () => {
    //     redered.getAllByText("Select File");
    //   });
    it('2 text nodes',async () => {
        // expect(redered.getAllByA11yRole("Text")).toHaveLength(2);
        await expect( element(by.label('Text')).atIndex(0) ).toBeVisible()
        await expect( element(by.label('Text')).atIndex(1) ).toBeVisible()
    });
    it('buttons show', () => {
        await expect( element(by.label('Select File')) ).toBeVisible()
        await expect( element(by.label('Select Scanner')) ).toBeVisible()
    });
    it('scanner opens',async () => {
        // const StartScanner = redered.getAllByA11yLabel("Select Scanner")[0]
        // expect(redered.queryAllByA11yLabel("Barcode Scanner")).toHaveLength(0)
        await expect( element(by.label('Barcode Scanner')) ).toBeNotVisible()
        await element(by.label('Select Scanner')).tap()
        await expect( element(by.label('Barcode Scanner')) ).toBeVisible()    
    });
    it('scanner opens and closes',async () => {
        await expect( element(by.label('Barcode Scanner')) ).toBeNotVisible()
        await element(by.label('Select Scanner')).tap()
        await expect( element(by.label('Barcode Scanner')) ).toBeVisible()   
        await element(by.text('Close')).tap() 
    });
      
});