const Role = { Tank: 0, DPS: 1, Support: 2 };

const HEROES = [
    {
        id: 'dva',
        name: 'D.Va',
        role: Role.Tank,
        weakAgainst: [
            'winston',
            'zarya',
            'bastion',
            'sojourn',
            'symmetra',
            'moira'
        ]
    },
    {
        id: 'doomfist',
        name: 'Doomfist',
        role: Role.Tank,
        weakAgainst: [
            'bastion',
            'genji',
            'sombra',
            'tracer',
            'ana',
            'brigitte'
        ]
    },
    {
        id: 'junker_queen',
        name: 'Junker Queen',
        role: Role.Tank,
        weakAgainst: [
            'wrecking_ball',
            'widowmaker',
            'ana',
            'lucio',
            'kiriko'
        ]
    },
    {
        id: 'mauga',
        name: 'Mauga',
        role: Role.Tank,
        weakAgainst: [
            'doomfist',
            'mauga',
            'wrecking_ball',
            'sombra',
            'kiriko',
            'zenyatta'
        ]
    },
    {
        id: 'orisa',
        name: 'Orisa',
        role: Role.Tank,
        weakAgainst: [
            'dva',
            'zarya',
            'echo',
            'mei',
            'moira'
        ]
    },
    {
        id: 'ramattra',
        name: 'Ramattra',
        role: Role.Tank,
        weakAgainst: [
            'roadhog',
            'cassidy',
            'genji',
            'reaper',
            'pharah',
            'tracer',
            'kiriko'
        ]
    },
    {
        id: 'reinhardt',
        name: 'Reinhardt',
        role: Role.Tank,
        weakAgainst: [
            'cassidy',
            'junkrat',
            'mei',
            'pharah',
            'sombra',
            'zenyatta'
        ]
    },
    {
        id: 'roadhog',
        name: 'Roadhog',
        role: Role.Tank,
        weakAgainst: [
            'roadhog',
            'wrecking_ball',
            'echo',
            'junkrat',
            'reaper',
            'ana'
        ]
    },
    {
        id: 'sigma',
        name: 'Sigma',
        role: Role.Tank,
        weakAgainst: [
            'ramattra',
            'roadhog',
            'genji',
            'sombra',
            'tracer',
            'lucio'
        ]
    },
    {
        id: 'winston',
        name: 'Winston',
        role: Role.Tank,
        weakAgainst: [
            'zarya',
            'bastion',
            'junkrat',
            'pharah',
            'ana',
            'brigitte'
        ]
    },
    {
        id: 'wrecking_ball',
        name: 'Wrecking Ball',
        role: Role.Tank,
        weakAgainst: [
            'doomfist',
            'roadhog',
            'mei',
            'sombra',
            'ana',
            'brigitte'
        ]
    },
    {
        id: 'zarya',
        name: 'Zarya',
        role: Role.Tank,
        weakAgainst: [
            'dva',
            'cassidy',
            'hanzo',
            'tracer',
            'widowmaker',
            'zenyatta'
        ]
    },
    {
        id: 'ashe',
        name: 'Ashe',
        role: Role.DPS,
        weakAgainst: [
            'zarya',
            'genji',
            'tracer',
            'widowmaker',
            'ana',
            'kiriko'
        ]
    },
    {
        id: 'bastion',
        name: 'Bastion',
        role: Role.DPS,
        weakAgainst: [
            'orisa',
            'zarya',
            'genji',
            'junkrat',
            'pharah',
            'tracer',
            'ana'
        ]
    },
    {
        id: 'cassidy',
        name: 'Cassidy',
        role: Role.DPS,
        weakAgainst: [
            'reinhardt',
            'winston',
            'cassidy',
            'genji',
            'ana'
        ]
    },
    {
        id: 'echo',
        name: 'Echo',
        role: Role.DPS,
        weakAgainst: [
            'winston',
            'zarya',
            'ashe',
            'cassidy',
            'soldier_76',
            'widowmaker'
        ]
    },
    {
        id: 'genji',
        name: 'Genji',
        role: Role.DPS,
        weakAgainst: [
            'winston',
            'zarya',
            'mei',
            'symmetra',
            'ana',
            'moira'
        ]
    },
    {
        id: 'hanzo',
        name: 'Hanzo',
        role: Role.DPS,
        weakAgainst: [
            'dva',
            'wrecking_ball',
            'genji',
            'widowmaker',
            'lucio'
        ]
    },
    {
        id: 'junkrat',
        name: 'Junkrat',
        role: Role.DPS,
        weakAgainst: [
            'wrecking_ball',
            'zarya',
            'cassidy',
            'soldier_76',
            'brigitte',
            'lifeweaver',
            'lucio'
        ]
    },
    {
        id: 'mei',
        name: 'Mei',
        role: Role.DPS,
        weakAgainst: [
            'dva',
            'echo',
            'pharah',
            'sombra',
            'kiriko'
        ]
    },
    {
        id: 'pharah',
        name: 'Pharah',
        role: Role.DPS,
        weakAgainst: [
            'dva',
            'ashe',
            'cassidy',
            'soldier_76',
            'widowmaker',
            'baptiste'
        ]
    },
    {
        id: 'reaper',
        name: 'Reaper',
        role: Role.DPS,
        weakAgainst: [
            'zarya',
            'echo',
            'junkrat',
            'pharah',
            'widowmaker',
            'ana'
        ]
    },
    {
        id: 'sojourn',
        name: 'Sojourn',
        role: Role.DPS,
        weakAgainst: [
            'mauga',
            'winston',
            'genji',
            'tracer',
            'lucio'
        ]
    },
    {
        id: 'soldier_76',
        name: 'Soldier 76',
        role: Role.DPS,
        weakAgainst: [
            'roadhog',
            'ashe',
            'cassidy',
            'genji',
            'junkrat',
            'ana',
            'lucio'
        ]
    },
    {
        id: 'sombra',
        name: 'Sombra',
        role: Role.DPS,
        weakAgainst: [
            'hanzo',
            'junkrat',
            'mei',
            'pharah',
            'ana',
            'kiriko'
        ]
    },
    {
        id: 'symmetra',
        name: 'Symmetra',
        role: Role.DPS,
        weakAgainst: [
            'mauga',
            'winston',
            'echo',
            'junkrat',
            'pharah'
        ]
    },
    {
        id: 'torbjorn',
        name: 'Torbjorn',
        role: Role.DPS,
        weakAgainst: [
            'dva',
            'ashe',
            'junkrat'
        ]
    },
    {
        id: 'tracer',
        name: 'Tracer',
        role: Role.DPS,
        weakAgainst: [
            'mauga',
            'winston',
            'mei',
            'symmetra',
            'torbjorn',
            'brigitte',
            'moira'
        ]
    },
    {
        id: 'widowmaker',
        name: 'Widowmaker',
        role: Role.DPS,
        weakAgainst: [
            'dva',
            'winston',
            'genji',
            'sombra',
            'tracer',
            'zenyatta'
        ]
    },
    {
        id: 'ana',
        name: 'Anna',
        role: Role.Support,
        weakAgainst: [
            'ramattra',
            'winston',
            'echo',
            'pharah',
            'tracer',
            'kiriko'
        ]
    },
    {
        id: 'baptiste',
        name: 'Baptiste',
        role: Role.Support,
        weakAgainst: [
            'ashe',
            'cassidy',
            'mei',
            'lucio'
        ]
    },
    {
        id: 'brigitte',
        name: 'Brigitte',
        role: Role.Support,
        weakAgainst: [
            'echo',
            'junkrat',
            'pharah'
        ]
    },
    {
        id: 'illari',
        name: 'Illari',
        role: Role.Support,
        weakAgainst: [
            'dva',
            'orisa',
            'zarya',
            'ashe',
            'cassidy',
            'widowmaker',
            'baptiste',
            'lifeweaver',
            'lucio'
        ]
    },
    {
        id: 'kiriko',
        name: 'Kiriko',
        role: Role.Support,
        weakAgainst: [
            'roadhog',
            'genji',
            'mei',
            'sombra',
            'tracer'
        ]
    },
    {
        id: 'lifeweaver',
        name: 'Lifeweaver',
        role: Role.Support,
        weakAgainst: [
            'soldier_76',
            'sombra',
            'lucio'
        ]
    },
    {
        id: 'lucio',
        name: 'Lucio',
        role: Role.Support,
        weakAgainst: [
            'roadhog',
            'winston',
            'cassidy',
            'mei',
            'soldier_76',
            'symmetra',
            'torbjorn',
            'moira'
        ]
    },
    {
        id: 'mercy',
        name: 'Mercy',
        role: Role.Support,
        weakAgainst: [
            'roadhog',
            'winston',
            'echo',
            'cassidy',
            'genji',
            'tracer',
            'widowmaker'
        ]
    },
    {
        id: 'moira',
        name: 'Moira',
        role: Role.Support,
        weakAgainst: [
            'roadhog',
            'zarya',
            'ashe',
            'echo',
            'junkrat',
            'mei',
            'pharah',
            'widowmaker',
            'ana'
        ]
    },
    {
        id: 'zenyatta',
        name: 'Zenyatta',
        role: Role.Support,
        weakAgainst: [
            'ashe',
            'cassidy',
            'hanzo',
            'junkrat',
            'pharah',
            'tracer',
            'widowmaker',
            'kiriko',
            'zenyatta'
        ]
    }
];

export default HEROES;
