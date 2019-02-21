import React from "react";

import ThemeContext from "./context";
import Post from "./Consumer";

function App() {
  return (
    <div>
      {/* we are wrapping the Provider component by passing
      the current value "dark" */}
      <ThemeContext.Provider value="dark">
        <Post />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
