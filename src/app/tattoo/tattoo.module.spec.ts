import { TattooModule } from './tattoo.module';

describe('TattooModule', () => {
  let tattooModule: TattooModule;

  beforeEach(() => {
    tattooModule = new TattooModule();
  });

  it('should create an instance', () => {
    expect(tattooModule).toBeTruthy();
  });
});
