const dataLoaderService = async (loadData: any, path: string) => {
  return await loadData(path);
};
export { dataLoaderService };
