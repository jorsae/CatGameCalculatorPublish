var _0x50e6 = [
    'length',
    'kZvOM',
    'Jmfsb',
    'KPIAA',
    'lgVEl',
    'BWrse',
    'getRarityValue',
    'RARE',
    'EPIC',
    'getCrafts',
    'kJFCk',
    'craftingTime',
    'ceil',
    'fZNyz',
    'getItemsPerCraft',
    'CiWlZ',
    'uXCFA',
    'cksrg',
    'DBrsV',
    'bOTvw',
    'Gcnma',
    'pow',
    'EYJDh',
    'craftingItem',
    'quantity',
    'toString',
    'iTlEq',
    'name',
    '\x20:\x20',
    '3|1|2|4|0',
    'split',
    'craftingRequirements',
    'baseCost',
    'rarity',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'gZRkn'
];
(function (_0xe5ad42, _0x1f5bee) {
    var _0x53ef49 = function (_0x5a1e45) {
        while (--_0x5a1e45) {
            _0xe5ad42['push'](_0xe5ad42['shift']());
        }
    };
    _0x53ef49(++_0x1f5bee);
}(_0x50e6, 0x189));
var _0x18b8 = function (_0x42b019, _0x99300) {
    _0x42b019 = _0x42b019 - 0x0;
    var _0xf704c5 = _0x50e6[_0x42b019];
    return _0xf704c5;
};
class CraftingRequirement {
    constructor(_0x272f23, _0x200cd5) {
        this[_0x18b8('0x0')] = _0x272f23;
        this[_0x18b8('0x1')] = _0x200cd5;
    }
    [_0x18b8('0x2')]() {
        var _0x3f98af = {
            'QmxIq': function (_0x3ad04c, _0x331f4e) {
                return _0x3ad04c + _0x331f4e;
            },
            'iTlEq': function (_0x4148c3, _0x246e19) {
                return _0x4148c3 + _0x246e19;
            }
        };
        _0x3f98af['QmxIq'](_0x3f98af[_0x18b8('0x3')](this[_0x18b8('0x0')][_0x18b8('0x4')], _0x18b8('0x5')), this[_0x18b8('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x3810ac, _0x1e84bf, _0x2a7add, _0x3d701f, _0x20f37a = null) {
        var _0x59e76a = _0x18b8('0x6')[_0x18b8('0x7')]('|'), _0x34b3bd = 0x0;
        while (!![]) {
            switch (_0x59e76a[_0x34b3bd++]) {
            case '0':
                this[_0x18b8('0x8')] = _0x20f37a;
                continue;
            case '1':
                this['craftingTime'] = _0x1e84bf;
                continue;
            case '2':
                this[_0x18b8('0x9')] = _0x2a7add;
                continue;
            case '3':
                this['name'] = _0x3810ac;
                continue;
            case '4':
                this[_0x18b8('0xa')] = _0x3d701f;
                continue;
            }
            break;
        }
    }
    [_0x18b8('0x2')]() {
        var _0x379353 = {
            'gZRkn': function (_0x3dd311, _0x57920f) {
                return _0x3dd311 < _0x57920f;
            },
            'kZvOM': function (_0x235280, _0xd57d6a) {
                return _0x235280 + _0xd57d6a;
            },
            'Jmfsb': function (_0x29a056, _0xc7cade) {
                return _0x29a056 + _0xc7cade;
            },
            'KPIAA': function (_0x5600ba, _0x33f58a) {
                return _0x5600ba + _0x33f58a;
            },
            'RonMM': _0x18b8('0x5'),
            'lgVEl': function (_0x441137, _0x404340) {
                return _0x441137 + _0x404340;
            },
            'kVZCs': function (_0x3e5b2d, _0x29f4aa) {
                return _0x3e5b2d + _0x29f4aa;
            },
            'qcXrN': function (_0x4e65d0, _0x2c75bd) {
                return _0x4e65d0 + _0x2c75bd;
            },
            'snJkq': _0x18b8('0xb'),
            'BWrse': _0x18b8('0xc')
        };
        var _0x490e19 = '';
        for (var _0x2b9b5d = 0x0; _0x379353[_0x18b8('0xd')](_0x2b9b5d, this[_0x18b8('0x8')][_0x18b8('0xe')]); _0x2b9b5d++) {
            _0x490e19 += _0x379353[_0x18b8('0xf')](_0x379353[_0x18b8('0x10')](_0x379353[_0x18b8('0x11')](this[_0x18b8('0x8')][_0x2b9b5d][_0x18b8('0x0')][_0x18b8('0x4')], _0x379353['RonMM']), this[_0x18b8('0x8')][_0x2b9b5d][_0x18b8('0x1')]), '\x20');
        }
        return _0x379353[_0x18b8('0x12')](_0x379353[_0x18b8('0x12')](_0x379353['kVZCs'](_0x379353['qcXrN'](this[_0x18b8('0x4')], ',\x20'), this['craftingTime']), _0x379353['snJkq']) + this[_0x18b8('0x9')], _0x379353[_0x18b8('0x13')]) + _0x490e19;
    }
}
class CraftingItemOutput {
    constructor(_0x20776a, _0x53b0d7, _0x132598, _0x295019, _0x1f517d) {
        this[_0x18b8('0x4')] = _0x20776a;
        this['craftingTime'] = _0x53b0d7;
        this['baseCost'] = _0x132598;
        this[_0x18b8('0xa')] = _0x295019;
        this[_0x18b8('0x1')] = _0x1f517d;
    }
    [_0x18b8('0x14')]() {
        switch (this[_0x18b8('0xa')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x18b8('0x15')]:
            return 0x3;
        case rarity[_0x18b8('0x16')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x18b8('0x17')](_0x20f341) {
        var _0x4bf8b5 = {
            'kJFCk': function (_0x1c26bc, _0x3808a5) {
                return _0x1c26bc < _0x3808a5;
            },
            'fZNyz': function (_0x42ea8e, _0x57eb27) {
                return _0x42ea8e / _0x57eb27;
            },
            'LMZML': function (_0x4e5e9f, _0x43fbfa) {
                return _0x4e5e9f > _0x43fbfa;
            }
        };
        var _0x23263c = 0x1;
        if (_0x4bf8b5[_0x18b8('0x18')](this[_0x18b8('0x19')], _0x20f341)) {
            _0x23263c = Math[_0x18b8('0x1a')](_0x4bf8b5[_0x18b8('0x1b')](_0x20f341, this[_0x18b8('0x19')]));
        }
        if (_0x4bf8b5['LMZML'](_0x23263c, this[_0x18b8('0x1')])) {
            return this[_0x18b8('0x1')];
        }
        return _0x23263c;
    }
    [_0x18b8('0x1c')](_0x3f028d) {
        var _0x54d007 = {
            'CiWlZ': function (_0x505653, _0x3c0a34) {
                return _0x505653 < _0x3c0a34;
            },
            'uXCFA': function (_0x130582, _0x1d3fd8) {
                return _0x130582 / _0x1d3fd8;
            },
            'cksrg': function (_0x2ee6a2, _0x2ebf4c) {
                return _0x2ee6a2 > _0x2ebf4c;
            },
            'DBrsV': function (_0x53054d, _0x15c4e0) {
                return _0x53054d / _0x15c4e0;
            }
        };
        var _0x329008 = 0x1;
        if (_0x54d007[_0x18b8('0x1d')](this[_0x18b8('0x19')], _0x3f028d)) {
            _0x329008 = Math[_0x18b8('0x1a')](_0x54d007[_0x18b8('0x1e')](_0x3f028d, this[_0x18b8('0x19')]));
        }
        if (_0x54d007[_0x18b8('0x1f')](_0x329008, this['quantity'])) {
            _0x329008 = this[_0x18b8('0x1')];
        }
        return Math[_0x18b8('0x1a')](_0x54d007[_0x18b8('0x20')](this[_0x18b8('0x1')], _0x329008));
    }
    ['getCost'](_0xcfe275) {
        var _0xdf75b7 = {
            'bOTvw': function (_0xdf3912, _0x41f305) {
                return _0xdf3912 * _0x41f305;
            },
            'EYJDh': function (_0x95d12, _0x3115e6) {
                return _0x95d12 * _0x3115e6;
            },
            'Gcnma': function (_0x41e293, _0x197906) {
                return _0x41e293 / _0x197906;
            },
            'FoeNK': function (_0x3e4859, _0xc717bb) {
                return _0x3e4859 + _0xc717bb;
            }
        };
        var _0x3d7fe0 = this[_0x18b8('0x1c')](_0xcfe275);
        var _0x52b335 = this[_0x18b8('0x17')](_0xcfe275);
        return _0xdf75b7[_0x18b8('0x21')](_0xdf75b7['EYJDh'](_0xdf75b7[_0x18b8('0x22')](this['baseCost'], 0x4), _0xdf75b7['FoeNK'](Math[_0x18b8('0x23')](_0x3d7fe0, 0x2), _0xdf75b7[_0x18b8('0x24')](0x3, _0x3d7fe0))), _0x52b335);
    }
}