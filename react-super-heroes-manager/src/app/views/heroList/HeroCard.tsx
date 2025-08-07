import type { Hero } from '../../data/heroes';
import styles from './HeroCard.module.css';

type Props = {
  hero: Hero
  onClick?: () => void;
}

export const HeroCard = ({ hero }: Props) => {
	return (
		<div className={styles.heroCard}>
			<div>
				<img data-testid="hero-avatar" className={styles.image} src={hero.imageUrl} alt={hero.alias} width={150} />
			</div>
			<div>
				<h2 data-testid="hero-alias" className={styles.alias}>{hero.alias}</h2>
			</div>
		</div>
	);
};
