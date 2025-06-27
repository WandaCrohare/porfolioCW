import './App.css'
import { TopHeader } from './components/TopHeader/TopHeader';
import { Hero } from './components/Hero/Hero';
import { HeroAngel } from './components/HeroAngel/HeroAngel';
import { Proyectos } from './components/Proyectos/Proyectos';
import { About } from './components/About/About';
import { Contacto } from './components/Contacto/Contacto';
import { Tooling } from './components/Tooling/Tooling';
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
						<About />
						<Tooling />
						<Proyectos />
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
