import { LoginModule } from './login.module';

describe('AuthModule', () => {
  let authModule: LoginModule;

  beforeEach(() => {
    authModule = new LoginModule();
  });

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
