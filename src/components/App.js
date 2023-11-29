import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoney from "./AddMoney";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);

  // function deleteSushi() {
  //     sushis.filter((sushi) => sushi.img_url != )
  // }

  useEffect(() => {
    fetch (API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSushis(data)
    })
  }, [])

  console.log(sushis);

  //state for adding plates pass down all the way to sushi for onClick function
  const [plates, setPlates] = useState([]);

  //state for budget
  const [budget, setBudget] = useState(100);

  //adding money
  const [money, setMoney] = useState('');

  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates} sushis={sushis} setSushis={setSushis} budget={budget} setBudget={setBudget}/>
      <AddMoney money={money} setMoney={setMoney} budget={budget} setBudget={setBudget}/>
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;
