var _0x5084 = [
    'Xlpxz',
    'length',
    'gzThR',
    'lKboF',
    'xcCrV',
    'Dgrsf',
    'DDrvd',
    'baseCost',
    'getRarityValue',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'ygKZH',
    'ceil',
    'getItemsPerCraft',
    'ujAat',
    'tJVqO',
    'getCost',
    'getCrafts',
    'POnzn',
    'jGjUz',
    'craftingItem',
    'quantity',
    'toString',
    '\x20:\x20',
    'mtHkv',
    'ysUPh',
    'name',
    'xaJMt',
    '2|4|3|0|1',
    'OAXdh',
    'split',
    'rarity',
    'craftingRequirements',
    'craftingTime'
];
(function (_0x4bebed, _0x5c52df) {
    var _0x3037f6 = function (_0x3dff9f) {
        while (--_0x3dff9f) {
            _0x4bebed['push'](_0x4bebed['shift']());
        }
    };
    _0x3037f6(++_0x5c52df);
}(_0x5084, 0xf5));
var _0x3d1c = function (_0x11db75, _0x8c7ee4) {
    _0x11db75 = _0x11db75 - 0x0;
    var _0x325219 = _0x5084[_0x11db75];
    return _0x325219;
};
class CraftingRequirement {
    constructor(_0x29357c, _0x109432) {
        this[_0x3d1c('0x0')] = _0x29357c;
        this[_0x3d1c('0x1')] = _0x109432;
    }
    [_0x3d1c('0x2')]() {
        var _0x142e57 = {
            'mtHkv': function (_0x4fc313, _0x55f3bd) {
                return _0x4fc313 + _0x55f3bd;
            },
            'ysUPh': function (_0x4b2854, _0x3fc458) {
                return _0x4b2854 + _0x3fc458;
            },
            'xaJMt': _0x3d1c('0x3')
        };
        _0x142e57[_0x3d1c('0x4')](_0x142e57[_0x3d1c('0x5')](this[_0x3d1c('0x0')][_0x3d1c('0x6')], _0x142e57[_0x3d1c('0x7')]), this[_0x3d1c('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x1b5fa9, _0x585b6a, _0x2e75d3, _0x4a0c43, _0x34258f = null) {
        var _0x2ec8a5 = { 'OAXdh': _0x3d1c('0x8') };
        var _0x187c0e = _0x2ec8a5[_0x3d1c('0x9')][_0x3d1c('0xa')]('|'), _0x18b121 = 0x0;
        while (!![]) {
            switch (_0x187c0e[_0x18b121++]) {
            case '0':
                this[_0x3d1c('0xb')] = _0x4a0c43;
                continue;
            case '1':
                this[_0x3d1c('0xc')] = _0x34258f;
                continue;
            case '2':
                this[_0x3d1c('0x6')] = _0x1b5fa9;
                continue;
            case '3':
                this['baseCost'] = _0x2e75d3;
                continue;
            case '4':
                this[_0x3d1c('0xd')] = _0x585b6a;
                continue;
            }
            break;
        }
    }
    [_0x3d1c('0x2')]() {
        var _0x40bc96 = {
            'Xlpxz': function (_0x2e01b3, _0x292ffe) {
                return _0x2e01b3 < _0x292ffe;
            },
            'qaOLG': function (_0x41228f, _0xbc57fc) {
                return _0x41228f + _0xbc57fc;
            },
            'gzThR': function (_0x385108, _0x2d2493) {
                return _0x385108 + _0x2d2493;
            },
            'lKboF': '\x20:\x20',
            'xcCrV': function (_0x5f31b3, _0x9a8aa3) {
                return _0x5f31b3 + _0x9a8aa3;
            },
            'Dgrsf': function (_0x29f7bd, _0x59583f) {
                return _0x29f7bd + _0x59583f;
            },
            'DDrvd': 'minutes,\x20',
            'otHxk': 'coins.\x20Crafting\x20Requirement:\x20'
        };
        var _0x46e7e6 = '';
        for (var _0x3d88ce = 0x0; _0x40bc96[_0x3d1c('0xe')](_0x3d88ce, this['craftingRequirements'][_0x3d1c('0xf')]); _0x3d88ce++) {
            _0x46e7e6 += _0x40bc96['qaOLG'](_0x40bc96[_0x3d1c('0x10')](this[_0x3d1c('0xc')][_0x3d88ce]['craftingItem'][_0x3d1c('0x6')], _0x40bc96[_0x3d1c('0x11')]), this['craftingRequirements'][_0x3d88ce]['quantity']) + '\x20';
        }
        return _0x40bc96[_0x3d1c('0x10')](_0x40bc96[_0x3d1c('0x10')](_0x40bc96[_0x3d1c('0x10')](_0x40bc96[_0x3d1c('0x12')](_0x40bc96[_0x3d1c('0x13')](_0x40bc96[_0x3d1c('0x13')](this[_0x3d1c('0x6')], ',\x20'), this['craftingTime']), _0x40bc96[_0x3d1c('0x14')]), this[_0x3d1c('0x15')]), _0x40bc96['otHxk']), _0x46e7e6);
    }
}
class CraftingItemOutput {
    constructor(_0x1248bc, _0x1e92e0, _0x4b8c78, _0x5d066b, _0x3a0bd1) {
        this[_0x3d1c('0x6')] = _0x1248bc;
        this['craftingTime'] = _0x1e92e0;
        this[_0x3d1c('0x15')] = _0x4b8c78;
        this[_0x3d1c('0xb')] = _0x5d066b;
        this[_0x3d1c('0x1')] = _0x3a0bd1;
    }
    [_0x3d1c('0x16')]() {
        switch (this['rarity']) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity[_0x3d1c('0x17')]:
            return 0x1;
        default:
        case rarity[_0x3d1c('0x18')]:
            return 0x2;
        case rarity[_0x3d1c('0x19')]:
            return 0x3;
        case rarity[_0x3d1c('0x1a')]:
            return 0x4;
        case rarity[_0x3d1c('0x1b')]:
            return 0x5;
        }
    }
    ['getCrafts'](_0x1cc19e) {
        var _0x19e6d9 = {
            'ygKZH': function (_0x2c8ef7, _0x22f62f) {
                return _0x2c8ef7 < _0x22f62f;
            },
            'ZlNCc': function (_0x587bc5, _0x296eac) {
                return _0x587bc5 > _0x296eac;
            }
        };
        var _0x96e88f = 0x1;
        if (_0x19e6d9[_0x3d1c('0x1c')](this[_0x3d1c('0xd')], _0x1cc19e)) {
            _0x96e88f = Math[_0x3d1c('0x1d')](_0x1cc19e / this['craftingTime']);
        }
        if (_0x19e6d9['ZlNCc'](_0x96e88f, this['quantity'])) {
            return this[_0x3d1c('0x1')];
        }
        return _0x96e88f;
    }
    [_0x3d1c('0x1e')](_0x589910) {
        var _0x4047fd = {
            'ujAat': function (_0x28dd90, _0x3a0be6) {
                return _0x28dd90 < _0x3a0be6;
            },
            'tJVqO': function (_0xa95009, _0x47ade4) {
                return _0xa95009 > _0x47ade4;
            }
        };
        var _0x31f093 = 0x1;
        if (_0x4047fd[_0x3d1c('0x1f')](this[_0x3d1c('0xd')], _0x589910)) {
            _0x31f093 = Math[_0x3d1c('0x1d')](_0x589910 / this[_0x3d1c('0xd')]);
        }
        if (_0x4047fd[_0x3d1c('0x20')](_0x31f093, this[_0x3d1c('0x1')])) {
            _0x31f093 = this[_0x3d1c('0x1')];
        }
        return Math[_0x3d1c('0x1d')](this[_0x3d1c('0x1')] / _0x31f093);
    }
    [_0x3d1c('0x21')](_0xac5a89) {
        var _0x59fe15 = {
            'BtvgL': function (_0x2712f4, _0x2391f5) {
                return _0x2712f4 * _0x2391f5;
            },
            'POnzn': function (_0x4f7ae8, _0x23744f) {
                return _0x4f7ae8 * _0x23744f;
            },
            'HxwKp': function (_0x4767cd, _0x1ce233) {
                return _0x4767cd / _0x1ce233;
            },
            'jGjUz': function (_0x4f49cc, _0xb7da6a) {
                return _0x4f49cc + _0xb7da6a;
            },
            'cMewe': function (_0x364c71, _0x1a20d2) {
                return _0x364c71 * _0x1a20d2;
            }
        };
        var _0x24c7c1 = this[_0x3d1c('0x1e')](_0xac5a89);
        var _0x2e07e9 = this[_0x3d1c('0x22')](_0xac5a89);
        return _0x59fe15['BtvgL'](_0x59fe15[_0x3d1c('0x23')](_0x59fe15['HxwKp'](this['baseCost'], 0x4), _0x59fe15[_0x3d1c('0x24')](Math['pow'](_0x24c7c1, 0x2), _0x59fe15['cMewe'](0x3, _0x24c7c1))), _0x2e07e9);
    }
}