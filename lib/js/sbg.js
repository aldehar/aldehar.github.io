/* **********
 * sbj.js
 * ********** */

sbgList = {
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
					'list' : ['ne', 'n', 'se', 's'],
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'n', 'se']
				}
			],
			'sols' : [
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [
				'10열 - kb5 => k3b'
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 연속 동작',
				'응용3 - 실린더A(미터아웃 전진속도 조절), 실린더B(급속배기밸브 전진속도 증가)'
			],
			'design' : '바톤 넘기기, 최종에서 리셋하는게 아니라, 그 전 릴리이에서 리셋하고 마지막 릴레이로 그 전 자기유지 해제'
		},
		// #2
		{
			'no' : 2,
			'type' : 'air',
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
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [
				'2열 - k4b => k2b'
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 실린더A, B(미터아웃 전진속도 조절), 실린더 A 급속배기밸브(후진속도증가)',
				'응용3 - 연속동작, 3회반복, 램프점등'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기'
		},
		// #3
		{
			'no' : 3,
			'type' : 'air',
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
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [
				'7열 - k1a => k2a'
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 연속동작, 5회반복',
				'응용3 - 실린더A(미터아웃 전후진 속도조절), 실린더B(미터아웃 전진)'
			],
			'design' : 'cascade?'
		},
		// #4
		{
			'no' : 4,
			'type' : 'air',
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 5,
			'sol' : 2,
			'fixList' : [
				'9열 - LS1b => LS1a'
			],
			'addList' : [
				'응용1 - 비상정지시에 램프점등',
				'응용2 - 비상정지 해제시, 실린더A 후진, 램프 소등',
				'응용3 - 실린더A(미터아웃 전후진 속도조절), 실린더B(미터아웃 전진 속도조절)'
			],
			'design' : '바톤 넘겨주고, PB2 누를때까지 연속동작'
		},
		// #5
		{
			'no' : 5,
			'type' : 'air',
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
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [
				'1열 - LS1b => LS1a'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 비상정지 시, 실린더 A,B 후진',
				'응용3 - 실린더A,B(미터아웃 전/후진 속도 조절)'
			],
			'design' : '?'
		},
		// #6
		{
			'no' : 6,
			'type' : 'air',
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 5,
			'sol' : 2,
			'fixList' : [
				'9열 - k5a => k5b, k4b 삭제'
			],
			'addList' : [
				'응용1 - 연속동작, 5회 반복',
				'응용2 - 비상정지',
				'응용3 - 실A(미터아웃-전진속도조절), 실B(미터아웃-후진속도조절)'
			],
			'design' : '???'
		},
		// #7
		{
			'no' : 7,
			'type' : 'air',
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [
				'1열 - S2 => S1',
				'3열 - S1 => S2',
				'7열 - k2b 삭제(영향x)'
			],
			'addList' : [
				'응용1 - 5초 지연',
				'응용2 - 연속동작, 5회반복, 작업종료 후 램프점등',
				'응용3 - 실A,B(미터아웃-전/후진 속도조절)'
			],
			'design' : '앞에 목치는 구조'
		},
		// #8
		{
			'no' : 8,
			'type' : 'air',
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
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [
				'6열 - k4b 삭제',
				'8열 - k3b => k2b'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 5회반복, 작업 종료 후 램프 점등',
				'응용3 - 실A,B(미터아웃-전/후진속도조절)'
			],
			'design' : '바톤 넘겨주기'
		},
		// #9
		{
			'no' : 9,
			'type' : 'air',
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [
				'1열 - k3b 추가',
				'4열 - k1b 추가',
				'6열 - k1a => k2a'
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 연속동작, 3회반복, 비상정지, 실A 전진, 실B 후진',
				'응용3 - 실A(미터아웃-후진속도조절), 실B(미터아웃-전진속도조절)'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기'
		},
		// #10
		{
			'no' : 10,
			'type' : 'air',
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
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 4,
			'fixList' : [
				'3열 - LS2a => S2',
				'5열 - S2 => LS2a'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 5회반복, 작업종료후 램프 점등',
				'응용3 - 실A,B(미터아웃-전/후진속도조절)'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기'
		},
		// #11
		{
			'no' : 11,
			'type' : 'air',
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 2,
			'fixList' : [
				'새로 설계 요망, 11개 수정'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 비상정지, 실린더 A 전진',
				'응용3 - 실 A,B(미터아웃-전/후진속도조절)'
			],
			'design' : 'stepper 방식'
		},
		// #12
		{
			'no' : 12,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['se', 's', 'ne', 'n']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['n', 'se', 's', 'ne']
				}
			],
			'sols' : [
				{'name':'A-전진', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B-전진', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 8,
			'sol' : 4,
			'fixList' : [
				'k1 k2 k3 k4 => k1 k3 k5 k7'
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 연속동작, 3회반복, 실A,B 전진',
				'응용3 - 실A(미터아웃-전진속도조절), 실B(미터아웃-후진속도조절)'
			],
			'design' : '???'
		},
		// #13
		{
			'no' : 13,
			'type' : 'air',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['n', 'se', 'ne', 'n']
				}
			],
			'sols' : [
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B-전진', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 5,
			'sol' : 4,
			'fixList' : [
				'4열 - k4 위치 변경(자기유지)',
				'12열 - k5b => k3b'
				
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 연속동작, 3회반복, 실A,B 후진',
				'응용3 - 실A,B(미터아웃-전진속도조절)'
			],
			'design' : 'stepper'
		},
		// #14
		{
			'no' : 14,
			'type' : 'air',
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [
				'1열 - S2 => S1',
				'3열 - S1 => S2',
				'7열 - k2b 삭제(영향x)'
			],
			'addList' : [
				'응용1 - 3초 지연',
				'응용2 - 연속동작, 실B(후진)',
				'응용3 - 실A,B(미터아웃-전/후진속도조절)'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기'
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
					'list' : ['ne', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['dr', 'ur']
				}
			],
			'sols' : [
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B-모터,체크밸브', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 3,
			'sol' : 2,
			'fixList' : [
				'1열 - k3a => k3b'
			],
			'addList' : [
				'응용1 - 압력스위치 접점, 유지형 스위치에 의한 연속동작',
				'응용2 - 실A(미터아웃-후진속도조절)'
			],
			'design' : '?'
		},
		// #2
		{
			'no' : 2,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['s', 'ne', 'se', 's']
				}
			],
			'sols' : [
				{'name':'A', 'type' : '', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : '', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [
				'8열 - LS1a => LS2b'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 감압밸브(2MPa), 압력게이지 설치'
			],
			'design' : 'stepper'
		},
		// #3
		{
			'no' : 3,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['ul', 'w']
				},
				{
					'name' : '',
					'type' : '',
					'list' : ['', 'dlr']
				}
			],
			'sols' : [
				{'name':'A', 'type' : 'single', 'sw' : 'LS1,LS2'},
				{'name':'B-모터,all-block', 'type' : 'double', 'sw' : ''}
			],
			'relay' : 2,
			'sol' : 3,
			'fixList' : [
				'7열 - k1b => k2b'
			],
			'addList' : [
				'응용1 - 5초 지연',
				'응용2 - 릴리프밸브, 압력게이지, 체크밸브'
			],
			'design' : '?'
		},
		// #4
		{
			'no' : 4,
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 2,
			'sol' : 3,
			'fixList' : [
				'4열 - Y3 => Y2',
				'5열 - Y2 => Y3'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 카운터밸런스 밸브(실린더 전진시 자중낙하방지, 3MPa)'
			],
			'design' : '?'
		},
		// #5
		{
			'no' : 5,
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
				{'name':'A-all-block', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B-all-block', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 4,
			'fixList' : [
				'3열 - LS3-a => LS3-b'
			],
			'addList' : [
				'응용1 - 비상정지, 램프 점등, 비상정지 해제시 초기화',
				'응용2 - 실A,B(미터인-전진속도조절)'
			],
			'design' : '?'
		},
		// #6
		{
			'no' : 6,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ul', 'ur']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['se', 'ne']
				}
			],
			'sols' : [
				{'name':'A-모터(2/2+체크밸브)', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B-전진(CrossEleven)', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [
				'3열 - LS1-a(안 누른상태)',
				'5열 - LS2-a(누른상태)'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 모터-릴리프밸브+압력게이지'
			],
			'design' : 'stepper'
		},
		// #7
		{
			'no' : 7,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['n', 'dl', 'ul']
				}
			],
			'sols' : [
				{'name':'A-all-block', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B(전진, 체크밸브, 반대결선)', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [
				'1열 - k3b => k2b',
				'3열 - PB2 유지형 스위치로 변경',
				'4열(+) - 램프 추가',
				'4열 - k1b => k1a'
			],
			'addList' : [
				'응용1 - 비상정지, 램프 점등',
				'응용2 - 실A(미터인-전진속도조절), 실B(미터인-회전속도조절)'
			],
			'design' : '???'
		},
		// #8
		{
			'no' : 8,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Cylinder',
					'list' : ['s', 'ne', 'se']
				}
			],
			'sols' : [
				{'name':'A-all-block', 'type' : 'double', 'sw' : 'LS1,LS2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS3, LS4'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [
				'3열 - k3b => k1a(비상정지 해제 오류방지)',
				'5열 - k2b => k4b'
			],
			'addList' : [
				'응용1 - 비상정지, 5초 지연, 초기화',
				'응용2 - 실A,B(미터인-전진속도조절)'
			],
			'design' : 'stepper'
		},
		// #9
		{
			'no' : 9,
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
				{'name':'A', 'type' : 'single', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS1, LS2'}
			],
			'relay' : 5,
			'sol' : 3,
			'fixList' : [
				'12열 - k3b 추가(우측에서 2열)'
			],
			'addList' : [
				'응용1 - 비상정지, A 전진중 PB2 on',
				'응용2 - 파일럿 체크 밸브, 실B(미터아웃-전진속도조절)'
			],
			'design' : '전 단계 목치기'
		},
		// #10
		{
			'no' : 10,
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
				{'name':'A-all-block', 'type' : 'double', 'sw' : 'LS1, LS2'},
				{'name':'B-all-block', 'type' : 'double', 'sw' : 'LS3, LS4'}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [
				'1열 - k1b => k2b',
				'3열 - k2b => k3b',
				'5열 - k3b => k1b'
			],
			'addList' : [
				'응용1 - 압력스위치 접점, 3초 지연',
				'응용2 - 실A,B(미터아웃-전진속도조절)'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기+리셋 버튼, 출력 조절'
		},
		// #11
		{
			'no' : 11,
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
				{'name':'A-all-block', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B', 'type' : 'single', 'sw' : 'LS1, LS2'}
			],
			'relay' : 4,
			'sol' : 3,
			'fixList' : [
				'1열 - LS1-a 추가',
				'7열 - LS3-b => LS3-a, LS1-a => k1b',
				'11열 - k3a => k4a'
			],
			'addList' : [
				'응용1 - 연속동작, 3초 지연',
				'응용2 - 실A,B(미터아웃-전진속도조절)'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기'
		},
		// #12
		{
			'no' : 12,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['ul', 'w']
				},
				{
					'name' : '',
					'type' : '',
					'list' : ['', 'dlr']
				}
			],
			'sols' : [
				{'name':'A', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B-모터', 'type' : 'single', 'sw' : ''},
				{'name':'2/2', 'type' : 'single', 'sw' : ''}
			],
			'relay' : 3,
			'sol' : 4,
			'fixList' : [
				'3열 - k2a => k1a',
				'9열 - k3a => k1a'
			],
			'addList' : [
				'응용1 - 연속동작, 정지, 실A 전진',
				'응용2 - 실A(미터인-전/후진 속도 조절), 모터B(양방향 유량조절 밸브)'
			],
			'design' : '?'
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
				{'name':'A-all-block', 'type' : 'double', 'sw' : 'LS1, LS2'},
				{'name':'B', 'type' : 'double', 'sw' : 'LS3, LS4'}
			],
			'relay' : 5,
			'sol' : 4,
			'fixList' : [
				'1열 - k4a => k5a',
				'9열 - k1a 삭제',
				'11열 - k3b 삭제'
			],
			'addList' : [
				'응용1 - 연속동작',
				'응용2 - 연속동작 3회, 릴리프 밸브, 압력게이지 설치, 실B(미터아웃-후진속도조절)'
			],
			'design' : '바톤 다음 자기 유지전에 넘겨주고, 전 단계 목치기'
		},
		// #14
		{
			'no' : 14,
			'type' : 'oil',
			'fd' : [
				{
					'name' : 'A',
					'type' : 'Cylinder',
					'list' : ['ne', 'n', 'se']
				},
				{
					'name' : 'B',
					'type' : 'Motor',
					'list' : ['n', 'dl', 'ul']
				}
			],
			'sols' : [
				{'name':'A-all-block', 'type' : 'double', 'sw' : 'S1,S2'},
				{'name':'B-모터-전진(반대결선),체크밸브', 'type' : 'single', 'sw' : ''}
			],
			'relay' : 3,
			'sol' : 3,
			'fixList' : [
				'1열 - k3b => k2b',
				'3열 - PB2 유지형 스위치 변경',
				'4열(3열+) - 램프추가',
				'4열 - k1b => k1a'
			],
			'addList' : [
				'응용1 - 비상정지, 램프점등',
				'응용2 - 실A(미터아웃-전진속도조절), 모터B(미터인방식-회전속도조절)'
			],
			'design' : '?'
		}
	]
};

function fnGetTypeList() {
	const list = ['ALL', '공압', '유압'];
	return list
}

function fnGetType(str)
{
	let o = {
		'air' : '공압',
		'oil' : '유압',
		'Cylinder' : '실린더',
		'Motor' : '모터',
		'' : ''
	}
	
	return o[str];
}

function fnGetTypeToEng(str)
{
	let o = {
		'공압' : 'air',
		'유압' : 'oil',
		'실린더' : 'Cylinder',
		'모터' : 'Motor',
		'' : ''
	}
	
	return o[str];
}

function fnGetClassByType(str)
{
	let o = {
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