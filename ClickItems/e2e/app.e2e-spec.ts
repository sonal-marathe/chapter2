import { ClickItemsPage } from './app.po';

describe('click-items App', () => {
  let page: ClickItemsPage;

  beforeEach(() => {
    page = new ClickItemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
