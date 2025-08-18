
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { HeroDetailsPage } from './HeroDetailsPage';
import type { Hero } from '../../data/heroes';

const mockHero: Hero = {
	id: 99,
	name: 'Diana Prince',
	alias: 'Wonder Woman',
	powers: ['Force divine', 'lasso magique'],
	imageUrl: 'https://via.placeholder.com/150?text=Wonder+Woman'
};

const addToTeamMock = jest.fn();
const removeFromTeamMock = jest.fn();
const isHeroInTeamMock = jest.fn();
let isTeamFullMock = false;

jest.mock('../../contexts/TeamContext', () => ({
	useTeam: () => ({
		addToTeam: (heroId: string) => addToTeamMock(heroId),
		removeFromTeam: (heroId: string) => removeFromTeamMock(heroId),
		isHeroInTeam: (heroId: string) => isHeroInTeamMock(heroId),
		isTeamFull: isTeamFullMock,
	})
}));

describe('HeroDetails', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		isHeroInTeamMock.mockReturnValue(false);
		isTeamFullMock = false;
	});

	describe('when hero is not defined', () => {
		beforeEach(() => {
			render(<HeroDetailsPage hero={undefined} />);
		});

		test('should display dedicated message to the user', () => {
			const message = screen.getByTestId('no-selected-hero-message');
			expect(message).toHaveTextContent('Sélectionne un super-héros pour voir les détails');
		});
	});

	describe('when hero is defined', () => {
		let localRerender: (ui: React.ReactNode) => void;
		beforeEach(() => {
			const { rerender } = render(<HeroDetailsPage hero={mockHero} />);
			localRerender = rerender;
		});
		
		test('should display title', () => {
			const title = screen.getByTestId('hero-details-title');
			expect(title).toHaveTextContent('Détails de Wonder Woman');
		});
		
		test('should display hero avatar', () => {
			const avatar = screen.getByTestId('hero-details-avatar') as HTMLImageElement;
			expect(avatar.alt).toBe('Wonder Woman');
			expect(avatar.src).toBe('https://via.placeholder.com/150?text=Wonder+Woman');
		});
		
		test('should display hero name', () => {
			const name = screen.getByTestId('hero-details-name');
			expect(name).toHaveTextContent('Diana Prince');
		});
		
		test('should display hero powers', () => {
			const powers = screen.getAllByTestId(/^hero-details-power-/);
			expect(powers.length).toEqual(2);
			expect(powers[0]).toHaveTextContent('Force divine');
			expect(powers[1]).toHaveTextContent('lasso magique');
		});

		test('should be able to add the hero in the team if not already added', () => {
			localRerender(<HeroDetailsPage hero={mockHero} />);
			const action = screen.getByTestId('hero-details-action');
			expect(action).toHaveTextContent('Ajouter à l’équipe');
			fireEvent.click(action);
			expect(addToTeamMock).toHaveBeenCalledWith(99);
		});

		test('should be able to remove the hero in the team if already added', () => {
			isHeroInTeamMock.mockReturnValue(true);
			localRerender(<HeroDetailsPage hero={mockHero} />);
			const action = screen.getByTestId('hero-details-action');
			expect(action).toHaveTextContent('Retirer de l’équipe');
			fireEvent.click(action);
			expect(removeFromTeamMock).toHaveBeenCalledWith(99);
		});

		test('should not be able to add the hero in a full team', () => {
			isTeamFullMock = true;
			
			localRerender(<HeroDetailsPage hero={mockHero} />);
			const action = screen.getByTestId('hero-details-action');
			expect(action).toHaveTextContent('Ajouter à l’équipe');
			expect(action).toHaveAttribute('disabled', '');
		});
	});
});
