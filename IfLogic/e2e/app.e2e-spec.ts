import { IfLogicPage } from './app.po';

describe('if-logic App', () => {
  let page: IfLogicPage;

  beforeEach(() => {
    page = new IfLogicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
