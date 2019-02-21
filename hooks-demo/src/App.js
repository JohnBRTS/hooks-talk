import React from "react";
import "./App.css";

import UseEffectCounter from "./examples/useEffect/counterWithDocumentTitleUpdate/CounterWithDocumentTitleUpdate";
import CustomHookChat from "./examples/customHooks/ChatRecipientPicker";
import UseReducerCounter from "./examples/useReducer/CounterWithReducer";
import UseRefInput from "./examples/useRef/TextInputWithFocusButton";
import UsePreviousExample from "./examples/useRef/UsePrevious";
import UseContext from "./examples/useContext/Provider";

function App() {
  return (
    <div className="App">
      <div>
        <p>Reducer Example</p>
        <UseReducerCounter initialCount={0} />
      </div>
      <div>
        <p>Effect Example</p>
        <UseEffectCounter />
      </div>
      <div>
        <p>Custom Example</p>
        <CustomHookChat />
      </div>
      <div>
        <p>Ref Example</p>
        <UseRefInput />
      </div>
      <div>
        <p>Ref/Previous Example</p>
        <UsePreviousExample />
      </div>
      <div>
        <p>Context Example</p>
        <UseContext />
      </div>
    </div>
  );
  // return <UseReducerCounter initialCount={0} />;
  // return <UseEffectCounter />;
  // return <CustomHookChat />;
  // return <UseRefInput />;
  // return <UsePreviousExample />;
  // return <UseContext />;
  // return null;
}

export default App;
