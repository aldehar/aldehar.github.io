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
			'addList' : [
				'<b>응용1</b> -리밋스위치 LS1 => 용량형 센서, 리밋스위치 LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더B 편솔 => 양솔',
				'<b>응용3</b> - 실린더 C의 후진 속도를 조절하기 위하여 급속배기밸브 사용',
				'<b>응용4</b> - 연속동작을 수행하는 동안 램프1이 점등되고 동작 완료 후 소등되도록 변경'
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
			'addList' : [
				'<b>응용1</b> - LS3, LS4 => 유도형 센서',
				'<b>응용2</b> - 실린더 A 전진이 완료되면 3초 후에 실린더 B가 동작하도록 타이머 사용',
				'<b>응용3</b> - 실린더 A 양솔 => 실린더 A 편솔',
				'<b>응용4</b> - 실린더 C 전진속도조절 미터아웃으로 구성'
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
			'addList' : [
				'<b>응용1</b> - 실린더 B 편솔 => 양솔',
				'<b>응용2</b> - 별도의 전기 리밋스위치+ 램프를 1개씩 추가로 사용하여 리밋스위치가 ON되면 추가된 램프가 ON되고 <br>&nbsp;&nbsp;&nbsp;&nbsp;이때 PBS2를 눌러도 시스템이 운전되지 않고, 전기 리밋스위치가 OFF되면 램프가 OFF되고 PBS2를 누르면 시스템이 운전되도록 회로를 변경',
				'<b>응용3</b> -  실린더 B, C의 후진 속도 조절 미터아웃 방식으로 회로를 구성',
				'<b>응용4</b> - 감압밸브 사용하여 실린더 B 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A 양솔 => 편솔',
				'<b>응용2</b> - LS3, LS4 => 유도형 센서',
				'<b>응용3</b> - 실린더 B, C 전진 속도 조절 미터아웃으로 구성',
				'<b>응용4</b> -  서비스 유닛의 설정압력을 0.3±0.05 MPa로 조정'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더 A 전진이 완료되면 3초 후에 실린더B가 동작하도록 전기타이머를 사용하도록 변경',
				'<b>응용3</b> -  실린더 C 후진 속도 조절하기 위하여 급속배기밸브를 사용하여 회로를 구성',
				'<b>응용4</b> -  감압밸브를 사용하여 실린더 B 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - 실린더A 양솔 => 편솔',
				'<b>응용2</b> -  별도의 유지형 스위치와 램프를 1개씩 추가로 사용하여 유지형 스위치가 ON되면 램프가 ON되고 <br>&nbsp;&nbsp;&nbsp;&nbsp;이때 PBS2를 눌러도 시스템이 운전되지 않고, 유지형 스위치가 OFF되면 램프가 OFF되고 PBS2를 누르면 시스템이 운전되도록 회로를 변경',
				'<b>응용3</b> - 실린더 B, C의 후진 속도조절 미터아웃으로 구성',
				'<b>응용4</b> - 서비스 유닛의 설정압력을 0.3±0.05 MPa로 조정'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더B 양솔 => 실B 편솔',
				'<b>응용3</b> - 실린더 A 전진 속도 조절 미터아웃으로 구성',
				'<b>응용4</b> - 감압밸브 사용하여 실린더 C 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로 변경'
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
			'addList' : [
				'<b>응용1</b> - LS3, LS4 => 유도형 센서',
				'<b>응용2</b> - 실린더 A 전진이 완료하고 3초 후에 실린더 B가 동작하도록 전기타이머 사용',
				'<b>응용3</b> - 실린더 B, C의 후진 속도를 조절 미터아웃으로 구성',
				'<b>응용4</b> - 서비스 유닛의 설정압력을 0.3±0.05 MPa로 조정'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더B 양솔 => 편솔',
				'<b>응용3</b> -  실린더 C의 후진 속도를 조절하기 위하여 급속배기밸브를 사용하여 회로를 구성',
				'<b>응용4</b> - 감압밸브를 사용하여 실린더 B 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - 실린더 C의 전진이 완료되면 3초 후에 다음 동작이 동작하도록 전기타이머 사용',
				'<b>응용2</b> - 실린더 A 양솔 => 편솔',
				'<b>응용3</b> - 실린더 B, C의 전진 속도를 조절 미터아웃으로 구성',
				'<b>응용4</b> - 서비스 유닛의 설정압력을 0.3±0.05 MPa로 조정'
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
			'addList' : [
				'<b>응용1</b> - LS3, LS4 => 유도형 센서',
				'<b>응용2</b> - 실린더 A 양솔 => 편솔',
				'<b>응용3</b> - 별도의 유지형 스위치와 램프를 1개씩 추가로 사용하여 유지형 스위치가 ON되면 램프가 ON되고<br>&nbsp;&nbsp;&nbsp;&nbsp; 이때 PBS2를 눌러도 시스템이 운전되지 않고, 유지형 스위치가 OFF되면 램프가 OFF되고 PBS2를 누르면 시스템이 운전되도록 회로를 변경',
				'<b>응용4</b> -  실린더 B, C의 후진 속도 조절 미터아웃으로 구성'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더 A의 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머를 사용',
				'<b>응용3</b> - 실린더 B의 전진 속도 조절 미터아웃으로 구성',
				'<b>응용4</b> - 감압밸브를 사용하여 실린더 C 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 유도형 센서',
				'<b>응용2</b> - 실린더 B 편솔 => 양솔',
				'<b>응용3</b> -  실린더 B, C의 후진 속도 조절 => 미터아웃으로 구성',
				'<b>응용4</b> - 서비스 유닛의 설정압력을 0.3±0.05 MPa로 조정'
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
			'addList' : [
				'<b>응용1</b> - LS3, LS4 => 유도형 센서',
				'<b>응용2</b> - 실린더 A 양솔 => 편솔',
				'<b>응용3</b> -  실린더 B, C의 전진 속도 조절 미터아웃으로 구성',
				'<b>응용4</b> -  감압밸브를 사용하여 실린더 B 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더 A의 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머 사용',
				'<b>응용3</b> -  별도의 전기 리밋스위치와 램프를 1개씩 추가로 사용하여 전기 리밋스위치가 ON되면 추가된 램프가 ON되고<br>&nbsp;&nbsp;&nbsp;&nbsp; 이때 PBS2를 눌러도 시스템이 운전되지 않고, 전기 리밋스위치가 OFF되면 램프가 OFF되고 PBS2를 누르면 시스템이 운전되도록 회로를 변경',
				'<b>응용4</b> - 실린더 B, C의 후진 속도 조절 미터아웃으로 구성'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2, => 유도형 센서',
				'<b>응용2</b> - 실린더 B 편솔 => 양솔',
				'<b>응용3</b> - 실린더 C의 후진 속도를 조절하기 위하여 급속배기밸브를 사용하여 회로를 구성',
				'<b>응용4</b> - 서비스 유닛의 설정압력을 0.3±0.05 MPa로 조정'
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
				'<b>응용1</b> -  별도의 유지형 스위치와 램프를 1개씩 추가로 사용하여 유지형 스위치가 ON되면 램프가 ON되고<br>&nbsp;&nbsp;&nbsp;이때 PBS2를 눌러도 시스템이 운전되지 않고, 유지형 스위치가 OFF되면 램프가 OFF되고 PBS2를 누르면 시스템이 운전되도록 회로를 변경',
				'<b>응용2</b> - 실린더A 양솔 => 편솔',
				'<b>응용3</b> -  실린더 B, C의 후진 속도 조절 미터아웃으로 구성',
				'<b>응용4</b> - 감압밸브를 사용하여 실린더 C 전진 시 작동압력이 0.3±0.05 MPa로 제어되도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - LS1, LS2 => 용량형 센서',
				'<b>응용2</b> - 실린더 B 편솔 => 양솔',
				'<b>응용3</b> - 별도의 유지형 스위치와 램프를 1개씩 추가로 사용하여 유지형 스위치가 ON되면 램프가 ON되고<br>&nbsp;&nbsp;&nbsp;&nbsp;이때 PBS2를 눌러도 시스템이 운전되지 않고, 유지형 스위치가 OFF되면 램프가 OFF되고 PBS2를 누르면 시스템이 운전되도록 회로를 변경',
				'<b>응용4</b> -  실린더 A의 전진 속도 조절 미터아웃으로 구성'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A의 전진이 완료되면 타이머를 사용하여 3초 후에 실린더 B가 동작하도록 전기회로도를 변경',
				'<b>응용2</b> - 실린더 A의 전진 속도가 제어되도록 블리드오프 회로를 구성',
				'<b>응용3</b> - 부하에 변동없이 실린더 B의 전진 속도가 조절되도록 전진라인에 압력보상형 유량조절밸브를 설치',
				'<b>응용4</b> -  유압유의 역류를 방지하기 위해 파워유닛의 토출구에 체크밸브를 추가'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A의 후진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머를 사용하여 전기회로도를 변경하고 시스템을 구성',
				'<b>응용2</b> -  2/2 way 솔레노이드 밸브 작동 중 램프1이 점등되도록 하고, 작동 완료 후 소등되도록 전기회로도를 변경하고 시스템을 구성',
				'<b>응용3</b> -  실린더 A의 전·후진 속도가 제어되도록 공급라인에 양방향 유량조절밸브를 사용하여 회로를 구성',
				'<b>응용4</b> - 실린더 A의 전진 운동 시 자중낙하방지회로를 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 릴리프밸브, 체크밸브, 압력게이지를 사용하여 카운터밸런스 회로를 구성하고 압력을 2 MPa로 설정하시오.)'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A, B 전진 속도 조절 미터인으로 구성',
				'<b>응용2</b> - 실린더 B의 전진 시 감압밸브와 압력게이지를 추가로 설치하여 유압 회로도를 변경하고, 감압밸브의 압력이 2 MPa이 되도록 조정',
				'<b>응용3</b> -  실린더 A의 전진 리밋스위치 LS2를 제거하고 압력스위치를 설치하여<br>&nbsp;&nbsp;&nbsp;&nbsp; 전진 완료 후 압력스위치의 설정압력(3 MPa)에 도달했을 때 실린더 B가 작동하도록 회로를 변경',
				'<b>응용4</b> - 연속동작을 수행하는 동안 램프1이 점등되고 동작 완료 후 소등되도록 변경'
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
			'addList' : [
				'<b>응용1</b> - 전기타이머를 사용하여 실린더 A의 전진이 완료되면 3초 후에 다음 동작이 동작하도록 전기회로도를 변경',
				'<b>응용2</b> -  실린더 A, B 후진 속도 조절 미터인으로 구성',
				'<b>응용3</b> - 실린더 A의 로드측에 파일럿 조작 체크 밸브를 이용하여 로킹회로가 되도록 변경',
				'<b>응용4</b> -  유지형 스위치를 누르면 램프1이 점등되고, 램프1이 점등된 상태에서 PBS1을 누르면 기본동작을, <br>&nbsp;&nbsp;&nbsp;&nbsp;PBS2를 누르면 연속동작을 동작하도록 전기회로도를 변경하고 시스템을 구성하시오.<br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 유지형 스위치를 누르지 않은 상태에서는 램프1이 점등되지 않고 기본/연속동작이 동작되지 않도록 하시오.)'
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
			'addList' : [
				'<b>응용1</b> - 전기타이머를 사용하여 실린더 A의 후진이 완료되면 3초 후에 실린더 B가 동작하도록 변경',
				'<b>응용2</b> - 부하에 변동없이 실린더 A의 전진 속도 조절되도록 전진라인에 압력보상형 유량조절밸브를 설치',
				'<b>응용3</b> - 유지형 스위치를 누르면 램프1이 점등되고, 램프1이 점등된 상태에서 PBS1을 누르면 기본동작을, <br>&nbsp;&nbsp;&nbsp;&nbsp;PBS2를 누르면 연속동작을 동작하도록 전기회로도를 변경하고 시스템을 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 유지형 스위치를 누르지 않은 상태에서는 램프1이 점등되지 않고 기본/연속동작이 동작되지 않도록 하시오.)',
				'<b>응용4</b> - 실린더 B의 전진 운동 시 자중낙하방지회로를 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 릴리프밸브, 체크밸브, 압력게이지를 사용하여 카운터밸런스 회로를 구성하고 압력을 2 MPa로 설정하시오.)'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A의 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머 사용',
				'<b>응용2</b> - 실린더 A의 전·후진 속도가 제어되도록 공급라인에 양방향 유량조절밸브를 사용하여 회로를 구성',
				'<b>응용3</b> - 실린더 A의 전진 LS2 제거 =>  압력스위치를 설치하여 전진 완료 후 압력스위치의 설정압력(3 MPa)에 도달했을 때 다음 동작이 작동하도록 회로를 변경',
				'<b>응용4</b> -  유지형 스위치를 누르면 램프1이 점등되고, 램프1이 점등된 상태에서 PBS1을 누르면 기본동작을, <br>&nbsp;&nbsp;&nbsp;&nbsp;PBS2를 누르면 연속동작을 동작하도록 전기회로도를 변경하고 시스템을 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 유지형 스위치를 누르지 않은 상태에서는 램프1이 점등되지 않고 기본/연속동작이 동작되지 않도록 하시오.)'
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
			'addList' : [
				'<b>응용1</b> - 유지형 스위치를 누르면 램프1이 점등되고, 램프1이 점등된 상태에서 PBS1을 누르면 기본동작을, <br>&nbsp;&nbsp;&nbsp;&nbsp;PBS2를 누르면 연속동작을 동작하도록 전기회로도를 변경하고 시스템을 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 유지형 스위치를 누르지 않은 상태에서는 램프1이 점등되지 않고 기본/연속동작이 동작되지 않도록 하시오.)',
				'<b>응용2</b> - 실린더 B의 전진 시 감압밸브와 압력게이지를 추가로 설치하여 유압 회로도를 변경하고, 감압밸브의 압력이 2 MPa이 되도록 조정',
				'<b>응용3</b> -  실린더 A의 로드측에 파일럿 조작 체크 밸브를 이용하여 로킹회로가 되도록 변경',
				'<b>응용4</b> - 유압유의 역류를 방지하기 위해 파워유닛의 토출구에 체크밸브를 추가하여 구성'
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
			'addList' : [
				'<b>응용1</b> - 전기타이머를 사용하여 실린더 A의 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기회로도를 변경',
				'<b>응용2</b> - 연속동작을 수행하는 동안 램프1이 점등되고 동작 완료 후 소등되도록 변경',
				'<b>응용3</b> - 실린더 A, B의 전진 속도 조절 미터인으로 구성',
				'<b>응용4</b> - LS2를 제거하고 압력스위치를 설치하여 실린더A 전진 완료 후 압력스위치의 설정압력(3 MPa)에 도달했을 때 실린더 B가 작동하도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머 사용',
				'<b>응용2</b> - 실린더 A, B 전진 속도 조절 미터인으로 구성',
				'<b>응용3</b> - 실린더 B의 전진 운동 시 자중낙하방지회로를 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 릴리프밸브, 체크밸브, 압력게이지를 사용하여 카운터밸런스 회로를 구성하고 압력을 2 MPa로 설정하시오.)',
				'<b>응용4</b> - 유압유의 역류를 방지하기 위해 파워유닛의 토출구에 체크밸브를 추가'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A 후진 속도 조절 미터인으로 수정',
				'<b>응용2</b> - 유지형 스위치를 누르면 램프1이 점등되고, 램프1이 점등된 상태에서 PBS1을 누르면 기본동작을, <br>&nbsp;&nbsp;&nbsp;&nbsp;PBS2를 누르면 연속동작을 동작하도록 전기회로도를 변경하고 시스템을 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 유지형 스위치를 누르지 않은 상태에서는 램프1이 점등되지 않고 기본/연속동작이 동작되지 않도록 하시오.)',
				'<b>응용3</b> - 실린더 B의 로드측에 파일럿 조작 체크 밸브를 이용하여 로킹회로가 되도록 변경',
				'<b>응용4</b> - 유압유의 역류를 방지하기 위해 파워유닛의 토출구에 체크밸브 추가'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A의 전진 속도를 조절하기 위하여 블리드오프 회로 구성',
				'<b>응용2</b> - 실린더 A의 전진이 완료되면 3초 후에 실린더 A가 후진하도록 전기타이머 사용',
				'<b>응용3</b> - 실린더 B의 전진 속도 조절 미터인으로 구성',
				'<b>응용4</b> - LS4 제거하고 압력스위치를 설치하여 실린더 B 전진 완료 후 압력스위치의 설정압력(3 MPa)에 도달했을 때 다음 동작이 작동하도록 회로를 변경'
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
			'addList' : [
				'<b>응용1</b> - 유지형 스위치를 누르면 램프1이 점등되고, 램프1이 점등된 상태에서 PBS1을 누르면 기본동작을, <br>&nbsp;&nbsp;&nbsp;&nbsp;PBS2를 누르면 연속동작을 동작하도록 전기회로도를 변경하고 시스템을 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 유지형 스위치를 누르지 않은 상태에서는 램프1이 점등되지 않고 기본/연속동작이 동작되지 않도록 하시오.)',
				'<b>응용2</b> - 실린더 A의 전·후진 속도가 제어되도록 공급라인에 양방향 유량조절밸브를 사용하여 회로를 구성',
				'<b>응용3</b> - 실린더 B의 전진 운동 시 자중낙하방지회로를 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 릴리프밸브, 체크밸브, 압력게이지를 사용하여 카운터밸런스 회로를 구성하고 압력을 2 MPa로 설정하시오.)',
				'<b>응용4</b> - 유압유의 역류를 방지하기 위해 파워유닛의 토출구에 체크밸브 추가'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A의 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머 사용',
				'<b>응용2</b> - 실린더 A, B의 전진 속도 조절 미터인으로 구성',
				'<b>응용3</b> - 실린더 B의 전진 시 감압밸브와 압력게이지를 추가로 설치하여 유압 회로도를 변경하고, 감압밸브의 압력이 2 MPa이 되도록 조정',
				'<b>응용4</b> - 실린더 A의 로드측에 파일럿 조작 체크 밸브를 이용하여 로킹회로가 되도록 변경'
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
			'addList' : [
				'<b>응용1</b> - 실린더 B의 후진이 완료되면 3초 후에 다음 동작이 동작하도록 전기타이머 사용',
				'<b>응용2</b> - 실린더 A, B의 전진 속도를 조절 미터인으로 구성',
				'<b>응용3</b> -  LS2를 제거하고 압력스위치를 설치하여 실린더 A전진 완료후, 압력스위치의 설정압력(3 MPa)에 도달했을 때 실린더 B가 작동하도록 회로 변경',
				'<b>응용4</b> - 유압유의 역류 방지하기 위해 파워유닛의 토출구에 체크밸브 추가'
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
			'addList' : [
				'<b>응용1</b> - 연속동작을 수행하는 동안 램프1이 점등되고 동작 완료 후 소등되도록 변경',
				'<b>응용2</b> - 실린더 A의 전진 속도가 제어되도록 블리드오프 회로 구성',
				'<b>응용3</b> - LS4를 제거하고 압력스위치를 설치하여 실린더 B 전진 완료 후 압력스위치의 설정압력(3 MPa)에 도달했을 때 다음 동작이 작동하도록 회로 변경',
				'<b>응용4</b> - 실린더 B의 전진 운동 시 자중낙하방지회로를 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 릴리프밸브, 체크밸브, 압력게이지를 사용하여 카운터밸런스 회로를 구성하고 압력을 2 MPa로 설정하시오.)'
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
			'addList' : [
				'<b>응용1</b> - 실린더 A의 전진이 완료되면 3초 후에 실린더 B가 동작하도록 전기타이머 사용',
				'<b>응용2</b> - 실린더 A의 전진 속도를 조절 미터인으로 구성',
				'<b>응용3</b> - LS2를 제거하고 압력스위치를 설치하여 실린더 A 전진 완료 후 압력스위치의 설정압력(3 MPa)에 도달했을 때 실린더 B가 작동하도록 회로 변경',
				'<b>응용4</b> - 실린더 B의 전진 속도가 제어되도록 블리드오프 회로 구성'
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
			'addList' : [
				'<b>응용1</b> - 연속동작을 수행하는 동안 램프1이 점등되고 동작 완료 후 소등되도록 전기회로도를 변경',
				'<b>응용2</b> - 실린더 A의 전·후진 속도가 제어되도록 공급라인에 양방향 유량조절밸브를 사용하여 회로를 구성',
				'<b>응용3</b> - 실린더 B의 로드측에 파일럿 조작 체크 밸브를 이용하여 로킹회로가 되도록 변경',
				'<b>응용4</b> - 유압유의 역류를 방지하기 위해 파워유닛의 토출구에 체크밸브를 추가'
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
			'addList' : [
				'<b>응용1</b> - 연속동작을 수행하는 동안 램프1이 점등되고 동작 완료 후 소등되도록 전기회로도를 변경',
				'<b>응용2</b> - 실린더 A의 전진이 완료되면 3초 후에 다음 동작이 동작하도록 전기타이머를 사용',
				'<b>응용3</b> - 실린더 A의 전진 시 감압밸브와 압력게이지를 추가로 설치하여 유압 회로도를 변경하고, 감압밸브의 압력이 3 MPa이 되도록 조정',
				'<b>응용4</b> - 실린더 B의 전진 운동 시 자중낙하방지회로를 구성하시오. <br>&nbsp;&nbsp;&nbsp;&nbsp;(단, 릴리프밸브, 체크밸브, 압력게이지를 사용하여 카운터밸런스 회로를 구성하고 압력을 2 MPa로 설정하시오.)'
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