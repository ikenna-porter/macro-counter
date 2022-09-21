import React, { useState } from 'react';
import FoodChart from './FoodChart';

function FetchForm() {

    const [input, setInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [fetchResults, setFetchResults] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('form submitted')
        const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
        const fetchConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-app-id": "2daf9b0e",
                "x-app-key": "286a2854e44ac609d9a8caa58d1878ce",
            },
            body: JSON.stringify({"query": input})
        };

        const response = await fetch(url, fetchConfig);
        console.log(response)

        if (response.ok) {
            const query = await response.json()
            setIsSubmitted(true)
            console.log(query)
            setFetchResults(query)
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={handleSubmit}>
                    {/* <div className="input-group"> */}
                        {/* <div className="input-group-prepend">
                            <span className="input-group-text">Ingredients</span>
                        </div> */}
                            <textarea onChange={e => setInput(e.target.value)} className="form-control" aria-label="With textarea" style={{width: "40vw", height: "20vh"}} placeholder="Slice of bread, cream cheese, eggs">
                            </textarea>
                    {/* </div> */}
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
            <div>
                { isSubmitted ? <FoodTable stats={fetchResults}/>: null}
            </div>
        </div>
    )
}

export default FetchForm