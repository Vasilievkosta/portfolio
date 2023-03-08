import React from 'react';
import './App.css';

function Topics() {
    const [planets, setPlanets] = React.useState({});
	const [pizza, setPizza] = React.useState([]);

    React.useEffect(() => {
        fetch('https://swapi.dev/api/planets')
            .then((response) => response.json())
            .then(json => setPlanets(json))
    }, [])
	
	React.useEffect(() => {
        fetch('https://631b6309fae3df4dcffd7df6.mockapi.io/api/items')
            .then((response) => response.json())
            .then(json => setPizza(json))
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
			<ul style={{display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: '20px 100px'}}>
				{pizza.map((p,i)=> (
					<li key={i} style={{width: '200px', height: '200px'}}>
						<img src={p.imageUrl} alt='pizzaImage'/>
					</li>
				))}
			</ul>
			
			

        </div>
    );
}

export default Topics;
