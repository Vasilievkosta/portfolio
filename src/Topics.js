import React from 'react';
import './App.css';

function Topics() {
    const [planets, setPlanets] = React.useState({});

    React.useEffect(() => {
        fetch('https://swapi.dev/api/planets')
            .then((response) => response.json())
            .then(json => setPlanets(json))
    }, [])
	
	React.useEffect(() => {
        fetch('https://railway-first.up.railway.app/api/users')
            .then((response) => response.json())
            .then(json => console.log(json))
    }, [])

    let arr = planets.results;


    return (
        <div className="topics">

            <table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>diameter</th>
                        <th>climate</th>
                        <th>orbital_period</th>
                    </tr>
                </thead>
                <tbody>
                    {arr && arr.map((el, index) => (
                        <tr key={index}>
                            <td>{el.name}</td>
                            <td>{el.diameter}</td>
                            <td>{el.climate}</td>
                            <td>{el.orbital_period}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Topics;
