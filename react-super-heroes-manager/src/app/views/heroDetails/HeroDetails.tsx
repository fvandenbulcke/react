import React from 'react';
import type { Hero } from '../../data/heroes';
import styles from './HeroDetails.module.css';

type Props = {
  hero: Hero;
};

const HeroDetailsComponent = ({ hero }: Props) => {
	return (
		<div className={styles.heroDetails}>
			<h2 data-testid="hero-details-title" className={styles.heroDetailsTitle}>Détails de {hero.alias}</h2>
			<div className={styles.heroDetailsBody}>
				<div>
					<img data-testid="hero-details-avatar" src={hero.imageUrl} alt={hero.alias} />
				</div>
				<div className={styles.heroDetailsAttributes}>
					<span><strong>Nom :</strong></span>
					<span data-testid="hero-details-name">{hero.name}</span>
					<span><strong>Pouvoirs :</strong></span>
					<ul data-testid="hero-details-powers">
						{
							hero.powers.map((power, index) => (
								<li data-testid={`hero-details-power-${index}`} key={power}>{power}</li>
							))
						}
					</ul>
				</div>
			</div>
		</div>
	);
};

export const HeroDetails = React.memo(HeroDetailsComponent, ({ hero: oldHero }, { hero: newHero }) => oldHero.id === newHero.id);