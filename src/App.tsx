import './App.css'
import { TopHeader } from './components/TopHeader/TopHeader';
import { Hero } from './components/Hero/Hero';
import { Proyectos } from './components/Proyectos/Proyectos';
import { Premios } from './components/Premios/Premios';
import { Contacto } from './components/Contacto/Contacto';
import { Tooling } from './components/Tooling/Tooling';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<>
			<TopHeader />
			<main>
				<Hero />
				<Proyectos />
				<Premios />
				<Tooling />
				<Contacto />
			</main>
			<Footer />
		</>
	);
}

export default App
