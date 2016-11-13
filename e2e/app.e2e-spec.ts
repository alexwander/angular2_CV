import { AngDemoPage } from './app.po';

describe('ang-demo App', function() {
  let page: AngDemoPage;

  beforeEach(() => {
    page = new AngDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
