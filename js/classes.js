var _0x15f3 = [
    'rPIFl',
    'length',
    'IXlch',
    'NqHnL',
    'craftingItem',
    'BjLOA',
    'AEbyG',
    'ivNxJ',
    'cost',
    'WLtYP',
    'getCost',
    'igaQe',
    'SNeMN',
    'UeDWk',
    'ceil',
    'oGFbX',
    'pow',
    'qIuSp',
    'quantity',
    'toString',
    '\x20:\x20',
    'wZtOF',
    'jCmfi',
    'name',
    'craftingTime',
    'craftingRequirements',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x15f3, 0xd6));
var _0x2a77 = function (_0x1307ab, _0x192777) {
    _0x1307ab = _0x1307ab - 0x0;
    var _0x2660d0 = _0x15f3[_0x1307ab];
    return _0x2660d0;
};
class CraftingRequirement {
    constructor(_0x199a32, _0x223ee6) {
        this['craftingItem'] = _0x199a32;
        this[_0x2a77('0x0')] = _0x223ee6;
    }
    [_0x2a77('0x1')]() {
        var _0x20b337 = {
            'wZtOF': function (_0x23da29, _0xf19f7e) {
                return _0x23da29 + _0xf19f7e;
            },
            'jCmfi': _0x2a77('0x2')
        };
        _0x20b337[_0x2a77('0x3')](_0x20b337[_0x2a77('0x3')](this['craftingItem']['name'], _0x20b337[_0x2a77('0x4')]), this[_0x2a77('0x0')]);
    }
}
class CraftingItem {
    constructor(_0x40ee58, _0x2a5ac6, _0x24dd17, _0x492bec) {
        this[_0x2a77('0x5')] = _0x40ee58;
        this[_0x2a77('0x6')] = _0x2a5ac6;
        this['cost'] = _0x24dd17;
        this[_0x2a77('0x7')] = _0x492bec;
    }
    [_0x2a77('0x1')]() {
        var _0x25998b = {
            'rPIFl': function (_0x6d79b3, _0x4aae7b) {
                return _0x6d79b3 < _0x4aae7b;
            },
            'IXlch': function (_0x7c2638, _0x4b7639) {
                return _0x7c2638 + _0x4b7639;
            },
            'NqHnL': function (_0x108514, _0x2f43c3) {
                return _0x108514 + _0x2f43c3;
            },
            'BjLOA': _0x2a77('0x2'),
            'AEbyG': function (_0x28fed8, _0x433359) {
                return _0x28fed8 + _0x433359;
            },
            'ivNxJ': _0x2a77('0x8'),
            'WLtYP': _0x2a77('0x9')
        };
        var _0x5d9950 = '';
        for (var _0x127f5d = 0x0; _0x25998b[_0x2a77('0xa')](_0x127f5d, this[_0x2a77('0x7')][_0x2a77('0xb')]); _0x127f5d++) {
            _0x5d9950 += _0x25998b[_0x2a77('0xc')](_0x25998b[_0x2a77('0xd')](this[_0x2a77('0x7')][_0x127f5d][_0x2a77('0xe')]['name'], _0x25998b[_0x2a77('0xf')]) + this[_0x2a77('0x7')][_0x127f5d][_0x2a77('0x0')], '\x20');
        }
        return _0x25998b[_0x2a77('0xd')](_0x25998b[_0x2a77('0x10')](this['name'], ',\x20') + this[_0x2a77('0x6')] + _0x25998b[_0x2a77('0x11')] + this[_0x2a77('0x12')] + _0x25998b[_0x2a77('0x13')], _0x5d9950);
    }
    [_0x2a77('0x14')](_0x151acd, _0x364e68) {
        var _0x5c6122 = {
            'FLUoT': function (_0x2a5d2f, _0x2b3773) {
                return _0x2a5d2f / _0x2b3773;
            },
            'igaQe': function (_0x1ba636, _0x143714) {
                return _0x1ba636 < _0x143714;
            },
            'SNeMN': function (_0x29118f, _0x4194c1) {
                return _0x29118f / _0x4194c1;
            },
            'UeDWk': function (_0x30ed1d, _0x532ae6) {
                return _0x30ed1d > _0x532ae6;
            },
            'oGFbX': function (_0x41f0fc, _0x3de2aa) {
                return _0x41f0fc * _0x3de2aa;
            },
            'uxaVA': function (_0xf94d77, _0x2ccf40) {
                return _0xf94d77 + _0x2ccf40;
            },
            'qIuSp': function (_0x280338, _0x5eafb7) {
                return _0x280338 * _0x5eafb7;
            }
        };
        const _0x137f34 = Math['ceil'](_0x5c6122['FLUoT'](this[_0x2a77('0x12')], 0x2));
        var _0x30ef22 = 0x1;
        if (_0x5c6122[_0x2a77('0x15')](this['craftingTime'], _0x151acd)) {
            _0x30ef22 = Math['ceil'](_0x5c6122[_0x2a77('0x16')](_0x151acd, this[_0x2a77('0x6')]));
        }
        if (_0x5c6122[_0x2a77('0x17')](_0x30ef22, _0x364e68)) {
            _0x30ef22 = _0x364e68;
        }
        var _0x2b737d = Math[_0x2a77('0x18')](_0x364e68 / _0x30ef22);
        var _0x12ebff = _0x5c6122[_0x2a77('0x19')](_0x5c6122['SNeMN'](this[_0x2a77('0x12')], 0x4), _0x5c6122['uxaVA'](Math[_0x2a77('0x1a')](_0x2b737d, 0x2), _0x5c6122[_0x2a77('0x1b')](0x3, _0x2b737d))) * _0x30ef22;
        return [
            _0x12ebff,
            _0x2b737d,
            _0x30ef22
        ];
    }
}