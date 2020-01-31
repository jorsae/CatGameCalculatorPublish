var _0x15c7 = [
    'OHFhG',
    'cneuc',
    'PMXxo',
    'fnsAK',
    'LuYLT',
    '2|1|4|3|0',
    'NnSRC',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'RMvPp',
    'ceil',
    'tJEpP',
    'MAiRa',
    'getItemsPerCraft',
    'Cxjax',
    'uShVo',
    'getCost',
    'pOPfr',
    'pow',
    'quantity',
    'toString',
    '\x20:\x20',
    'NskXu',
    'PwIsr',
    'craftingItem',
    'name',
    'sUCZq',
    '4|0|3|1|2',
    'split',
    'craftingTime',
    'rarity',
    'craftingRequirements',
    'baseCost',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'length',
    'OXZEX',
    'nFcrS',
    'eEueR'
];
(function (_0x36647f, _0x43ef9a) {
    var _0x3b8d9b = function (_0x1c5983) {
        while (--_0x1c5983) {
            _0x36647f['push'](_0x36647f['shift']());
        }
    };
    _0x3b8d9b(++_0x43ef9a);
}(_0x15c7, 0x1ae));
var _0x2b5b = function (_0xed1848, _0x55f47a) {
    _0xed1848 = _0xed1848 - 0x0;
    var _0x59cdc7 = _0x15c7[_0xed1848];
    return _0x59cdc7;
};
class CraftingRequirement {
    constructor(_0x57f924, _0x105487) {
        this['craftingItem'] = _0x57f924;
        this[_0x2b5b('0x0')] = _0x105487;
    }
    [_0x2b5b('0x1')]() {
        var _0x1463f4 = {
            'NskXu': function (_0x22eff3, _0x5e4ae8) {
                return _0x22eff3 + _0x5e4ae8;
            },
            'PwIsr': function (_0x412ab1, _0x37d53f) {
                return _0x412ab1 + _0x37d53f;
            },
            'sUCZq': _0x2b5b('0x2')
        };
        _0x1463f4[_0x2b5b('0x3')](_0x1463f4[_0x2b5b('0x4')](this[_0x2b5b('0x5')][_0x2b5b('0x6')], _0x1463f4[_0x2b5b('0x7')]), this[_0x2b5b('0x0')]);
    }
}
class CraftingItem {
    constructor(_0x647902, _0x314687, _0x525c5c, _0x867c0c, _0xa56236 = null) {
        var _0x3cbac4 = _0x2b5b('0x8')[_0x2b5b('0x9')]('|'), _0x82f75a = 0x0;
        while (!![]) {
            switch (_0x3cbac4[_0x82f75a++]) {
            case '0':
                this[_0x2b5b('0xa')] = _0x314687;
                continue;
            case '1':
                this[_0x2b5b('0xb')] = _0x867c0c;
                continue;
            case '2':
                this[_0x2b5b('0xc')] = _0xa56236;
                continue;
            case '3':
                this[_0x2b5b('0xd')] = _0x525c5c;
                continue;
            case '4':
                this[_0x2b5b('0x6')] = _0x647902;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x19596a = {
            'zBFqn': function (_0x3c1e8c, _0x467121) {
                return _0x3c1e8c < _0x467121;
            },
            'OXZEX': function (_0x64a4d1, _0x2b3445) {
                return _0x64a4d1 + _0x2b3445;
            },
            'nFcrS': function (_0x380855, _0xe0c929) {
                return _0x380855 + _0xe0c929;
            },
            'eEueR': _0x2b5b('0x2'),
            'OHFhG': function (_0x577389, _0x53e042) {
                return _0x577389 + _0x53e042;
            },
            'cneuc': function (_0x4b6819, _0x20f3fe) {
                return _0x4b6819 + _0x20f3fe;
            },
            'mzQqj': function (_0x210936, _0x2304e0) {
                return _0x210936 + _0x2304e0;
            },
            'PMXxo': function (_0x35a7d1, _0x4a3e09) {
                return _0x35a7d1 + _0x4a3e09;
            },
            'fnsAK': _0x2b5b('0xe'),
            'LuYLT': _0x2b5b('0xf')
        };
        var _0x567623 = '';
        for (var _0x215654 = 0x0; _0x19596a['zBFqn'](_0x215654, this['craftingRequirements'][_0x2b5b('0x10')]); _0x215654++) {
            _0x567623 += _0x19596a[_0x2b5b('0x11')](_0x19596a['nFcrS'](_0x19596a[_0x2b5b('0x12')](this[_0x2b5b('0xc')][_0x215654]['craftingItem'][_0x2b5b('0x6')], _0x19596a[_0x2b5b('0x13')]), this[_0x2b5b('0xc')][_0x215654]['quantity']), '\x20');
        }
        return _0x19596a[_0x2b5b('0x14')](_0x19596a[_0x2b5b('0x15')](_0x19596a['mzQqj'](_0x19596a[_0x2b5b('0x16')](_0x19596a[_0x2b5b('0x16')](this[_0x2b5b('0x6')], ',\x20'), this[_0x2b5b('0xa')]), _0x19596a[_0x2b5b('0x17')]), this['baseCost']), _0x19596a[_0x2b5b('0x18')]) + _0x567623;
    }
}
class CraftingItemOutput {
    constructor(_0x304e56, _0x9f690f, _0x27d510, _0x24f91a, _0x52f3df) {
        var _0x44cc77 = { 'NnSRC': _0x2b5b('0x19') };
        var _0x237951 = _0x44cc77[_0x2b5b('0x1a')]['split']('|'), _0x23b759 = 0x0;
        while (!![]) {
            switch (_0x237951[_0x23b759++]) {
            case '0':
                this[_0x2b5b('0x0')] = _0x52f3df;
                continue;
            case '1':
                this[_0x2b5b('0xa')] = _0x9f690f;
                continue;
            case '2':
                this['name'] = _0x304e56;
                continue;
            case '3':
                this['rarity'] = _0x24f91a;
                continue;
            case '4':
                this[_0x2b5b('0xd')] = _0x27d510;
                continue;
            }
            break;
        }
    }
    [_0x2b5b('0x1b')]() {
        switch (this[_0x2b5b('0xb')]) {
        case rarity[_0x2b5b('0x1c')]:
            return 0x0;
        case rarity[_0x2b5b('0x1d')]:
            return 0x1;
        default:
        case rarity[_0x2b5b('0x1e')]:
            return 0x2;
        case rarity[_0x2b5b('0x1f')]:
            return 0x3;
        case rarity[_0x2b5b('0x20')]:
            return 0x4;
        case rarity[_0x2b5b('0x21')]:
            return 0x5;
        }
    }
    [_0x2b5b('0x22')](_0x254d18) {
        var _0x4af5fc = {
            'RMvPp': function (_0x1f43d7, _0x7d9d65) {
                return _0x1f43d7 < _0x7d9d65;
            },
            'tJEpP': function (_0x145c10, _0x55ffca) {
                return _0x145c10 / _0x55ffca;
            },
            'MAiRa': function (_0x4ff1a7, _0x45223e) {
                return _0x4ff1a7 > _0x45223e;
            }
        };
        var _0x15fae5 = 0x1;
        if (_0x4af5fc[_0x2b5b('0x23')](this['craftingTime'], _0x254d18)) {
            _0x15fae5 = Math[_0x2b5b('0x24')](_0x4af5fc[_0x2b5b('0x25')](_0x254d18, this[_0x2b5b('0xa')]));
        }
        if (_0x4af5fc[_0x2b5b('0x26')](_0x15fae5, this['quantity'])) {
            return this[_0x2b5b('0x0')];
        }
        return _0x15fae5;
    }
    [_0x2b5b('0x27')](_0x4e5585) {
        var _0x72ec = {
            'Cxjax': function (_0x392206, _0x1ce933) {
                return _0x392206 < _0x1ce933;
            },
            'uShVo': function (_0x4ba953, _0x4e4c42) {
                return _0x4ba953 / _0x4e4c42;
            }
        };
        var _0xa9b578 = 0x1;
        if (_0x72ec[_0x2b5b('0x28')](this[_0x2b5b('0xa')], _0x4e5585)) {
            _0xa9b578 = Math['ceil'](_0x4e5585 / this[_0x2b5b('0xa')]);
        }
        if (_0xa9b578 > this[_0x2b5b('0x0')]) {
            _0xa9b578 = this[_0x2b5b('0x0')];
        }
        return Math['ceil'](_0x72ec[_0x2b5b('0x29')](this[_0x2b5b('0x0')], _0xa9b578));
    }
    [_0x2b5b('0x2a')](_0x3be5c6) {
        var _0x24f107 = {
            'pOPfr': function (_0x4d4d28, _0x3895cc) {
                return _0x4d4d28 * _0x3895cc;
            }
        };
        var _0x591d15 = this[_0x2b5b('0x27')](_0x3be5c6);
        var _0x911c4e = this[_0x2b5b('0x22')](_0x3be5c6);
        return _0x24f107[_0x2b5b('0x2b')](this['baseCost'] / 0x4, Math[_0x2b5b('0x2c')](_0x591d15, 0x2) + 0x3 * _0x591d15) * _0x911c4e;
    }
}