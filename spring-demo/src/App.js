import React from "react";

import "./App.css";

import Card3D from "./components/Spring/Card3D/Card";
import FlipCard from "./components/Spring/FlipCard/Card";
import DraggableList from "./components/Springs/DraggableList/DraggableList";
import Slider from "./components/Spring/Slider/Slider";
import Trails from "./components/Trails/Trails";
import Simple from "./components/Transitions/Simple/Simple";
import Fade from "./components/Transitions/Fade/Fade";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
function App() {
  return (
    <div className="App">
      <div>
        <p>3D Card</p>
        <Card3D />
      </div>
      <div>
        <p>Flip Card</p>
        <FlipCard />
      </div>
      {/*<div>
        <p>DraggableList</p>
        <DraggableList items={items} />
      </div>
       <div>
        <p>Slider</p>
        <Slider />
      </div>
      <div>
        <p>Trails</p>
        <Trails />
      </div>
      <div>
        <p>Simple</p>
        <Simple />
      </div>
      <div>
        <p>Fade</p>
        <Fade />
      </div> */}
    </div>
  );
}

export default App;
