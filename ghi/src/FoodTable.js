import { useState } from "react"
import FoodRow from "./FoodRow";

function FoodTable (props) {
    const [foods, setFoods] = useState([...props.stats.foods]);

    return (
        <div>
            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th>Food Item</th>
                        <th>Serving Quantity</th>
                        <th>Serving Unit</th>
                        <th>Calories</th>
                        <th>Carbohydrates</th>
                        <th>Protein</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map( food => {
                        return (
                        // <tr key={foods[food]}>
                            <FoodRow food={food} key={foods[food]}/>
                        // </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FoodTable