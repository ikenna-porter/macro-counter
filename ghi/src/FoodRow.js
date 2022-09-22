import {useEffect, useState} from 'react'

function FoodRow(props) {
    const [food, setFood] = useState({...props.food, initial_serving_weight:''})

    //adds to state the initial serving weight which is later used to calculate macronutrients
    //useEffect prevents initial serving weight from resetting every time component renders
    useEffect(() => {
        setFood({
            ...food,
            initial_serving_weight: food.serving_weight_grams
        })
    }, [food.initial_serving_weight])

    const handleChange = e => {
        const {name, value} = e.target;
        setFood((prevState) => ({...prevState, [name]: value}))
    }

    const handleServingUnitChange = e => {
        setFood((prevState) => ({
            ...prevState, 
            serving_weight_grams: parseInt(e.target.value),
            serving_unit: e.target.selectedOptions[0].label
        }))
    }

    return (
            <tr>
                <td>{food.food_name.charAt(0).toUpperCase() + props.food.food_name.slice(1)}</td> 
                <td>
                    <input type="number" min="1" name="serving_qty" onChange={handleChange} value={food.serving_qty} />
                </td>
                <td>
                    <select onChange={handleServingUnitChange} name="serving_unit" id="serving_unit">
                        <option value="">Choose a serving unit</option>
                        {food.alt_measures.map( measure => {
                            return (
                                <option key={measure.seq} label={measure.measure} value={measure.serving_weight}>
                                    {measure.measure}
                                </option>
                            )
                        })}
                    </select>
                </td>
                <td>
                    {Math.round((food.nf_calories / food.initial_serving_weight) * food.serving_weight_grams * food.serving_qty * 100) / 100}
                </td>
                <td>
                    {Math.round((food.nf_total_carbohydrate / food.initial_serving_weight) * food.serving_weight_grams * food.serving_qty * 100) / 100}
                </td>
                <td>
                    {Math.round((food.nf_protein / food.initial_serving_weight) * food.serving_weight_grams * food.serving_qty * 100) / 100}
                </td>
                <td>
                    {Math.round((food.nf_total_fat / food.initial_serving_weight) * food.serving_weight_grams * food.serving_qty * 100) / 100}
                </td>
            </tr>
    )
}

export default FoodRow


{/* <th>Food Item</th>
<th>Serving Quantity</th>
<th>Serving Unit</th>
<th>Calories</th>
<th>Carbohydrates</th>
<th>Protein</th>
<th>Fat</th> */}