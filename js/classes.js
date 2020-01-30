var _0x4dd3 = [
    'quantity',
    '\x20:\x20',
    'aRAQm',
    'name',
    'KUdGh',
    '4|1|3|2|0',
    'craftingRequirements',
    'craftingTime',
    'rarity',
    'cost',
    'toString',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'wQpEd',
    'length',
    'atiYc',
    'DGyAm',
    'eARmm',
    'hWdRz',
    'ggAPz',
    'YJwjA',
    'getCost',
    'ceil',
    'kxsBb',
    'LRenR',
    'ureiN',
    'eJpwX',
    'pow',
    'OjAvI',
    'craftingItem'
];
(function (_0x549271, _0x44da35) {
    var _0x163284 = function (_0x3cb1c2) {
        while (--_0x3cb1c2) {
            _0x549271['push'](_0x549271['shift']());
        }
    };
    _0x163284(++_0x44da35);
}(_0x4dd3, 0x1df));
var _0x2d5e = function (_0x4c4be4, _0x12e153) {
    _0x4c4be4 = _0x4c4be4 - 0x0;
    var _0x1f4806 = _0x4dd3[_0x4c4be4];
    return _0x1f4806;
};
class CraftingRequirement {
    constructor(_0x5cd836, _0x455bc5) {
        this[_0x2d5e('0x0')] = _0x5cd836;
        this[_0x2d5e('0x1')] = _0x455bc5;
    }
    ['toString']() {
        var _0x36fe50 = {
            'aRAQm': function (_0x39b64f, _0x205b47) {
                return _0x39b64f + _0x205b47;
            },
            'KUdGh': _0x2d5e('0x2')
        };
        _0x36fe50[_0x2d5e('0x3')](this['craftingItem'][_0x2d5e('0x4')] + _0x36fe50[_0x2d5e('0x5')], this[_0x2d5e('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x50dc74, _0x4cad04, _0x3f34d1, _0x3fa353, _0x1ca2f0 = null) {
        var _0x40dcd4 = _0x2d5e('0x6')['split']('|'), _0x4b530a = 0x0;
        while (!![]) {
            switch (_0x40dcd4[_0x4b530a++]) {
            case '0':
                this[_0x2d5e('0x7')] = _0x1ca2f0;
                continue;
            case '1':
                this[_0x2d5e('0x8')] = _0x4cad04;
                continue;
            case '2':
                this[_0x2d5e('0x9')] = _0x3fa353;
                continue;
            case '3':
                this[_0x2d5e('0xa')] = _0x3f34d1;
                continue;
            case '4':
                this[_0x2d5e('0x4')] = _0x50dc74;
                continue;
            }
            break;
        }
    }
    [_0x2d5e('0xb')]() {
        var _0x490f00 = {
            'wQpEd': function (_0x4f3edd, _0x14f66b) {
                return _0x4f3edd < _0x14f66b;
            },
            'atiYc': function (_0x1f3e1e, _0x14a2db) {
                return _0x1f3e1e + _0x14a2db;
            },
            'DGyAm': function (_0x4ed2af, _0x42db30) {
                return _0x4ed2af + _0x42db30;
            },
            'eARmm': function (_0x3c7da1, _0x2da2c9) {
                return _0x3c7da1 + _0x2da2c9;
            },
            'hWdRz': function (_0x10d4e2, _0x389da7) {
                return _0x10d4e2 + _0x389da7;
            },
            'ggAPz': _0x2d5e('0xc'),
            'YJwjA': _0x2d5e('0xd')
        };
        var _0x42d795 = '';
        for (var _0x59c302 = 0x0; _0x490f00[_0x2d5e('0xe')](_0x59c302, this[_0x2d5e('0x7')][_0x2d5e('0xf')]); _0x59c302++) {
            _0x42d795 += _0x490f00[_0x2d5e('0x10')](_0x490f00[_0x2d5e('0x11')](_0x490f00[_0x2d5e('0x12')](this[_0x2d5e('0x7')][_0x59c302][_0x2d5e('0x0')][_0x2d5e('0x4')], '\x20:\x20'), this['craftingRequirements'][_0x59c302][_0x2d5e('0x1')]), '\x20');
        }
        return _0x490f00['eARmm'](_0x490f00['eARmm'](_0x490f00[_0x2d5e('0x12')](_0x490f00[_0x2d5e('0x13')](_0x490f00['hWdRz'](this[_0x2d5e('0x4')] + ',\x20', this[_0x2d5e('0x8')]), _0x490f00[_0x2d5e('0x14')]), this[_0x2d5e('0xa')]), _0x490f00[_0x2d5e('0x15')]), _0x42d795);
    }
    [_0x2d5e('0x16')](_0x190067, _0x2cfcd3) {
        var _0x2c54ac = {
            'kxsBb': function (_0x1bd371, _0xf6fef6) {
                return _0x1bd371 / _0xf6fef6;
            },
            'LRenR': function (_0x4792f1, _0x10fda8) {
                return _0x4792f1 < _0x10fda8;
            },
            'ureiN': function (_0xe995bf, _0x365f3f) {
                return _0xe995bf > _0x365f3f;
            },
            'eJpwX': function (_0x19e8d0, _0x1d3b28) {
                return _0x19e8d0 / _0x1d3b28;
            },
            'YQuQc': function (_0x458f15, _0x15b195) {
                return _0x458f15 + _0x15b195;
            },
            'OjAvI': function (_0x3e3cb7, _0x17c9e5) {
                return _0x3e3cb7 * _0x17c9e5;
            }
        };
        const _0x23107a = Math[_0x2d5e('0x17')](_0x2c54ac[_0x2d5e('0x18')](this[_0x2d5e('0xa')], 0x2));
        var _0x7b31bb = 0x1;
        if (_0x2c54ac[_0x2d5e('0x19')](this[_0x2d5e('0x8')], _0x190067)) {
            _0x7b31bb = Math[_0x2d5e('0x17')](_0x190067 / this[_0x2d5e('0x8')]);
        }
        if (_0x2c54ac[_0x2d5e('0x1a')](_0x7b31bb, _0x2cfcd3)) {
            _0x7b31bb = _0x2cfcd3;
        }
        var _0x36fadc = Math[_0x2d5e('0x17')](_0x2cfcd3 / _0x7b31bb);
        var _0x4d4f07 = _0x2c54ac[_0x2d5e('0x1b')](this[_0x2d5e('0xa')], 0x4) * _0x2c54ac['YQuQc'](Math[_0x2d5e('0x1c')](_0x36fadc, 0x2), _0x2c54ac[_0x2d5e('0x1d')](0x3, _0x36fadc)) * _0x7b31bb;
        return [
            _0x4d4f07,
            _0x36fadc,
            _0x7b31bb
        ];
    }
}