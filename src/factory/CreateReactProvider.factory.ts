export const createReactProviderFactory = (contextName: string) => `import { FC } from "react";

export type ITestProviderProps = {
  // Enter provider props
};

export const TestProvider: FC<ITestProviderProps> = () => {
  return (

  );
};

export default TestProvider;
`;