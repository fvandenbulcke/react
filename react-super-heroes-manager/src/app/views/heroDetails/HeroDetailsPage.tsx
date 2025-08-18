import type { Hero } from '../../data/heroes';
import { useTeam } from '../../contexts/TeamContext';
import styles from './HeroDetailsPage.module.css';
import { TheButton } from '../../component/button/TheButton';
import { HeroDetails } from './HeroDetails';

type Props = {
  hero?: Hero
}

export const HeroDetailsPage = ({ hero }: Props) => {
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
			<HeroDetails
				hero={hero}
			/>
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
