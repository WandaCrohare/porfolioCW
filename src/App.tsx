import './App.css'
import { TopHeader } from './components/TopHeader/TopHeader';
import { Hero } from './components/Hero/Hero';
import { Proyectos } from './components/Proyectos/Proyectos';
// import { About } from './components/About/About';
import { Contacto } from './components/Contacto/Contacto';
import { Works } from './components/Works/Works';
import { Teams } from './components/Teams/Teams';
// import { Tooling } from './components/Tooling/Tooling';
import { Footer } from './components/Footer/Footer';
import { Links } from './components/Links/Links';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<TopHeader />
			<Routes>
				<Route path="/" element={
					<main>
						<Hero />
						<section id="about">
							<Teams />
						</section>
						<section  id="services">
							<Proyectos />
						</section>
						{/* <About /> */}
						<section id="works">
							<Works />
						</section>
						<Contacto />
					</main>
				} />
				<Route path="/links" element={<Links />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App
