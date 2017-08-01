import { Proj3Page } from './app.po';

describe('proj3 App', () => {
  let page: Proj3Page;

  beforeEach(() => {
    page = new Proj3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
