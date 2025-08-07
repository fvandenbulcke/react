// src/data/api.ts
import { type Hero, heroes } from './heroes';

export const fetchHeroes = (): Promise<Hero[]> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(heroes);
		}, 1000); // délai simulé de 1 seconde
	});
};
