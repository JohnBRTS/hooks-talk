import React, { useReducer, useEffect, useRef } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

const usePrevious = value => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(
    () => {
      ref.current = value;
    },
    [value]
  ); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

// Use usePrevious
const PreviousExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const prevState = usePrevious(state);
  // Have access to state now and in it's previous state
  // useEffect(() => {
  //   if (state !== prevCount) {
  //     // do something
  //   }
  // }, [state]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>State: {state.count}</div>
        <div>Previous State: {prevState && prevState.count}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
};

export default PreviousExample;
