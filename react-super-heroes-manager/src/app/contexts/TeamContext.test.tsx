import { renderHook, act } from '@testing-library/react';
import { useTeam, type TeamContextType } from '../contexts/TeamContext';
import { wrapper } from '../../__tests__';

const alertMock = jest.fn();
window.alert = (message: string) => alertMock(message);

describe('Team context', () => {
	let result: { current: TeamContextType };

	beforeEach(() => {
		jest.clearAllMocks();
		const { result: ctx } = renderHook(() => useTeam(), { wrapper });
		result = ctx;
	});

	test('should add a hero to the team', () => {
		act(() => {
			result.current.addToTeam(1);
		});

		expect(result.current.team).toHaveLength(1);
		expect(result.current.team[0].id).toBe(1);
	});

	test('should not be able to add twice the same hero to a team', () => {
		act(() => {
			result.current.addToTeam(1);
			result.current.addToTeam(4);
			result.current.addToTeam(1);
		});

		const expected = [
			{
				'id': 1,
				'name': 'Clark Kent',
				'alias': 'Superman',
				'powers': [
					'Super force',
					'vol',
					'vision laser'
				],
				'imageUrl': 'https://cdn.mos.cms.futurecdn.net/WUMhjxG6fCrQatdoBsPL9S.jpg'
			},
			{
				'id': 4,
				'name': 'Peter Parker',
				'alias': 'Spider-Man',
				'powers': [
					'Agilité',
					'sens arachnéen',
					'force surhumaine'
				],
				'imageUrl': 'https://www.writeups.org/wp-content/uploads/Spider-Man-Marvel-Comics-Peter-Parker-Profile.jpg'
			},
		];
		expect(result.current.team).toHaveLength(2);
		expect(result.current.team).toEqual(expected);
		expect(alertMock).toHaveBeenCalledTimes(1);
		expect(alertMock).toHaveBeenCalledWith('Clark Kent is already in the team.');
	});

	test('should limit the team to 5 members', () => {
		act(() => {
			result.current.addToTeam(1);
			result.current.addToTeam(2);
			result.current.addToTeam(3);
			result.current.addToTeam(4);
			result.current.addToTeam(5);
			result.current.addToTeam(6);
		});
		expect(alertMock).toHaveBeenCalledTimes(1);
		expect(alertMock).toHaveBeenCalledWith('The team is limited to 5 members.');
		expect(result.current.isTeamFull).toBe(true);
	});

	test('should remove a member from the team', () => {
		act(() => {
			result.current.addToTeam(1);
			result.current.addToTeam(2);
			result.current.addToTeam(3);
		});
		
		act(() => {
			result.current.removeFromTeam(2);
		});
		
		const expected = [
			{
				'id': 1,
				'name': 'Clark Kent',
				'alias': 'Superman',
				'powers': [
					'Super force',
					'vol',
					'vision laser'
				],
				'imageUrl': 'https://cdn.mos.cms.futurecdn.net/WUMhjxG6fCrQatdoBsPL9S.jpg'
			},
			{
				'id': 3,
				'name': 'Diana Prince',
				'alias': 'Wonder Woman',
				'powers': [
					'Force',
					'agilité',
					'combat à mains nues'
				],
				'imageUrl': 'https://images.comicbooktreasury.com/wp-content/uploads/2021/12/Wonder-Woman-Reading-Order-705x470.jpg'
			},
		];

		expect(result.current.team).toHaveLength(2);
		expect(result.current.team).toEqual(expected);
	});

	describe('should return if a member is in the team or not', () => {
		const ID_OF_HERO_IN_TEAM = 1;
		
		beforeEach(() => {
			act(() => {
				result.current.addToTeam(ID_OF_HERO_IN_TEAM);
			});
		});

		test.each([
			{ condition: 'the hero belongs to the team', heroId: ID_OF_HERO_IN_TEAM, expected: true },
			{ condition: 'the hero doaesnt belong to the team', heroId: 2, expected: false },
		])('when $condition', ({ heroId, expected }) => {
			expect(result.current.isHeroInTeam(heroId)).toBe(expected);
		});
	});
});
