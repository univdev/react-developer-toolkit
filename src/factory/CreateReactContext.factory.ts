export const createReactContextFactory = (contextName: string) => `import { createContext } from "react";

export type I${contextName}ContextValue = {
  // Enter context props
};

export const ${contextName}Context = createContext<I${contextName}ContextValue | undefined>(undefined);

export default ${contextName}Context;
`;