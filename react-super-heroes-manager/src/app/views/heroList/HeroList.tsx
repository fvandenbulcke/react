import { HeroCard } from './HeroCard';
import type { Hero } from '../../data/heroes';
import styles from './HeroList.module.css';

type Props = {
  heroes: Hero[]
  onSelect: (hero: Hero) => void
}

export const HeroList = ({ heroes, onSelect }: Props) => {
	return (
		<div data-testid="hero-list" className={styles.heroList}>
			<ul>
				{heroes.map(hero => (
					<li data-testid={`hero-${hero.id}`} key={hero.id} onClick={() => onSelect(hero)} style={{ cursor: 'pointer' }}>
						<HeroCard hero={hero} />
					</li>
				))}
			</ul>
		</div>

	);
};
