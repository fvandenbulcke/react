import type { Hero } from '../../data/heroes';
import { useTeam } from '../../contexts/TeamContext';
import styles from './HeroDetails.module.css';
import { TheButton } from '../../component/button/TheButton';

type Props = {
  hero?: Hero
}

export const HeroDetails = ({ hero }: Props) => {
	const { addToTeam, removeFromTeam, isHeroInTeam, isTeamFull } = useTeam();
  
	if (!hero) {
		return <p data-testid="no-selected-hero-message">Sélectionne un super-héros pour voir les détails</p>;
	}

	const isAlreadyInTeam = isHeroInTeam(hero.id);
	const action = {
		label: isAlreadyInTeam && 'Retirer de l’équipe' || 'Ajouter à l’équipe',
		onClick: isAlreadyInTeam && (() => removeFromTeam(hero.id)) || (() => addToTeam(hero.id)),
	};

	return (
		<div data-testid="hero-details" className={styles.heroDetails}>
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
			<div className={styles.heroDetailsActions}>
				<TheButton
					data-testid="hero-details-action"
					label={action.label}
					disabled={isTeamFull && !isAlreadyInTeam}
					onClick={action.onClick}
				/>
			</div>
		</div>
	);
};
