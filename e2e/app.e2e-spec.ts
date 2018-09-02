import { DrawGuessPage } from './app.po';

describe('draw-guess App', function() {
  let page: DrawGuessPage;

  beforeEach(() => {
    page = new DrawGuessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
