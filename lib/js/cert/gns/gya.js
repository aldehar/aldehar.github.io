/* **********
 * gya.js
 * ********** */

gya = {
	'year' : 2023,
	'air' :  [
		// #1
		{
			'no' : 1,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y4, Y5'}
			],
			'relay' : 7,
			'sol' : 5,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #2
		{
			'no' : 2,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y4, Y5'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #3
		{
			'no' : 3,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y4, Y5'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #4
		{
			'no' : 4,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'n', 'se', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se', 's', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y4, Y5'}
			],
			'relay' : 5,
			'sol' : 2,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #5
		{
			'no' : 5,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'n', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y5, Y6'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #6
		{
			'no' : 6,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'se', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'n', 'n', 'se']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se', 's', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y5, Y6'}
			],
			'relay' : 5,
			'sol' : 2,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #7
		{
			'no' : 7,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'n', 'se', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'n', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y5, Y6'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #8
		{
			'no' : 8,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y5, Y6'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #9
		{
			'no' : 9,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'n', 'se', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'n', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y5'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #10
		{
			'no' : 10,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'n', 'n', 'se']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y5'}
			],
			'relay' : 4,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #11
		{
			'no' : 11,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y5'}
			],
			'relay' : 4,
			'sol' : 2,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #12
		{
			'no' : 12,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y5'}
			],
			'relay' : 8,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #13
		{
			'no' : 13,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'n', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y4'}
			],
			'relay' : 5,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #14
		{
			'no' : 14,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'se', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'n', 'n', 'se']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se', 's', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y4'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #15
		{
			'no' : 15,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y4'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #16
		{
			'no' : 16,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se', 's', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 's', 'ne', 'se']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's', 's', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y2'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y3'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #17
		{
			'no' : 17,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'n', 'n', 'se'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'n', 'se', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se', 's', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS5, LS6', 'valveName' : 'Y4'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #18
		{
			'no' : 18,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se', 's']
				},
				{
					'name' : 'C',
					'type' : 'Cylinder',
					'list' : ['s', 's', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'C', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS5, LS6', 'valveName' : 'Y4, Y5'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
	],
	'oil' : [
		// #1
		{
			'no' : 1,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'}
			],
			'relay' : 3,
			'sol' : 2,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #2
		{
			'no' : 2,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'},
				{'name':'-', 'type':'Cylinder', 'solType' : 'single', 'sw' : '-', 'valveName' : 'Y4', 'special' : '2/2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #3
		{
			'no' : 3,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y2, Y3'}
			],
			'relay' : 2,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #4
		{
			'no' : 4,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y2, Y3'}
			],
			'relay' : 2,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #5
		{
			'no' : 5,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y2, Y3'}
			],
			'relay' : 4,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #6
		{
			'no' : 6,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #7
		{
			'no' : 7,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #8
		{
			'no' : 8,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4', 'special' : '4/3 all-block'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #9
		{
			'no' : 9,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4', 'special' : '4/3 all-block'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #10
		{
			'no' : 10,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y2, Y3', 'special' : '4/3 floating-center'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #11
		{
			'no' : 11,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 all-block'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #12
		{
			'no' : 12,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #13
		{
			'no' : 13,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y2, Y3'}
			],
			'relay' : 5,
			'sol' : 4,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #14
		{
			'no' : 14,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 bypass'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #15
		{
			'no' : 15,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 all-block'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y3, Y4'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #16
		{
			'no' : 16,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2', 'special' : '4/3 all-block'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #17
		{
			'no' : 17,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS1, LS2', 'valveName' : 'Y1'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS3, LS4', 'valveName' : 'Y2, Y3', 'special' : '4/3 floating-center'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
		// #18
		{
			'no' : 18,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se', 's', 's']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 's', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type':'Cylinder', 'solType' : 'double', 'sw' : 'LS1, LS2', 'valveName' : 'Y1, Y2'},
				{'name':'B', 'type':'Cylinder', 'solType' : 'single', 'sw' : 'LS3, LS4', 'valveName' : 'Y3'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [],
			'addList' : [
				'응용1 - ',
				'응용2 - ',
				'응용3 - ',
				'응용4 - '
			]
		},
	]
};

/* ***************
 *
 * 타입 리스트
 *
 * ***************/
function fnGetTypeList() {
	const list = ['ALL', '공압', '유압'];
	return list
}

/* ***************
 *
 * 타입 -> 한글 변환
 *
 * @str - 
 *
 * ***************/
function fnGetType(str)
{
	const o = {
		'air' : '공압',
		'oil' : '유압',
		'Cylinder' : '실린더',
		'Motor' : '모터',
		'Valve' : '밸브',
		'double' : '양솔',
		'single' : '편솔',
		'' : ''
	}
	
	return o[str];
}

/* ***************
 *
 * 타입 -> 영어 번환
 *
 * @str - 
 *
 * ***************/
function fnGetTypeToEng(str)
{
	const o = {
		'공압' : 'air',
		'유압' : 'oil',
		'실린더' : 'Cylinder',
		'모터' : 'Motor',
		'' : ''
	}
	
	return o[str];
}

/* ***************
 *
 * 변위선도 type에 따른 css class
 *
 * @str - 
 *
 * ***************/
function fnGetClassByType(str)
{
	const o = {
		'ne' : 'inner_margin line_ne',
		'se' : 'inner_margin line_se',
		'dl' : 'line_down_left',
		'dr' : 'line_down_right',
		'dlr' : 'line_down_left_right',
		'ul' : 'line_up_left',
		'ur' : 'line_up_right',
		'n' : 'line_up',
		'e' : 'line_right',
		'w' : 'line_left',
		's' : 'line_down',
		'' : ''
	}
	
	return o[str];
}