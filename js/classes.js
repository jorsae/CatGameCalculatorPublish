var _0x26aa = [
    'split',
    'baseCost',
    'craftingRequirements',
    'craftingTime',
    'toString',
    'length',
    'cITTs',
    'name',
    '\x20:\x20',
    'oAjcC',
    'minutes,\x20',
    'pMqBI',
    '2|4|1|3|0',
    'YWAle',
    'getRarityValue',
    'rarity',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'ceil',
    'getItemsPerCraft',
    'feLAS',
    'getCost',
    'FWFjd',
    'nhzXN',
    'pow',
    'Wzpwz',
    'quantity',
    'JpbJa',
    'craftingItem',
    'wvmkO',
    '0|4|1|3|2',
    'LcwiJ'
];
(function (_0x3265fb, _0x1f6f9a) {
    var _0x10d29b = function (_0x132ef9) {
        while (--_0x132ef9) {
            _0x3265fb['push'](_0x3265fb['shift']());
        }
    };
    _0x10d29b(++_0x1f6f9a);
}(_0x26aa, 0x8a));
var _0x44ee = function (_0x1795af, _0xaf0498) {
    _0x1795af = _0x1795af - 0x0;
    var _0x17014e = _0x26aa[_0x1795af];
    return _0x17014e;
};
class CraftingRequirement {
    constructor(_0x4b21fb, _0x4b1831) {
        this['craftingItem'] = _0x4b21fb;
        this[_0x44ee('0x0')] = _0x4b1831;
    }
    ['toString']() {
        var _0x3fa50a = {
            'JpbJa': function (_0x1c7de8, _0x5d575d) {
                return _0x1c7de8 + _0x5d575d;
            },
            'wvmkO': '\x20:\x20'
        };
        _0x3fa50a['JpbJa'](_0x3fa50a[_0x44ee('0x1')](this[_0x44ee('0x2')]['name'], _0x3fa50a[_0x44ee('0x3')]), this[_0x44ee('0x0')]);
    }
}
class CraftingItem {
    constructor(_0x511147, _0x50b2d3, _0x43a18b, _0x34d740, _0x2f2efe = null) {
        var _0x192636 = { 'LcwiJ': _0x44ee('0x4') };
        var _0x3461b0 = _0x192636[_0x44ee('0x5')][_0x44ee('0x6')]('|'), _0x1dee0b = 0x0;
        while (!![]) {
            switch (_0x3461b0[_0x1dee0b++]) {
            case '0':
                this['name'] = _0x511147;
                continue;
            case '1':
                this[_0x44ee('0x7')] = _0x43a18b;
                continue;
            case '2':
                this[_0x44ee('0x8')] = _0x2f2efe;
                continue;
            case '3':
                this['rarity'] = _0x34d740;
                continue;
            case '4':
                this[_0x44ee('0x9')] = _0x50b2d3;
                continue;
            }
            break;
        }
    }
    [_0x44ee('0xa')]() {
        var _0x122b9f = {
            'diXzq': function (_0x1dbfec, _0x4f182b) {
                return _0x1dbfec < _0x4f182b;
            },
            'cITTs': function (_0x49ec93, _0x22739c) {
                return _0x49ec93 + _0x22739c;
            },
            'oAjcC': function (_0x67ea0f, _0x2c44bd) {
                return _0x67ea0f + _0x2c44bd;
            },
            'pMqBI': 'coins.\x20Crafting\x20Requirement:\x20'
        };
        var _0x4d947e = '';
        for (var _0x13c962 = 0x0; _0x122b9f['diXzq'](_0x13c962, this['craftingRequirements'][_0x44ee('0xb')]); _0x13c962++) {
            _0x4d947e += _0x122b9f[_0x44ee('0xc')](_0x122b9f[_0x44ee('0xc')](this[_0x44ee('0x8')][_0x13c962][_0x44ee('0x2')][_0x44ee('0xd')], _0x44ee('0xe')) + this[_0x44ee('0x8')][_0x13c962][_0x44ee('0x0')], '\x20');
        }
        return _0x122b9f[_0x44ee('0xc')](_0x122b9f[_0x44ee('0xc')](_0x122b9f[_0x44ee('0xc')](_0x122b9f[_0x44ee('0xc')](_0x122b9f[_0x44ee('0xf')](this[_0x44ee('0xd')], ',\x20'), this['craftingTime']), _0x44ee('0x10')) + this[_0x44ee('0x7')], _0x122b9f[_0x44ee('0x11')]), _0x4d947e);
    }
}
class CraftingItemOutput {
    constructor(_0x1ca711, _0x12ba4e, _0x1ae440, _0x5201a8, _0x397657) {
        var _0x2521be = { 'YWAle': _0x44ee('0x12') };
        var _0x3506c6 = _0x2521be[_0x44ee('0x13')][_0x44ee('0x6')]('|'), _0x40f84a = 0x0;
        while (!![]) {
            switch (_0x3506c6[_0x40f84a++]) {
            case '0':
                this['quantity'] = _0x397657;
                continue;
            case '1':
                this[_0x44ee('0x7')] = _0x1ae440;
                continue;
            case '2':
                this[_0x44ee('0xd')] = _0x1ca711;
                continue;
            case '3':
                this['rarity'] = _0x5201a8;
                continue;
            case '4':
                this[_0x44ee('0x9')] = _0x12ba4e;
                continue;
            }
            break;
        }
    }
    [_0x44ee('0x14')]() {
        switch (this[_0x44ee('0x15')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity[_0x44ee('0x16')]:
            return 0x1;
        default:
        case rarity[_0x44ee('0x17')]:
            return 0x2;
        case rarity[_0x44ee('0x18')]:
            return 0x3;
        case rarity[_0x44ee('0x19')]:
            return 0x4;
        case rarity[_0x44ee('0x1a')]:
            return 0x5;
        }
    }
    [_0x44ee('0x1b')](_0x5cfd7d) {
        var _0x2dd9f1 = {
            'Bkvew': function (_0x373934, _0x4f8268) {
                return _0x373934 / _0x4f8268;
            }
        };
        var _0x2d9306 = 0x1;
        if (this['craftingTime'] < _0x5cfd7d) {
            _0x2d9306 = Math[_0x44ee('0x1c')](_0x2dd9f1['Bkvew'](_0x5cfd7d, this[_0x44ee('0x9')]));
        }
        if (_0x2d9306 > this[_0x44ee('0x0')]) {
            return this['quantity'];
        }
        return _0x2d9306;
    }
    [_0x44ee('0x1d')](_0x48d4d3) {
        var _0x270396 = {
            'bagNS': function (_0x169379, _0x3c4510) {
                return _0x169379 < _0x3c4510;
            },
            'feLAS': function (_0x325606, _0x283a4e) {
                return _0x325606 / _0x283a4e;
            },
            'fKiJl': function (_0x1fce9d, _0x464a67) {
                return _0x1fce9d > _0x464a67;
            }
        };
        var _0x5d259b = 0x1;
        if (_0x270396['bagNS'](this[_0x44ee('0x9')], _0x48d4d3)) {
            _0x5d259b = Math[_0x44ee('0x1c')](_0x270396[_0x44ee('0x1e')](_0x48d4d3, this[_0x44ee('0x9')]));
        }
        if (_0x270396['fKiJl'](_0x5d259b, this[_0x44ee('0x0')])) {
            _0x5d259b = this[_0x44ee('0x0')];
        }
        return Math[_0x44ee('0x1c')](_0x270396[_0x44ee('0x1e')](this[_0x44ee('0x0')], _0x5d259b));
    }
    [_0x44ee('0x1f')](_0x49e8e3) {
        var _0x347659 = {
            'wBHsc': function (_0x314ecf, _0x1857ee) {
                return _0x314ecf * _0x1857ee;
            },
            'FWFjd': function (_0x57471c, _0x2c13cb) {
                return _0x57471c / _0x2c13cb;
            },
            'nhzXN': function (_0x478f2e, _0x3c6248) {
                return _0x478f2e + _0x3c6248;
            },
            'Wzpwz': function (_0x417ee0, _0x4f9c2f) {
                return _0x417ee0 * _0x4f9c2f;
            }
        };
        var _0x3180db = this[_0x44ee('0x1d')](_0x49e8e3);
        var _0x2b7c8f = this[_0x44ee('0x1b')](_0x49e8e3);
        return _0x347659['wBHsc'](_0x347659['wBHsc'](_0x347659[_0x44ee('0x20')](this[_0x44ee('0x7')], 0x4), _0x347659[_0x44ee('0x21')](Math[_0x44ee('0x22')](_0x3180db, 0x2), _0x347659[_0x44ee('0x23')](0x3, _0x3180db))), _0x2b7c8f);
    }
}