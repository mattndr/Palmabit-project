import { loadDataFromFile } from './loadDataFromFile';
import fs from 'fs/promises';
jest.mock('fs/promises');

describe('loadDataFromFile', () => {
  (fs as jest.Mocked<typeof fs>).readFile.mockReturnValue(Promise.resolve(''));

  it('should load data from file using fs', async () => {
    const src = '';
    loadDataFromFile(src);
    expect(fs.readFile).toBeCalled();
  });
});
