export const barrelFileFactory = (componentName: string) => {
  return `export * from './${componentName}';`;
};
