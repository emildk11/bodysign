import { FileSystemModule } from './file-system.module';

describe('FileSystemModule', () => {
  let fileSystemModule: FileSystemModule;

  beforeEach(() => {
    fileSystemModule = new FileSystemModule();
  });

  it('should create an instance', () => {
    expect(fileSystemModule).toBeTruthy();
  });
});
