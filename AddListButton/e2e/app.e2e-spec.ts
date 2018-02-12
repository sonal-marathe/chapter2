import { AddListButtonPage } from './app.po';

describe('add-list-button App', () => {
  let page: AddListButtonPage;

  beforeEach(() => {
    page = new AddListButtonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
