import React, { useState } from 'react';
import './MeaningFinder.css';

const MeaningFinder = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [count, setCount] = useState(null);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const fetchMeaning = async () => {
        try {
            const response = await fetch(`https://api.agify.io/?name=${name}`);
            const data = await response.json();
            setAge(data.age);
            setCount(data.count);
        } catch (error) {
            console.error('Error fetching the data:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Meaning Finder</h1>
            <input
                type="text"
                placeholder="Enter a name"
                value={name}
                onChange={handleInputChange}
                className="input-box"
            />
            <button onClick={fetchMeaning} className="submit-button">
                Find Meaning
            </button>
            {age !== null && count !== null && (
                <div className="result">
                    <p>Predicted Age: <strong>{age}</strong></p>
                    <p>Number of People with this Name: <strong>{count}</strong></p>
                </div>
            )}
        </div>
    );
};

export default MeaningFinder;
