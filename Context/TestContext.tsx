import {
  createContext,
  createSignal,
  ParentProps,
  useContext,
  Accessor,
} from "solid-js";

interface TestContextType {
  counter: {
    value: Accessor<number>;
    increment: () => void;
    decrement: () => void;
  };
}

export const TestContext = createContext<TestContextType | undefined>();

export const ContextProvider = (props: ParentProps) => {
  const [value, changeValue] = createSignal(1);
  const counter: TestContextType = {
    counter: {
      value,
      increment: () => {
        changeValue((prev) => prev * 2);
      },
      decrement: () => {
        changeValue((prev) => prev / 2);
      },
    },
  };
  return (
    <TestContext.Provider value={counter}>
      {props.children}
    </TestContext.Provider>
  );
};

export function useTestContext() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within ContextProvider");
  }
  return context;
}
