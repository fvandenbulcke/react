
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroCard } from './HeroCard';
import type { Hero } from '../../data/heroes';

const mockHero: Hero = {
	id: 99,
	name: 'Diana Prince',
	alias: 'Wonder Woman',
	powers: ['Force divine', 'lasso magique'],
	imageUrl: 'https://via.placeholder.com/150?text=Wonder+Woman'
};

describe('HeroCard', () => {
	beforeEach(() => {
		render(<HeroCard hero={mockHero} />);
	});
		
	test('should display hero avatar', () => {
		const avatar = screen.getByTestId('hero-avatar') as HTMLImageElement;
		expect(avatar).toBeDefined();
		expect(avatar.alt).toBe('Wonder Woman');
		expect(avatar.src).toBe('https://via.placeholder.com/150?text=Wonder+Woman');
	});

	test('should display hero alias', () => {
		const alias = screen.getByTestId('hero-alias');
		expect(alias).toHaveTextContent('Wonder Woman');
	});
});
