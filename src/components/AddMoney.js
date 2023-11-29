import React, { useState } from "react"

function AddMoney({money, setMoney, budget, setBudget}) {

    // const [money, setMoney] = useState('');

    function handleMoney(e) {
        // setMoney(e.target.value)
        console.log('hi');
        console.log(money);
        setMoney(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBudget(parseInt(budget) + parseInt(money));
      };

    return(
    <form onSubmit={handleSubmit}>
        <input onChange={handleMoney} type="text" placeholder="How much do you want to add"/>
        <button type="submit">Add Money!</button>
    </form>
    )
}

export default AddMoney