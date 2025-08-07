import { render } from '@testing-library/react';
import { TeamProvider } from '../app/contexts/TeamContext';
import type { ReactElement } from 'react';

export function renderWithProviders(ui: ReactElement) {
	return render(wrapper({ children: ui }));
}

export const wrapper = ({ children }: { children: React.ReactNode }) => (
	<TeamProvider>{children}</TeamProvider>
);