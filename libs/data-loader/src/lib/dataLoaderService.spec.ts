import { dataLoaderService } from './dataLoaderService';

describe('dataLoaderService', () => {
  it('should call a function that loads data', async () => {
    const loadData = jest.fn();
    const path = './test';
    await dataLoaderService(loadData, path);
    expect(loadData).toBeCalledWith(path);
  });
});
