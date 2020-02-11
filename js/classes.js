var _0x152a = [
    'IamhS',
    '0|5|3|4|2|1',
    'DniCL',
    'sortingOrder',
    'baseCost',
    'coins.\x20Crafting\x20Requirement:\x20',
    'ooIoh',
    'length',
    'craftingRequirements',
    'aLnHl',
    'cYPQS',
    'craftingTime',
    'minutes,\x20',
    'iecjL',
    'split',
    'rarity',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'EPIC',
    'LEGENDARY',
    'getCraftingMethod',
    '7|2|5|4|3|0|1|6',
    'EAwJP',
    'tbNXl',
    'rpOqZ',
    'GOvMK',
    'PUsgM',
    'TexpT',
    'sZRJz',
    'floor',
    'ceil',
    'kXuKd',
    'oyvmV',
    'OBcrD',
    'getCost',
    'coLcI',
    'fDQIW',
    'pow',
    'itemQuantity',
    'crafts',
    'craftingItem',
    'quantity',
    'toString',
    '\x20:\x20',
    'MQlvd',
    'name'
];
(function (_0x219257, _0xe8e126) {
    var _0x260bf1 = function (_0x2a71b4) {
        while (--_0x2a71b4) {
            _0x219257['push'](_0x219257['shift']());
        }
    };
    _0x260bf1(++_0xe8e126);
}(_0x152a, 0xe8));
var _0x4c41 = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x152a[_0x1a026c];
    return _0x2d8f05;
};
class CraftingMethod {
    constructor(_0x701ee6, _0x652d43) {
        this[_0x4c41('0x0')] = _0x701ee6;
        this[_0x4c41('0x1')] = _0x652d43;
    }
}
class CraftingRequirement {
    constructor(_0x4c071b, _0x32cad3) {
        this[_0x4c41('0x2')] = _0x4c071b;
        this[_0x4c41('0x3')] = _0x32cad3;
    }
    [_0x4c41('0x4')]() {
        var _0x5aaa02 = {
            'MQlvd': function (_0x5cd4d3, _0x273f8e) {
                return _0x5cd4d3 + _0x273f8e;
            },
            'LrgGy': function (_0xe5020d, _0x47de72) {
                return _0xe5020d + _0x47de72;
            },
            'IamhS': _0x4c41('0x5')
        };
        _0x5aaa02[_0x4c41('0x6')](_0x5aaa02['LrgGy'](this['craftingItem'][_0x4c41('0x7')], _0x5aaa02[_0x4c41('0x8')]), this[_0x4c41('0x3')]);
    }
}
class CraftingItem {
    constructor(_0x19207b, _0x1c9ef0, _0x2bbdd3, _0x51adb0, _0x513fb4, _0x22014f = null) {
        var _0x2541cf = { 'DniCL': _0x4c41('0x9') };
        var _0x5e45a3 = _0x2541cf[_0x4c41('0xa')]['split']('|'), _0x4f3aac = 0x0;
        while (!![]) {
            switch (_0x5e45a3[_0x4f3aac++]) {
            case '0':
                this[_0x4c41('0x7')] = _0x19207b;
                continue;
            case '1':
                this['craftingRequirements'] = _0x22014f;
                continue;
            case '2':
                this[_0x4c41('0xb')] = _0x513fb4;
                continue;
            case '3':
                this[_0x4c41('0xc')] = _0x2bbdd3;
                continue;
            case '4':
                this['rarity'] = _0x51adb0;
                continue;
            case '5':
                this['craftingTime'] = _0x1c9ef0;
                continue;
            }
            break;
        }
    }
    [_0x4c41('0x4')]() {
        var _0x4260f7 = {
            'ooIoh': function (_0x441956, _0x24f61e) {
                return _0x441956 < _0x24f61e;
            },
            'YTUWK': function (_0x559f0c, _0x44509c) {
                return _0x559f0c + _0x44509c;
            },
            'WvQSB': function (_0x239db5, _0x3a8b2e) {
                return _0x239db5 + _0x3a8b2e;
            },
            'aLnHl': function (_0x518a5c, _0x372a9b) {
                return _0x518a5c + _0x372a9b;
            },
            'cYPQS': function (_0x3a9cf9, _0x48f354) {
                return _0x3a9cf9 + _0x48f354;
            },
            'eJocV': _0x4c41('0xd')
        };
        var _0x3fba2f = '';
        for (var _0xc44e20 = 0x0; _0x4260f7[_0x4c41('0xe')](_0xc44e20, this['craftingRequirements'][_0x4c41('0xf')]); _0xc44e20++) {
            _0x3fba2f += _0x4260f7['YTUWK'](_0x4260f7['WvQSB'](this[_0x4c41('0x10')][_0xc44e20][_0x4c41('0x2')][_0x4c41('0x7')], _0x4c41('0x5')), this['craftingRequirements'][_0xc44e20]['quantity']) + '\x20';
        }
        return _0x4260f7[_0x4c41('0x11')](_0x4260f7[_0x4c41('0x11')](_0x4260f7[_0x4c41('0x12')](_0x4260f7[_0x4c41('0x12')](this[_0x4c41('0x7')], ',\x20'), this[_0x4c41('0x13')]), _0x4c41('0x14')), this[_0x4c41('0xc')]) + _0x4260f7['eJocV'] + _0x3fba2f;
    }
}
class CraftingItemOutput {
    constructor(_0x11ce67, _0x3a91fc, _0x4f3506, _0x53f5a0, _0x93c906, _0x39be0b) {
        var _0x3a9986 = { 'iecjL': '1|4|2|3|5|0' };
        var _0x24463e = _0x3a9986[_0x4c41('0x15')][_0x4c41('0x16')]('|'), _0x4b2cd0 = 0x0;
        while (!![]) {
            switch (_0x24463e[_0x4b2cd0++]) {
            case '0':
                this[_0x4c41('0xb')] = _0x39be0b;
                continue;
            case '1':
                this[_0x4c41('0x7')] = _0x11ce67;
                continue;
            case '2':
                this[_0x4c41('0xc')] = _0x4f3506;
                continue;
            case '3':
                this[_0x4c41('0x17')] = _0x53f5a0;
                continue;
            case '4':
                this[_0x4c41('0x13')] = _0x3a91fc;
                continue;
            case '5':
                this[_0x4c41('0x3')] = _0x93c906;
                continue;
            }
            break;
        }
    }
    [_0x4c41('0x18')]() {
        switch (this[_0x4c41('0x17')]) {
        case rarity[_0x4c41('0x19')]:
            return 0x0;
        case rarity[_0x4c41('0x1a')]:
            return 0x1;
        default:
        case rarity[_0x4c41('0x1b')]:
            return 0x2;
        case rarity['RARE']:
            return 0x3;
        case rarity[_0x4c41('0x1c')]:
            return 0x4;
        case rarity[_0x4c41('0x1d')]:
            return 0x5;
        }
    }
    [_0x4c41('0x1e')](_0x3941e8) {
        var _0x1fc6c3 = {
            'EAwJP': _0x4c41('0x1f'),
            'tbNXl': function (_0x17abc2, _0xa6be09) {
                return _0x17abc2 - _0xa6be09;
            },
            'rpOqZ': function (_0x50b228, _0x4c0655) {
                return _0x50b228 * _0x4c0655;
            },
            'GOvMK': function (_0x589ed6, _0xb80d30) {
                return _0x589ed6 - _0xb80d30;
            },
            'PUsgM': function (_0x326e3d, _0x47c7c1) {
                return _0x326e3d === _0x47c7c1;
            },
            'wPqyB': function (_0x5c53b8, _0x21956a) {
                return _0x5c53b8 + _0x21956a;
            },
            'TexpT': function (_0x110863, _0x3bac23) {
                return _0x110863 - _0x3bac23;
            },
            'sZRJz': function (_0x1f0e9a, _0x5134b6) {
                return _0x1f0e9a < _0x5134b6;
            },
            'kXuKd': function (_0x43dd3d, _0x415a7b) {
                return _0x43dd3d / _0x415a7b;
            },
            'oyvmV': function (_0x3e0d91, _0x51657a) {
                return _0x3e0d91 === _0x51657a;
            },
            'OBcrD': function (_0x1b343c, _0xb76cf) {
                return _0x1b343c > _0xb76cf;
            }
        };
        var _0x598e7e = _0x1fc6c3[_0x4c41('0x20')][_0x4c41('0x16')]('|'), _0x5a959a = 0x0;
        while (!![]) {
            switch (_0x598e7e[_0x5a959a++]) {
            case '0':
                var _0x34b0ba = _0x1fc6c3[_0x4c41('0x21')](_0x1e6b4e, 0x1);
                continue;
            case '1':
                for (var _0x569ca7 = 0x1; _0x569ca7 <= _0x5697ca; _0x569ca7++) {
                    var _0x515132 = _0x1fc6c3[_0x4c41('0x22')](_0x1e6b4e, _0x569ca7);
                    var _0x2d449f = _0x34b0ba * _0x1fc6c3[_0x4c41('0x23')](_0x5697ca, _0x569ca7);
                    if (_0x1fc6c3[_0x4c41('0x24')](_0x1fc6c3['wPqyB'](_0x515132, _0x2d449f), this['quantity'])) {
                        return [
                            new CraftingMethod(_0x1e6b4e, _0x569ca7),
                            new CraftingMethod(_0x34b0ba, _0x1fc6c3[_0x4c41('0x25')](_0x5697ca, _0x569ca7))
                        ];
                    }
                }
                continue;
            case '2':
                if (_0x1fc6c3[_0x4c41('0x26')](this[_0x4c41('0x13')], _0x3941e8)) {
                    _0x5697ca = Math[_0x4c41('0x27')](_0x3941e8 / this[_0x4c41('0x13')]);
                }
                continue;
            case '3':
                var _0x1e6b4e = Math[_0x4c41('0x28')](_0x1fc6c3[_0x4c41('0x29')](this[_0x4c41('0x3')], _0x5697ca));
                continue;
            case '4':
                if (_0x1fc6c3[_0x4c41('0x2a')](_0x5697ca, 0x1)) {
                    return [new CraftingMethod(this[_0x4c41('0x3')], 0x1)];
                }
                continue;
            case '5':
                if (_0x1fc6c3[_0x4c41('0x2b')](_0x5697ca, this[_0x4c41('0x3')])) {
                    _0x5697ca = this[_0x4c41('0x3')];
                    return [new CraftingMethod(0x1, this['quantity'])];
                }
                continue;
            case '6':
                return [];
            case '7':
                var _0x5697ca = 0x1;
                continue;
            }
            break;
        }
    }
    [_0x4c41('0x2c')](_0x4bfaba) {
        var _0x354e75 = {
            'coLcI': function (_0x2f2ce0, _0x1ad05a) {
                return _0x2f2ce0 < _0x1ad05a;
            },
            'fDQIW': function (_0x410637, _0x49903a) {
                return _0x410637 * _0x49903a;
            }
        };
        var _0x267f78 = 0x0;
        for (var _0x2b1c33 = 0x0; _0x354e75[_0x4c41('0x2d')](_0x2b1c33, _0x4bfaba[_0x4c41('0xf')]); _0x2b1c33++) {
            _0x267f78 += _0x354e75[_0x4c41('0x2e')](this[_0x4c41('0xc')] / 0x4, Math[_0x4c41('0x2f')](_0x4bfaba[_0x2b1c33]['itemQuantity'], 0x2) + 0x3 * _0x4bfaba[_0x2b1c33][_0x4c41('0x0')]) * _0x4bfaba[_0x2b1c33][_0x4c41('0x1')];
        }
        return _0x267f78;
    }
}