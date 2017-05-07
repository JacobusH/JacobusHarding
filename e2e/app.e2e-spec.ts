import { JacobusHardingPage } from './app.po';

describe('jacobus-harding App', () => {
  let page: JacobusHardingPage;

  beforeEach(() => {
    page = new JacobusHardingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
