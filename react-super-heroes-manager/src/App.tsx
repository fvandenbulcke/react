import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { fetchHeroes } from './app/data/api';

import { heroes as initialHeroes } from './app/data/heroes';
import type { Hero } from './app/data/heroes';
import { HeroList } from './app/views/heroList/HeroList';
import { HeroDetailsPage } from './app/views/heroDetails/HeroDetailsPage';
import { Team } from './app/views/team/Team';

const App = () => {
	const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
	const [loading, setLoading] = useState(true);
	const [selectedHero, setSelectedHero] = useState<Hero | undefined>(undefined);

	useEffect(() => {
		fetchHeroes().then(data => {
			setHeroes(data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <div>Chargement des super-héros...</div>;
	}
	return (
		<main className={styles.mainLayout}>
			<HeroList heroes={heroes} onSelect={setSelectedHero} />
			<HeroDetailsPage hero={selectedHero} />
			<Team />
		</main>
	);
};

export default App;
