import { useTeam } from '../../contexts/TeamContext';
import { HeroCard } from '../heroList/HeroCard';

export const Team = () => {
	const { team } = useTeam();

	return (
		<div data-testid="team">
			<h2 data-testid="team-page-title">Mon équipe</h2>
			{!team.length ? (
				<p data-testid="team-empty-page-message">L’équipe est vide</p>
			) : (
				team.map(hero => (
					<div key={hero.id} data-testid={`team-hero-${hero.id}`}>
						<HeroCard hero={hero}/>
					</div>
				))
			)}
		</div>
	);
};
