import { ChildComponentPage } from './app.po';

describe('child-component App', () => {
  let page: ChildComponentPage;

  beforeEach(() => {
    page = new ChildComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
