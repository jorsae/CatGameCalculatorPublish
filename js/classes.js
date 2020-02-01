var _0x1caa = [
    'baseCost',
    'srbtg',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'mxvQx',
    'ceil',
    'wsrfp',
    'getItemsPerCraft',
    'tAdvN',
    'hReoH',
    'IhzId',
    'getCost',
    'ghQhv',
    'tXVGk',
    'pow',
    'DOmIO',
    'toString',
    '\x20:\x20',
    'ATURO',
    'XKVZh',
    'quantity',
    '4|1|2|3|0',
    'craftingRequirements',
    'craftingTime',
    'rarity',
    'name',
    'btjPv',
    'length',
    'svefw',
    'craftingItem',
    'uydgH',
    'Jflvs',
    'nxNDs'
];
(function (_0x4b9051, _0x35d291) {
    var _0x383f6d = function (_0x27acab) {
        while (--_0x27acab) {
            _0x4b9051['push'](_0x4b9051['shift']());
        }
    };
    _0x383f6d(++_0x35d291);
}(_0x1caa, 0x100));
var _0x1078 = function (_0x1ba8a7, _0x20fc44) {
    _0x1ba8a7 = _0x1ba8a7 - 0x0;
    var _0x1a678a = _0x1caa[_0x1ba8a7];
    return _0x1a678a;
};
class CraftingRequirement {
    constructor(_0x34a023, _0x1ca7fb) {
        this['craftingItem'] = _0x34a023;
        this['quantity'] = _0x1ca7fb;
    }
    [_0x1078('0x0')]() {
        var _0x490235 = {
            'ATURO': function (_0x51fe12, _0x557e2f) {
                return _0x51fe12 + _0x557e2f;
            },
            'XKVZh': _0x1078('0x1')
        };
        _0x490235[_0x1078('0x2')](this['craftingItem']['name'] + _0x490235[_0x1078('0x3')], this[_0x1078('0x4')]);
    }
}
class CraftingItem {
    constructor(_0x2b3583, _0x5828a2, _0x5146a6, _0x4f3de3, _0x46a206 = null) {
        var _0xa9f3d5 = _0x1078('0x5')['split']('|'), _0x188e56 = 0x0;
        while (!![]) {
            switch (_0xa9f3d5[_0x188e56++]) {
            case '0':
                this[_0x1078('0x6')] = _0x46a206;
                continue;
            case '1':
                this[_0x1078('0x7')] = _0x5828a2;
                continue;
            case '2':
                this['baseCost'] = _0x5146a6;
                continue;
            case '3':
                this[_0x1078('0x8')] = _0x4f3de3;
                continue;
            case '4':
                this[_0x1078('0x9')] = _0x2b3583;
                continue;
            }
            break;
        }
    }
    [_0x1078('0x0')]() {
        var _0x1dc075 = {
            'btjPv': function (_0x29a736, _0x38b2f7) {
                return _0x29a736 < _0x38b2f7;
            },
            'svefw': function (_0x431935, _0x226c05) {
                return _0x431935 + _0x226c05;
            },
            'uydgH': '\x20:\x20',
            'Jflvs': function (_0x4b21f2, _0x2bd87d) {
                return _0x4b21f2 + _0x2bd87d;
            },
            'nxNDs': 'minutes,\x20',
            'srbtg': 'coins.\x20Crafting\x20Requirement:\x20'
        };
        var _0x42d710 = '';
        for (var _0x141508 = 0x0; _0x1dc075[_0x1078('0xa')](_0x141508, this[_0x1078('0x6')][_0x1078('0xb')]); _0x141508++) {
            _0x42d710 += _0x1dc075[_0x1078('0xc')](this['craftingRequirements'][_0x141508][_0x1078('0xd')][_0x1078('0x9')], _0x1dc075[_0x1078('0xe')]) + this[_0x1078('0x6')][_0x141508]['quantity'] + '\x20';
        }
        return _0x1dc075[_0x1078('0xc')](_0x1dc075[_0x1078('0xf')](_0x1dc075[_0x1078('0xf')](this[_0x1078('0x9')] + ',\x20', this['craftingTime']) + _0x1dc075[_0x1078('0x10')], this[_0x1078('0x11')]) + _0x1dc075[_0x1078('0x12')], _0x42d710);
    }
}
class CraftingItemOutput {
    constructor(_0x4eb8a1, _0x500002, _0x2b32a1, _0x7d8ba9, _0x242e02) {
        this[_0x1078('0x9')] = _0x4eb8a1;
        this[_0x1078('0x7')] = _0x500002;
        this[_0x1078('0x11')] = _0x2b32a1;
        this[_0x1078('0x8')] = _0x7d8ba9;
        this[_0x1078('0x4')] = _0x242e02;
    }
    [_0x1078('0x13')]() {
        switch (this['rarity']) {
        case rarity[_0x1078('0x14')]:
            return 0x0;
        case rarity[_0x1078('0x15')]:
            return 0x1;
        default:
        case rarity[_0x1078('0x16')]:
            return 0x2;
        case rarity[_0x1078('0x17')]:
            return 0x3;
        case rarity[_0x1078('0x18')]:
            return 0x4;
        case rarity[_0x1078('0x19')]:
            return 0x5;
        }
    }
    [_0x1078('0x1a')](_0x3fd5b5) {
        var _0x42a268 = {
            'mxvQx': function (_0x3d477f, _0x3d8b07) {
                return _0x3d477f < _0x3d8b07;
            },
            'wsrfp': function (_0xbb6b67, _0x1e941a) {
                return _0xbb6b67 / _0x1e941a;
            }
        };
        var _0x546ea5 = 0x1;
        if (_0x42a268[_0x1078('0x1b')](this[_0x1078('0x7')], _0x3fd5b5)) {
            _0x546ea5 = Math[_0x1078('0x1c')](_0x42a268[_0x1078('0x1d')](_0x3fd5b5, this['craftingTime']));
        }
        if (_0x546ea5 > this[_0x1078('0x4')]) {
            return this[_0x1078('0x4')];
        }
        return _0x546ea5;
    }
    [_0x1078('0x1e')](_0x1175f7) {
        var _0x7e4217 = {
            'tAdvN': function (_0x311cb2, _0x24a47c) {
                return _0x311cb2 < _0x24a47c;
            },
            'hReoH': function (_0x59965d, _0x17b2de) {
                return _0x59965d / _0x17b2de;
            },
            'IhzId': function (_0x3234b8, _0x44dbb6) {
                return _0x3234b8 / _0x44dbb6;
            }
        };
        var _0x39d521 = 0x1;
        if (_0x7e4217[_0x1078('0x1f')](this[_0x1078('0x7')], _0x1175f7)) {
            _0x39d521 = Math[_0x1078('0x1c')](_0x7e4217[_0x1078('0x20')](_0x1175f7, this[_0x1078('0x7')]));
        }
        if (_0x39d521 > this[_0x1078('0x4')]) {
            _0x39d521 = this[_0x1078('0x4')];
        }
        return Math[_0x1078('0x1c')](_0x7e4217[_0x1078('0x21')](this['quantity'], _0x39d521));
    }
    [_0x1078('0x22')](_0x355f8d) {
        var _0x1724d0 = {
            'ghQhv': function (_0x1efbe8, _0x27d207) {
                return _0x1efbe8 * _0x27d207;
            },
            'tXVGk': function (_0x3bd822, _0x152ddd) {
                return _0x3bd822 / _0x152ddd;
            },
            'DOmIO': function (_0x1ed177, _0x47a16d) {
                return _0x1ed177 * _0x47a16d;
            }
        };
        var _0x3e50eb = this[_0x1078('0x1e')](_0x355f8d);
        var _0x467dc3 = this[_0x1078('0x1a')](_0x355f8d);
        return _0x1724d0[_0x1078('0x23')](_0x1724d0[_0x1078('0x24')](this[_0x1078('0x11')], 0x4) * (Math[_0x1078('0x25')](_0x3e50eb, 0x2) + _0x1724d0[_0x1078('0x26')](0x3, _0x3e50eb)), _0x467dc3);
    }
}