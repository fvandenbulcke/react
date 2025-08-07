import { render, screen } from '@testing-library/react';
import { Team } from './Team';
import type { Hero } from '../../data/heroes';

const teamMock: Hero[] = [
	{ id: 1, name: 'Bruce Wayne', alias: 'Batman', powers: ['Money'], imageUrl: 'Batman.png' },
	{ id: 2, name: 'Diana Prince', alias: 'Wonder Woman', powers: ['Force'], imageUrl: 'WonderWoman.png' },
];

const removeFromTeamMock = jest.fn();

jest.mock('../../contexts/TeamContext', () => ({
	useTeam: () => ({
		team: teamMock,
		removeFromTeam: (heroId: string) => removeFromTeamMock(heroId),
	})
}));

describe('Team', () => {
	beforeEach(() => {
		render(<Team/>);
	});

	test('should display all team heros', () => {
		const heroCards = screen.getAllByTestId(/^team-hero-/);
		expect(heroCards.length).toEqual(2);
	});
});


