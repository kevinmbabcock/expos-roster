import { ExposRosterPage } from './app.po';

describe('expos-roster App', () => {
  let page: ExposRosterPage;

  beforeEach(() => {
    page = new ExposRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
