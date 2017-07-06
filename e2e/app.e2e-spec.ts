import { ChemDemoPage } from './app.po';

describe('chem-demo App', () => {
  let page: ChemDemoPage;

  beforeEach(() => {
    page = new ChemDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
