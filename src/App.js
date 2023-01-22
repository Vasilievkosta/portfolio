import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
		<Header />
      <h1>My Portfolio</h1>
	  <Skils />
	  <Work />
    </div>
  );
}

function Header() {
	return (
		<section className="header">
		<div className="container">
			<nav>
				<ul style={{display:'flex', justifyContent: 'flex-end', listStyleType:'none'}}>
					<li style={{marginRight:'15px'}}><a href='#' style={{cursor:'pointer'}}>Home</a></li>
					<li style={{marginRight:'15px'}}><a href='#' style={{cursor:'pointer'}}>Projects</a></li>
					<li style={{marginRight:'15px'}}><a href='#' style={{cursor:'pointer'}}>Contacts</a></li>
					<li style={{marginRight:'15px'}}><a href='#' style={{cursor:'pointer'}}>About</a></li>					
				</ul>
			</nav>
		</div>
		</section>
	)
}
function Skils() {
	return (
		<section className="skils" style={{height: '300px', backgroundColor: '#eeffee'}}>
		<div className="container">
			<h2>Skils</h2>
		</div>
		</section>
	)
}
function Work() {
	return (
		<section className="work" style={{height: '300px', backgroundColor: '#c3cdf7'}}>
		<div className="container">
			<h2>My Work</h2>
		</div>
		</section>
	)
}

export default App;
