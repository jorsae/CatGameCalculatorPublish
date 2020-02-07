var _0xb3ed = [
    'HIDDEN',
    'RAW',
    'COMMON',
    'EPIC',
    'LEGENDARY',
    'getCraftingMethod',
    'VyThB',
    'cAbfw',
    'ceil',
    'iLKvJ',
    'MwRml',
    'floor',
    'qwLvw',
    'getCost',
    'eYnjh',
    'length',
    'GFlaH',
    'gTfwz',
    'itemQuantity',
    'crafts',
    'quantity',
    'toString',
    'FRyPx',
    'craftingItem',
    'name',
    '\x20:\x20',
    'split',
    'craftingTime',
    'rarity',
    'baseCost',
    'minutes,\x20',
    'craftingRequirements',
    'RjHFI',
    'mMrkX',
    'SzwUy',
    'avbDb',
    'gbSWJ',
    'ChdYU',
    'nIhkO',
    'QPkwI',
    '1|3|2|0|4',
    'mTuPW',
    'getRarityValue'
];
(function (_0x2b48a1, _0x4d0f0d) {
    var _0x4a3377 = function (_0x35ed50) {
        while (--_0x35ed50) {
            _0x2b48a1['push'](_0x2b48a1['shift']());
        }
    };
    _0x4a3377(++_0x4d0f0d);
}(_0xb3ed, 0xbe));
var _0x171f = function (_0xf1fbed, _0x4fac69) {
    _0xf1fbed = _0xf1fbed - 0x0;
    var _0x8f79c3 = _0xb3ed[_0xf1fbed];
    return _0x8f79c3;
};
class CraftingMethod {
    constructor(_0x297c6c, _0x55121e) {
        this[_0x171f('0x0')] = _0x297c6c;
        this[_0x171f('0x1')] = _0x55121e;
    }
}
class CraftingRequirement {
    constructor(_0x1c0b8f, _0x37e65a) {
        this['craftingItem'] = _0x1c0b8f;
        this[_0x171f('0x2')] = _0x37e65a;
    }
    [_0x171f('0x3')]() {
        var _0x59a856 = {
            'FRyPx': function (_0x391106, _0x344c9a) {
                return _0x391106 + _0x344c9a;
            }
        };
        _0x59a856['FRyPx'](_0x59a856[_0x171f('0x4')](this[_0x171f('0x5')][_0x171f('0x6')], _0x171f('0x7')), this[_0x171f('0x2')]);
    }
}
class CraftingItem {
    constructor(_0x8c123a, _0x2d1fc2, _0xb02b50, _0x491d5e, _0x359d1f = null) {
        var _0x4ed7f5 = { 'mDjXp': '1|0|3|2|4' };
        var _0x36fa51 = _0x4ed7f5['mDjXp'][_0x171f('0x8')]('|'), _0x359ea6 = 0x0;
        while (!![]) {
            switch (_0x36fa51[_0x359ea6++]) {
            case '0':
                this[_0x171f('0x9')] = _0x2d1fc2;
                continue;
            case '1':
                this[_0x171f('0x6')] = _0x8c123a;
                continue;
            case '2':
                this[_0x171f('0xa')] = _0x491d5e;
                continue;
            case '3':
                this[_0x171f('0xb')] = _0xb02b50;
                continue;
            case '4':
                this['craftingRequirements'] = _0x359d1f;
                continue;
            }
            break;
        }
    }
    [_0x171f('0x3')]() {
        var _0x2735e8 = {
            'RjHFI': function (_0x18c718, _0x56e4fd) {
                return _0x18c718 + _0x56e4fd;
            },
            'mMrkX': function (_0x1a4aec, _0x3b773a) {
                return _0x1a4aec + _0x3b773a;
            },
            'sgWmE': function (_0x51910f, _0x3ac0f5) {
                return _0x51910f + _0x3ac0f5;
            },
            'SzwUy': _0x171f('0x7'),
            'avbDb': function (_0x1fb7c5, _0x3b8674) {
                return _0x1fb7c5 + _0x3b8674;
            },
            'gbSWJ': function (_0x3d24bf, _0x449f91) {
                return _0x3d24bf + _0x449f91;
            },
            'ChdYU': function (_0xe158e2, _0x3efb96) {
                return _0xe158e2 + _0x3efb96;
            },
            'nIhkO': _0x171f('0xc'),
            'QPkwI': 'coins.\x20Crafting\x20Requirement:\x20'
        };
        var _0x2c07ca = '';
        for (var _0x215544 = 0x0; _0x215544 < this[_0x171f('0xd')]['length']; _0x215544++) {
            _0x2c07ca += _0x2735e8[_0x171f('0xe')](_0x2735e8[_0x171f('0xf')](_0x2735e8['sgWmE'](this[_0x171f('0xd')][_0x215544]['craftingItem'][_0x171f('0x6')], _0x2735e8[_0x171f('0x10')]), this[_0x171f('0xd')][_0x215544][_0x171f('0x2')]), '\x20');
        }
        return _0x2735e8[_0x171f('0x11')](_0x2735e8['avbDb'](_0x2735e8['gbSWJ'](_0x2735e8[_0x171f('0x12')](_0x2735e8[_0x171f('0x13')](this[_0x171f('0x6')] + ',\x20', this['craftingTime']), _0x2735e8[_0x171f('0x14')]), this['baseCost']), _0x2735e8[_0x171f('0x15')]), _0x2c07ca);
    }
}
class CraftingItemOutput {
    constructor(_0x2eae35, _0xe325cd, _0x4bbaee, _0x539d03, _0x3a5991) {
        var _0x53f988 = { 'mTuPW': _0x171f('0x16') };
        var _0x13c02a = _0x53f988[_0x171f('0x17')][_0x171f('0x8')]('|'), _0x3d8f9b = 0x0;
        while (!![]) {
            switch (_0x13c02a[_0x3d8f9b++]) {
            case '0':
                this['rarity'] = _0x539d03;
                continue;
            case '1':
                this[_0x171f('0x6')] = _0x2eae35;
                continue;
            case '2':
                this['baseCost'] = _0x4bbaee;
                continue;
            case '3':
                this[_0x171f('0x9')] = _0xe325cd;
                continue;
            case '4':
                this[_0x171f('0x2')] = _0x3a5991;
                continue;
            }
            break;
        }
    }
    [_0x171f('0x18')]() {
        switch (this['rarity']) {
        case rarity[_0x171f('0x19')]:
            return 0x0;
        case rarity[_0x171f('0x1a')]:
            return 0x1;
        default:
        case rarity[_0x171f('0x1b')]:
            return 0x2;
        case rarity['RARE']:
            return 0x3;
        case rarity[_0x171f('0x1c')]:
            return 0x4;
        case rarity[_0x171f('0x1d')]:
            return 0x5;
        }
    }
    [_0x171f('0x1e')](_0x17d00d) {
        var _0x250062 = {
            'VyThB': '2|6|1|0|4|3|5|7',
            'SNsQz': function (_0x3f5342, _0x3ac773) {
                return _0x3f5342 === _0x3ac773;
            },
            'cAbfw': function (_0x10f9cf, _0x4e5113) {
                return _0x10f9cf > _0x4e5113;
            },
            'qwLvw': function (_0x338cb3, _0x4b22d9) {
                return _0x338cb3 / _0x4b22d9;
            },
            'iLKvJ': function (_0x2d21b6, _0x37dad4) {
                return _0x2d21b6 <= _0x37dad4;
            },
            'gUkyn': function (_0x29dce3, _0x4023a8) {
                return _0x29dce3 * _0x4023a8;
            },
            'MwRml': function (_0x1714ad, _0x46373e) {
                return _0x1714ad + _0x46373e;
            },
            'jJcRk': function (_0x334fed, _0x5fc062) {
                return _0x334fed < _0x5fc062;
            }
        };
        var _0x2c7f62 = _0x250062[_0x171f('0x1f')][_0x171f('0x8')]('|'), _0x28d92a = 0x0;
        while (!![]) {
            switch (_0x2c7f62[_0x28d92a++]) {
            case '0':
                if (_0x250062['SNsQz'](_0x5b5cd7, 0x1)) {
                    return [new CraftingMethod(this[_0x171f('0x2')], 0x1)];
                }
                continue;
            case '1':
                if (_0x250062[_0x171f('0x20')](_0x5b5cd7, this[_0x171f('0x2')])) {
                    _0x5b5cd7 = this[_0x171f('0x2')];
                    return [new CraftingMethod(0x1, this[_0x171f('0x2')])];
                }
                continue;
            case '2':
                var _0x5b5cd7 = 0x1;
                continue;
            case '3':
                var _0x106c86 = _0x11604d - 0x1;
                continue;
            case '4':
                var _0x11604d = Math[_0x171f('0x21')](_0x250062['qwLvw'](this[_0x171f('0x2')], _0x5b5cd7));
                continue;
            case '5':
                for (var _0x327ce3 = 0x1; _0x250062[_0x171f('0x22')](_0x327ce3, _0x5b5cd7); _0x327ce3++) {
                    var _0x3cf3e6 = _0x11604d * _0x327ce3;
                    var _0x23983f = _0x250062['gUkyn'](_0x106c86, _0x5b5cd7 - _0x327ce3);
                    if (_0x250062[_0x171f('0x23')](_0x3cf3e6, _0x23983f) === this[_0x171f('0x2')]) {
                        return [
                            new CraftingMethod(_0x11604d, _0x327ce3),
                            new CraftingMethod(_0x106c86, _0x5b5cd7 - _0x327ce3)
                        ];
                    }
                }
                continue;
            case '6':
                if (_0x250062['jJcRk'](this['craftingTime'], _0x17d00d)) {
                    _0x5b5cd7 = Math[_0x171f('0x24')](_0x250062[_0x171f('0x25')](_0x17d00d, this[_0x171f('0x9')]));
                }
                continue;
            case '7':
                return [];
            }
            break;
        }
    }
    [_0x171f('0x26')](_0x37c04f) {
        var _0x13a216 = {
            'eYnjh': function (_0x516f30, _0x456a86) {
                return _0x516f30 < _0x456a86;
            },
            'GFlaH': function (_0x4c0750, _0x126def) {
                return _0x4c0750 * _0x126def;
            },
            'gTfwz': function (_0x49c131, _0x1efd08) {
                return _0x49c131 * _0x1efd08;
            },
            'hcfQa': function (_0x14f060, _0x5abab0) {
                return _0x14f060 / _0x5abab0;
            },
            'SDMhf': function (_0x3a4a7d, _0x3c8c04) {
                return _0x3a4a7d + _0x3c8c04;
            }
        };
        var _0x342339 = 0x0;
        for (var _0x38229c = 0x0; _0x13a216[_0x171f('0x27')](_0x38229c, _0x37c04f[_0x171f('0x28')]); _0x38229c++) {
            _0x342339 += _0x13a216[_0x171f('0x29')](_0x13a216['gTfwz'](_0x13a216['hcfQa'](this[_0x171f('0xb')], 0x4), _0x13a216['SDMhf'](Math['pow'](_0x37c04f[_0x38229c][_0x171f('0x0')], 0x2), _0x13a216[_0x171f('0x2a')](0x3, _0x37c04f[_0x38229c][_0x171f('0x0')]))), _0x37c04f[_0x38229c][_0x171f('0x1')]);
        }
        return _0x342339;
    }
}