export const reactComponentFactory = (componentName: string) => {
  return `import { FC } from 'react';

export type I${componentName}Props = {

};

export const ${componentName}: FC<I${componentName}Props> = () => {
  return (

  );
};

export default ${componentName};
`;
};
