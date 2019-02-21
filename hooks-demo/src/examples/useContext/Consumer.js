import React, { useContext } from "react";

import ThemeContext from "./context";

// Now we are consuming the ThemeContext data inside Post component
function Post() {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      {console.log(theme)}
      <h1>My theme color is {theme}</h1>
    </div>
  );
}

export default Post;
