import { AngularActorTemplateAppPage } from './app.po';

describe('angular-actor-template-app App', () => {
  let page: AngularActorTemplateAppPage;

  beforeEach(() => {
    page = new AngularActorTemplateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
