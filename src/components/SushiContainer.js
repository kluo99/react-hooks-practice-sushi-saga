import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( {sushis, setSushis, plates, setPlates, budget, setBudget} ) {

  const [firstSushi, setFirstSushi] = useState(0);

  const [fourthSushi, setFourthSushi] = useState(4);


  //More sushi button function
  const fourFilter = sushis.slice(firstSushi,fourthSushi);

  function fourMore() {
    setFirstSushi(firstSushi + 4);
    setFourthSushi(fourthSushi + 4);
  }

  //deleting
  // const [isEaten, setIsEaten] = useState(false)

  // function toggleEaten() {
  //   setIsEaten(!isEaten)
  //   }

    


  
  
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {fourFilter.map((sushi) => (
        <Sushi setPlates={setPlates} plates={plates}key={sushi.id} sushi={sushi} budget={budget} setBudget={setBudget}/>
      ))}
      <MoreButton fourMore={fourMore} />
    </div>
  );
}

export default SushiContainer;
