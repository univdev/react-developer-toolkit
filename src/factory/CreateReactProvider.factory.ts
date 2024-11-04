export const createReactProviderFactory = (providerName: string) => `import { FC } from "react";

export type I${providerName}Props = {
  // Enter provider props
};

export const ${providerName}Provider: FC<I${providerName}Props> = () => {
  return (

  );
};

export default ${providerName}Provider;
`;