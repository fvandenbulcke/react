import { screen, waitFor } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './__tests__';

describe('App', () => {
	beforeEach(() => {
		renderWithProviders(<App />);
	});

	test('affiche un message de chargement à l\'ouverture', () => {
		const heading = screen.getByText(/Chargement des super-héros.../i);
		expect(heading).toBeInTheDocument();
	});

	test('should display the known heros', () => {
		waitFor(() => {
			expect(screen.getByTestId('hero-list')).toBeDefined();
		}, { timeout: 2000 });
	});

	test('should display the known heros', () => {
		waitFor(() => {
			expect(screen.getByTestId('hero-list')).toBeDefined();
		}, { timeout: 2000 });
	});

	test('should display a space to display the details of a selected hero', () => {
		waitFor(() => {
			expect(screen.getByTestId('no-selected-hero-message')).toBeDefined();
		}, { timeout: 2000 });
	});

	test('should display a space to display the team', () => {
		waitFor(() => {
			expect(screen.getByTestId('team')).toBeDefined();
		}, { timeout: 2000 });
	});
});
