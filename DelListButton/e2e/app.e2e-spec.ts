import { DelListButtonPage } from './app.po';

describe('del-list-button App', () => {
  let page: DelListButtonPage;

  beforeEach(() => {
    page = new DelListButtonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
