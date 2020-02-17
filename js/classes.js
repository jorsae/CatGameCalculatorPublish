var _0xc516 = [
    'craftingTime',
    'craftingRequirements',
    'baseCost',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'HzDLb',
    'length',
    'xrRek',
    'ySFmI',
    'fCuld',
    'OzLSF',
    'bRUjS',
    '0|5|1|3|4|2',
    'PYfQM',
    'sortingOrder',
    'rarity',
    'getRarityValue',
    'HIDDEN',
    'COMMON',
    'RARE',
    'LEGENDARY',
    'getCraftingMethod',
    '1|5|2|4|3|0|6|7',
    'ceil',
    'yHXRs',
    'RCzpy',
    'lstZr',
    'floor',
    'hFzzB',
    'EJYnS',
    'LgNbP',
    'getCost',
    'itemQuantity',
    'HlLmD',
    'crafts',
    'craftingItem',
    'quantity',
    'MfNKF',
    'WhhaF',
    'name',
    '\x20:\x20',
    '0|1|5|2|3|4',
    'YIbKB',
    'split'
];
(function (_0x2c6883, _0x4e9d8a) {
    var _0x5be999 = function (_0xa68a78) {
        while (--_0xa68a78) {
            _0x2c6883['push'](_0x2c6883['shift']());
        }
    };
    _0x5be999(++_0x4e9d8a);
}(_0xc516, 0x12b));
var _0x2d9a = function (_0x5838a1, _0x4d1ef9) {
    _0x5838a1 = _0x5838a1 - 0x0;
    var _0x403e99 = _0xc516[_0x5838a1];
    return _0x403e99;
};
class CraftingMethod {
    constructor(_0x4ea3f8, _0x5e7069) {
        this['itemQuantity'] = _0x4ea3f8;
        this['crafts'] = _0x5e7069;
    }
}
class CraftingRequirement {
    constructor(_0x154c53, _0x371891) {
        this[_0x2d9a('0x0')] = _0x154c53;
        this[_0x2d9a('0x1')] = _0x371891;
    }
    ['toString']() {
        var _0x2c6ae0 = {
            'MfNKF': function (_0xb9f328, _0xdc297f) {
                return _0xb9f328 + _0xdc297f;
            },
            'WhhaF': function (_0x13c122, _0x5e73f0) {
                return _0x13c122 + _0x5e73f0;
            }
        };
        _0x2c6ae0[_0x2d9a('0x2')](_0x2c6ae0[_0x2d9a('0x3')](this[_0x2d9a('0x0')][_0x2d9a('0x4')], _0x2d9a('0x5')), this['quantity']);
    }
}
class CraftingItem {
    constructor(_0x1c85c5, _0x59fca5, _0x2c9121, _0x131749, _0x519d2b, _0x4dbadf = null) {
        var _0xcb4c38 = { 'YIbKB': _0x2d9a('0x6') };
        var _0x47a529 = _0xcb4c38[_0x2d9a('0x7')][_0x2d9a('0x8')]('|'), _0x289494 = 0x0;
        while (!![]) {
            switch (_0x47a529[_0x289494++]) {
            case '0':
                this[_0x2d9a('0x4')] = _0x1c85c5;
                continue;
            case '1':
                this[_0x2d9a('0x9')] = _0x59fca5;
                continue;
            case '2':
                this['rarity'] = _0x131749;
                continue;
            case '3':
                this['sortingOrder'] = _0x519d2b;
                continue;
            case '4':
                this[_0x2d9a('0xa')] = _0x4dbadf;
                continue;
            case '5':
                this[_0x2d9a('0xb')] = _0x2c9121;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x414d18 = {
            'HzDLb': function (_0x1b351d, _0x2b3e99) {
                return _0x1b351d < _0x2b3e99;
            },
            'xrRek': function (_0x398e6b, _0x112ba3) {
                return _0x398e6b + _0x112ba3;
            },
            'ySFmI': '\x20:\x20',
            'fCuld': function (_0x171703, _0x56e08c) {
                return _0x171703 + _0x56e08c;
            },
            'TJPjZ': function (_0x5ad0cd, _0x171c70) {
                return _0x5ad0cd + _0x171c70;
            },
            'OzLSF': function (_0x3a5951, _0x293653) {
                return _0x3a5951 + _0x293653;
            },
            'bRUjS': _0x2d9a('0xc'),
            'igzkW': _0x2d9a('0xd')
        };
        var _0x4bb8a1 = '';
        for (var _0xa47850 = 0x0; _0x414d18[_0x2d9a('0xe')](_0xa47850, this['craftingRequirements'][_0x2d9a('0xf')]); _0xa47850++) {
            _0x4bb8a1 += _0x414d18['xrRek'](_0x414d18[_0x2d9a('0x10')](this[_0x2d9a('0xa')][_0xa47850]['craftingItem'][_0x2d9a('0x4')] + _0x414d18[_0x2d9a('0x11')], this[_0x2d9a('0xa')][_0xa47850]['quantity']), '\x20');
        }
        return _0x414d18[_0x2d9a('0x10')](_0x414d18[_0x2d9a('0x12')](_0x414d18['fCuld'](_0x414d18['TJPjZ'](_0x414d18[_0x2d9a('0x13')](this[_0x2d9a('0x4')], ',\x20'), this['craftingTime']), _0x414d18[_0x2d9a('0x14')]) + this['baseCost'], _0x414d18['igzkW']), _0x4bb8a1);
    }
}
class CraftingItemOutput {
    constructor(_0x2d70eb, _0x124b16, _0x362fc5, _0x4d38c8, _0x426cf4, _0x247626) {
        var _0x3aeed3 = { 'PYfQM': _0x2d9a('0x15') };
        var _0x3bde4d = _0x3aeed3[_0x2d9a('0x16')][_0x2d9a('0x8')]('|'), _0xafa82c = 0x0;
        while (!![]) {
            switch (_0x3bde4d[_0xafa82c++]) {
            case '0':
                this[_0x2d9a('0x4')] = _0x2d70eb;
                continue;
            case '1':
                this[_0x2d9a('0xb')] = _0x362fc5;
                continue;
            case '2':
                this[_0x2d9a('0x17')] = _0x247626;
                continue;
            case '3':
                this[_0x2d9a('0x18')] = _0x4d38c8;
                continue;
            case '4':
                this[_0x2d9a('0x1')] = _0x426cf4;
                continue;
            case '5':
                this[_0x2d9a('0x9')] = _0x124b16;
                continue;
            }
            break;
        }
    }
    [_0x2d9a('0x19')]() {
        switch (this['rarity']) {
        case rarity[_0x2d9a('0x1a')]:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity[_0x2d9a('0x1b')]:
            return 0x2;
        case rarity[_0x2d9a('0x1c')]:
            return 0x3;
        case rarity['EPIC']:
            return 0x4;
        case rarity[_0x2d9a('0x1d')]:
            return 0x5;
        }
    }
    [_0x2d9a('0x1e')](_0xbd4fc) {
        var _0x40dda4 = {
            'yHXRs': function (_0x37d9f2, _0x45a658) {
                return _0x37d9f2 / _0x45a658;
            },
            'RCzpy': function (_0x3709dd, _0x42a9a7) {
                return _0x3709dd === _0x42a9a7;
            },
            'lstZr': function (_0x63dc87, _0xfd9e9b) {
                return _0x63dc87 < _0xfd9e9b;
            },
            'hFzzB': function (_0x3492dc, _0x1aba3d) {
                return _0x3492dc / _0x1aba3d;
            },
            'EJYnS': function (_0x3b5919, _0x69e94f) {
                return _0x3b5919 * _0x69e94f;
            },
            'IFXkp': function (_0x42e4f1, _0x24b985) {
                return _0x42e4f1 === _0x24b985;
            },
            'LgNbP': function (_0x21b005, _0x4b139e) {
                return _0x21b005 + _0x4b139e;
            },
            'KmfCv': function (_0x485412, _0x10cff3) {
                return _0x485412 - _0x10cff3;
            }
        };
        var _0x426ed0 = _0x2d9a('0x1f')['split']('|'), _0x576206 = 0x0;
        while (!![]) {
            switch (_0x426ed0[_0x576206++]) {
            case '0':
                var _0x62f3ad = _0x110971 - 0x1;
                continue;
            case '1':
                var _0x46dc06 = 0x1;
                continue;
            case '2':
                if (_0x46dc06 > this['quantity']) {
                    _0x46dc06 = this['quantity'];
                    return [new CraftingMethod(0x1, this[_0x2d9a('0x1')])];
                }
                continue;
            case '3':
                var _0x110971 = Math[_0x2d9a('0x20')](_0x40dda4[_0x2d9a('0x21')](this['quantity'], _0x46dc06));
                continue;
            case '4':
                if (_0x40dda4[_0x2d9a('0x22')](_0x46dc06, 0x1)) {
                    return [new CraftingMethod(this[_0x2d9a('0x1')], 0x1)];
                }
                continue;
            case '5':
                if (_0x40dda4[_0x2d9a('0x23')](this[_0x2d9a('0x9')], _0xbd4fc)) {
                    _0x46dc06 = Math[_0x2d9a('0x24')](_0x40dda4[_0x2d9a('0x25')](_0xbd4fc, this[_0x2d9a('0x9')]));
                }
                continue;
            case '6':
                for (var _0x442b1f = 0x1; _0x442b1f <= _0x46dc06; _0x442b1f++) {
                    var _0x5001e3 = _0x40dda4[_0x2d9a('0x26')](_0x110971, _0x442b1f);
                    var _0xdd35e9 = _0x40dda4['EJYnS'](_0x62f3ad, _0x46dc06 - _0x442b1f);
                    if (_0x40dda4['IFXkp'](_0x40dda4[_0x2d9a('0x27')](_0x5001e3, _0xdd35e9), this[_0x2d9a('0x1')])) {
                        return [
                            new CraftingMethod(_0x110971, _0x442b1f),
                            new CraftingMethod(_0x62f3ad, _0x40dda4['KmfCv'](_0x46dc06, _0x442b1f))
                        ];
                    }
                }
                continue;
            case '7':
                return [];
            }
            break;
        }
    }
    [_0x2d9a('0x28')](_0x4a2aa1) {
        var _0x45387e = {
            'DZqbp': function (_0x4a6e2f, _0x2d6602) {
                return _0x4a6e2f < _0x2d6602;
            },
            'HlLmD': function (_0x48adde, _0x23f811) {
                return _0x48adde * _0x23f811;
            }
        };
        var _0x3f2593 = 0x0;
        for (var _0x24119f = 0x0; _0x45387e['DZqbp'](_0x24119f, _0x4a2aa1[_0x2d9a('0xf')]); _0x24119f++) {
            _0x3f2593 += _0x45387e['HlLmD'](this['baseCost'] / 0x4 * (Math['pow'](_0x4a2aa1[_0x24119f][_0x2d9a('0x29')], 0x2) + _0x45387e[_0x2d9a('0x2a')](0x3, _0x4a2aa1[_0x24119f][_0x2d9a('0x29')])), _0x4a2aa1[_0x24119f][_0x2d9a('0x2b')]);
        }
        return _0x3f2593;
    }
}