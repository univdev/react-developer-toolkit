export const barrelFileFactory = (fileName: string) => {
  return `export * from './${fileName}';`;
};
