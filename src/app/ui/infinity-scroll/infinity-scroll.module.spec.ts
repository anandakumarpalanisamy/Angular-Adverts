import { InfinityScrollModule } from './infinity-scroll.module';

describe('InfinityScrollModule', () => {
  let infinityScrollModule: InfinityScrollModule;

  beforeEach(() => {
    infinityScrollModule = new InfinityScrollModule();
  });

  it('should create an instance', () => {
    expect(infinityScrollModule).toBeTruthy();
  });
});
