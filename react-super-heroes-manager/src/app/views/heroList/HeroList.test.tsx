import { render, screen, fireEvent } from '@testing-library/react';
import { HeroList } from './HeroList';
import type { Hero } from '../../data/heroes';

const heroes: Hero[] = [
	{ id: 1, name: 'Bruce Wayne', alias: 'Batman', powers: ['Money'], imageUrl: 'Batman.png' },
	{ id: 2, name: 'Diana Prince', alias: 'Wonder Woman', powers: ['Force'], imageUrl: 'WonderWoman.png' },
];

const handleSelect = jest.fn();
		
describe('HeroList', () => {
	beforeEach(() => {
		render(<HeroList heroes={heroes} onSelect={handleSelect} />);
	});

	test('should display all heros given as props', () => {
		const heroCards = screen.getAllByRole('listitem');
		expect(heroCards.length).toEqual(2);
	});

	test('should be able to select a hero to display its details', () => {
		const heroCard = screen.getByTestId('hero-1') as HTMLImageElement;
		fireEvent.click(heroCard);
		expect(handleSelect).toHaveBeenCalledWith(heroes[0]);
	});
});


