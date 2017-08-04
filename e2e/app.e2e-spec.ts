import { MyGoodSchoolPage } from './app.po';

describe('my-good-school App', () => {
  let page: MyGoodSchoolPage;

  beforeEach(() => {
    page = new MyGoodSchoolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
