import { createSignal, useContext, type Component } from "solid-js";
import Test from "./Test";
import {
  ContextProvider,
  TestContext,
  useTestContext,
} from "../Context/TestContext";

const App: Component = () => {
  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  );
};

const AppContent: Component = () => {
  const {
    counter: { value, increment, decrement },
  } = useTestContext();

  function onClick() {
    alert("Your value is: " + value());
  }

  return (
    <main class="flex flex-col items-center">
      <p class="text-2xl text-center">{value()}</p>
      <div class="flex flex-row items-center gap-4">
        <button
          onClick={() => increment()}
          type="button"
          class="p-4 bg-neutral-900 text-white text-sm w-40 rounded-lg active:scale-95 transition-all duration-50 cursor-pointer "
        >
          x 2
        </button>
        <button
          onClick={() => decrement()}
          type="button"
          class="p-4 bg-neutral-900 text-white text-sm w-40 rounded-lg active:scale-95 transition-all duration-50 cursor-pointer "
        >
          / 2
        </button>
      </div>
      <button onClick={onClick}>Show</button>
      <Test count={value} />
    </main>
  );
};

export default App;
