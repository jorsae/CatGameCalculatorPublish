var _0x6e93 = [
    'zPRSw',
    'getCost',
    'naWed',
    'MTXnz',
    'KLytb',
    'pow',
    'craftingItem',
    'quantity',
    'toString',
    'jAeFN',
    'name',
    '\x20:\x20',
    '0|3|1|4|2',
    'lWGbx',
    'split',
    'baseCost',
    'craftingRequirements',
    'rarity',
    'rNrud',
    'oXcJA',
    'RWJcX',
    'kEoDn',
    'hmSZn',
    'craftingTime',
    'gKdpE',
    'INoXf',
    '0|3|4|2|1',
    'getRarityValue',
    'RARE',
    'EPIC',
    'getCrafts',
    'ikCYv',
    'FYxKW',
    'ceil',
    'UzkYD'
];
(function (_0xe3a287, _0x4e7980) {
    var _0x490852 = function (_0x4cf911) {
        while (--_0x4cf911) {
            _0xe3a287['push'](_0xe3a287['shift']());
        }
    };
    _0x490852(++_0x4e7980);
}(_0x6e93, 0x187));
var _0x4db9 = function (_0x4cdcdf, _0x495060) {
    _0x4cdcdf = _0x4cdcdf - 0x0;
    var _0x4b315c = _0x6e93[_0x4cdcdf];
    return _0x4b315c;
};
class CraftingRequirement {
    constructor(_0x1c4c25, _0x6b5615) {
        this[_0x4db9('0x0')] = _0x1c4c25;
        this[_0x4db9('0x1')] = _0x6b5615;
    }
    [_0x4db9('0x2')]() {
        var _0x52eef5 = {
            'jAeFN': function (_0x107d33, _0xcf9e51) {
                return _0x107d33 + _0xcf9e51;
            }
        };
        _0x52eef5[_0x4db9('0x3')](_0x52eef5[_0x4db9('0x3')](this['craftingItem'][_0x4db9('0x4')], _0x4db9('0x5')), this[_0x4db9('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x53a067, _0x541f99, _0x5ccd25, _0x235dae, _0x2c5eac = null) {
        var _0x5d2aeb = { 'lWGbx': _0x4db9('0x6') };
        var _0x56539c = _0x5d2aeb[_0x4db9('0x7')][_0x4db9('0x8')]('|'), _0x457e9c = 0x0;
        while (!![]) {
            switch (_0x56539c[_0x457e9c++]) {
            case '0':
                this[_0x4db9('0x4')] = _0x53a067;
                continue;
            case '1':
                this[_0x4db9('0x9')] = _0x5ccd25;
                continue;
            case '2':
                this[_0x4db9('0xa')] = _0x2c5eac;
                continue;
            case '3':
                this['craftingTime'] = _0x541f99;
                continue;
            case '4':
                this[_0x4db9('0xb')] = _0x235dae;
                continue;
            }
            break;
        }
    }
    [_0x4db9('0x2')]() {
        var _0x4d2f44 = {
            'rNrud': function (_0x54b04a, _0x88b96a) {
                return _0x54b04a < _0x88b96a;
            },
            'oXcJA': function (_0x378f28, _0x544444) {
                return _0x378f28 + _0x544444;
            },
            'RWJcX': function (_0x567779, _0x1bab81) {
                return _0x567779 + _0x1bab81;
            },
            'kEoDn': function (_0x4d240c, _0x386b32) {
                return _0x4d240c + _0x386b32;
            },
            'whctz': function (_0x48724f, _0x37f408) {
                return _0x48724f + _0x37f408;
            },
            'hmSZn': function (_0x35c17d, _0x1885da) {
                return _0x35c17d + _0x1885da;
            },
            'gKdpE': 'minutes,\x20',
            'INoXf': 'coins.\x20Crafting\x20Requirement:\x20'
        };
        var _0x136272 = '';
        for (var _0xf37257 = 0x0; _0x4d2f44[_0x4db9('0xc')](_0xf37257, this['craftingRequirements']['length']); _0xf37257++) {
            _0x136272 += _0x4d2f44[_0x4db9('0xd')](_0x4d2f44[_0x4db9('0xe')](_0x4d2f44[_0x4db9('0xe')](this['craftingRequirements'][_0xf37257]['craftingItem']['name'], _0x4db9('0x5')), this[_0x4db9('0xa')][_0xf37257][_0x4db9('0x1')]), '\x20');
        }
        return _0x4d2f44[_0x4db9('0xe')](_0x4d2f44[_0x4db9('0xf')](_0x4d2f44['whctz'](_0x4d2f44[_0x4db9('0x10')](this['name'], ',\x20'), this[_0x4db9('0x11')]), _0x4d2f44[_0x4db9('0x12')]) + this['baseCost'] + _0x4d2f44[_0x4db9('0x13')], _0x136272);
    }
}
class CraftingItemOutput {
    constructor(_0x417b98, _0x5eaa4e, _0x5bec5f, _0x5b0159, _0x191793) {
        var _0x2dfac6 = _0x4db9('0x14')['split']('|'), _0x2be62d = 0x0;
        while (!![]) {
            switch (_0x2dfac6[_0x2be62d++]) {
            case '0':
                this[_0x4db9('0x4')] = _0x417b98;
                continue;
            case '1':
                this[_0x4db9('0x1')] = _0x191793;
                continue;
            case '2':
                this[_0x4db9('0xb')] = _0x5b0159;
                continue;
            case '3':
                this[_0x4db9('0x11')] = _0x5eaa4e;
                continue;
            case '4':
                this[_0x4db9('0x9')] = _0x5bec5f;
                continue;
            }
            break;
        }
    }
    [_0x4db9('0x15')]() {
        switch (this[_0x4db9('0xb')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x4db9('0x16')]:
            return 0x3;
        case rarity[_0x4db9('0x17')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x4db9('0x18')](_0x320621) {
        var _0x315584 = {
            'ikCYv': function (_0x447945, _0x5b5034) {
                return _0x447945 < _0x5b5034;
            },
            'jAxhC': function (_0x37465b, _0x43821e) {
                return _0x37465b / _0x43821e;
            },
            'FYxKW': function (_0x5ae0ce, _0x51e76d) {
                return _0x5ae0ce > _0x51e76d;
            }
        };
        var _0x18dd86 = 0x1;
        if (_0x315584[_0x4db9('0x19')](this[_0x4db9('0x11')], _0x320621)) {
            _0x18dd86 = Math['ceil'](_0x315584['jAxhC'](_0x320621, this['craftingTime']));
        }
        if (_0x315584[_0x4db9('0x1a')](_0x18dd86, this[_0x4db9('0x1')])) {
            return this[_0x4db9('0x1')];
        }
        return _0x18dd86;
    }
    ['getItemsPerCraft'](_0x52da7f) {
        var _0x2007fe = {
            'eDxly': function (_0x58b05d, _0x4bbef1) {
                return _0x58b05d / _0x4bbef1;
            },
            'UzkYD': function (_0x5ef0d9, _0x5a2632) {
                return _0x5ef0d9 > _0x5a2632;
            },
            'zPRSw': function (_0x2bf5a2, _0x437a2e) {
                return _0x2bf5a2 / _0x437a2e;
            }
        };
        var _0x3d5a4e = 0x1;
        if (this[_0x4db9('0x11')] < _0x52da7f) {
            _0x3d5a4e = Math[_0x4db9('0x1b')](_0x2007fe['eDxly'](_0x52da7f, this[_0x4db9('0x11')]));
        }
        if (_0x2007fe[_0x4db9('0x1c')](_0x3d5a4e, this[_0x4db9('0x1')])) {
            _0x3d5a4e = this[_0x4db9('0x1')];
        }
        return Math[_0x4db9('0x1b')](_0x2007fe[_0x4db9('0x1d')](this[_0x4db9('0x1')], _0x3d5a4e));
    }
    [_0x4db9('0x1e')](_0x304302) {
        var _0x4faeee = {
            'naWed': function (_0x11c4c7, _0x3f7727) {
                return _0x11c4c7 * _0x3f7727;
            },
            'MTXnz': function (_0x4583dc, _0x2df189) {
                return _0x4583dc * _0x2df189;
            },
            'KLytb': function (_0x595060, _0x2d3b77) {
                return _0x595060 + _0x2d3b77;
            }
        };
        var _0x2b99d9 = this['getItemsPerCraft'](_0x304302);
        var _0x365fb3 = this['getCrafts'](_0x304302);
        return _0x4faeee[_0x4db9('0x1f')](_0x4faeee[_0x4db9('0x20')](this[_0x4db9('0x9')] / 0x4, _0x4faeee[_0x4db9('0x21')](Math[_0x4db9('0x22')](_0x2b99d9, 0x2), _0x4faeee[_0x4db9('0x20')](0x3, _0x2b99d9))), _0x365fb3);
    }
}