import './Portfolio.css';

function Portfolio() {
	return (
		<div className="portfolio">
			<Header />
			<h1>My Portfolio</h1>
			<Main />
			<Skils />
			<Work />
			<Remote />
			<Contact />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<section className="header">
			<div className="container">
				<nav>
					<ul style={{ display: 'flex', justifyContent: 'flex-end', listStyleType: 'none' }}>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Home</a></li>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Projects</a></li>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Contacts</a></li>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>About</a></li>
					</ul>
				</nav>
			</div>
		</section>
	)
}
function Main() {
	return (
		<section className="skils" style={{ height: '300px', backgroundColor: '#c3cdf7' }}>
			<div className="container">
				<h2>Hi! I'm Konstantin</h2>
			</div>
		</section>
	)
}
function Skils() {
	return (
		<section className="skils" style={{ height: '300px', backgroundColor: '#eeffee' }}>
			<div className="container">
				<h2>Skils</h2>
			</div>
		</section>
	)
}
function Work() {
	return (
		<section className="work" style={{ height: '300px', backgroundColor: '#c3cdf7' }}>
			<div className="container">
				<h2>My Work</h2>
			</div>
		</section>
	)
}
function Remote() {
	return (
		<section className="remote" style={{ height: '150px', backgroundColor: '#eeffee' }}>
			<div className="container">
				<h2>Remote Work</h2>

			</div>
		</section>
	)
}
function Contact() {
	return (
		<section className="contact" style={{ height: '300px', backgroundColor: '#c3cdf7' }}>
			<div className="container">
				<h2>Contact</h2>
				<form>
					<input></input>
					<input></input>
					<button onClick={() => { alert('Yes!') }}>Enter</button>
				</form>
			</div>
		</section>
	)
}
function Footer() {
	return (
		<section className="footer" style={{ height: '150px', backgroundColor: '#eeffee' }}>
			<div className="container">
				<h2>Icons</h2>
				<nav>
					<ul style={{ display: 'flex', justifyContent: 'flex-end', listStyleType: 'none' }}>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Home</a></li>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Projects</a></li>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Contacts</a></li>
						<li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>About</a></li>
					</ul>
				</nav>
				<p>&#169; Все права защищены</p>
			</div>
		</section>
	)
}

export default Portfolio;
