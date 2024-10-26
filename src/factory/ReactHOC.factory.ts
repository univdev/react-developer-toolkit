export const reactHOCFactory = (hocName: string) => `import { ComponentType } from 'react';

export type IComponentRequiredProps = {
  // Write required props.
};

export function ${hocName}<P = IComponentRequiredProps>(Component: ComponentType<P>) {
  return function(props: P) {
    return (
      <Component { ...props as any } />
    );
  };
};

export default ${hocName};
`;
