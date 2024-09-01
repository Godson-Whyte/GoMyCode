API Consumption
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Welcome = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                const data = res.data;
                console.log(data);
                
                const reducedData = data.map(val => (
                    <tr key={val.id}>
                        <td>{val.capital}</td>
                        <td>{val.name.common}</td>
                        <td><img style={{width: 200, height: 100}} src={val.flags.svg} alt="" /></td>
                        <td>{val.population}</td>
                        <td>{val.region}</td>
                    </tr>
                )); // Limit to the first 100 items
                setDetails(reducedData.slice(0, 100));
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>capital</th>
                        <th>name</th>
                        <th>flags</th>
                        <th>population</th>
                        <th>region</th>
                    </tr>
                </thead>
                <tbody>
                    {details}
                </tbody>
            </table>
            <button onClick={getApi}>Fetch Data</button>
        </div>
    );
}

export default Welcome;