import { useState } from "react"

function FoodTable (props) {

    console.log(props)
    const [foods, setFoods] = useState([...props.stats.foods]);
    console.log(foods)


    return (
        <div>
            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th>Food</th>
                            <th scope="col">Serving Quantity</th>
                            <th scope="col">Serving Unit</th>
                            <th scope="col">Calories</th>
                            <th scope="col">Protein</th>
                            <th scope="col">Carbohydrates</th>
                            <th scope="col">Fats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>@#</td>
                        <td>Random</td>
                        <td>Random Text</td>
                        <td>Random Text</td>
                        <td>Random Text</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FoodTable