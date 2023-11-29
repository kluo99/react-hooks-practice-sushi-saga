import React,{useState} from "react";

function Sushi( {sushi, plates, setPlates, budget, setBudget} ) {

  const [isEaten, setIsEaten] = useState(false);

  const table = []

  function toggleEaten() {
    if (budget > sushi.price) {
      setIsEaten(!isEaten);
      setPlates([...plates, 1]);
      setBudget(budget - sushi.price);
    }

    // if (budget < sushi.price) {
    //   setPlates([...plates, 1]);
    //   setBudget(budget >= 0  ? budget - sushi.price);
    // }
    // setPlates([...plates, 1])
    // console.log(plates);
    // setBudget(budget >= 0  ? budget - sushi.price : );
    // setBudget(budget => Math.max(0, budget - sushi.price));
  }    

  return (
    <div className="sushi">
      <div className="plate">
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            // style={{display: 'block'}}
            onClick={toggleEaten}
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}


export default Sushi;
