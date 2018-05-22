import { TitleModule } from './title.module';

describe('TitleModule', () => {
  let titleModule: TitleModule;

  beforeEach(() => {
    titleModule = new TitleModule();
  });

  it('should create an instance', () => {
    expect(titleModule).toBeTruthy();
  });
});
