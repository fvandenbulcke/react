import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { heroes, type Hero } from '../data/heroes';

const MAX_TEAM_SIZE = 5;

export type TeamContextType = {
  team: Hero[]
  addToTeam: (heroId: number) => void
  removeFromTeam: (heroId: number) => void
  isTeamFull: boolean,
  isHeroInTeam: (heroId: number) => boolean,
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: React.ReactNode }) => {
	const [team, setTeam] = useState<Hero[]>([]);

	const isTeamFull = useMemo(() => team.length >= MAX_TEAM_SIZE, [team]);

	const teamIds = useMemo(() => new Set(team.map(h => h.id)), [team]);

	const isHeroInTeam = useCallback(
		(heroId: number) => teamIds.has(heroId),
		[teamIds]
	);

	const addToTeam = (heroId: number) => {
		const hero = heroes.find(h => h.id === heroId)!;
		setTeam((prev) => {
			if (prev.find(h => h.id === hero.id)) {
				alert(`${hero.name} is already in the team.`);
				return prev;
			}
			if (prev.length >= 5) {
				alert('The team is limited to 5 members.');
				return prev;
			}
			return [...prev, hero];
		});
	};

	const removeFromTeam = (heroId: number) => {
		setTeam(team.filter(h => h.id !== heroId));
	};

	return (
		<TeamContext.Provider value={{ team, addToTeam, removeFromTeam, isTeamFull, isHeroInTeam }}>
			{children}
		</TeamContext.Provider>
	);
};

export const useTeam = () => {
	const ctx = useContext(TeamContext);
	if (!ctx) {
		throw new Error('useTeam must be used within a TeamProvider');
	}
	return ctx;
};
