export type Hero = {
  id: number
  name: string
  alias: string
  powers: string[]
  imageUrl: string
}

export const heroes: Hero[] = [
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
		'id': 2,
		'name': 'Bruce Wayne',
		'alias': 'Batman',
		'powers': [
			'Intelligence',
			'gadgets',
			'arts martiaux'
		],
		'imageUrl': 'https://www.wargamer.com/wp-content/sites/wargamer/2023/11/best-batman-comics-550x309.jpg'
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
	{
		'id': 5,
		'name': 'Tony Stark',
		'alias': 'Iron Man',
		'powers': [
			'Intelligence',
			'technologie',
			'armure'
		],
		'imageUrl': 'https://imgcdn.stablediffusionweb.com/2024/10/24/d6a47fb5-4d32-4d64-b20a-dc532b2826e4.jpg'
	},
	{
		'id': 6,
		'name': 'Bruce Banner',
		'alias': 'Hulk',
		'powers': [
			'Force',
			'Rage'
		],
		'imageUrl': 'https://i.pinimg.com/736x/bb/60/cc/bb60ccad658c0f816597824bc95571f9.jpg'
	}
];
