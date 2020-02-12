var _0x47df = [
    'kuYKf',
    'xSzIn',
    'hzHFU',
    'xuwhj',
    'ZPxPp',
    'HcZKO',
    'gjMiq',
    'IQaJv',
    'pow',
    'DGBhm',
    'itemQuantity',
    'crafts',
    'quantity',
    'toString',
    '\x20:\x20',
    'vaqCZ',
    'VvgSJ',
    'craftingItem',
    'name',
    'KZebK',
    'craftingTime',
    'sortingOrder',
    'craftingRequirements',
    'HtoQS',
    'length',
    'dlHxl',
    'miqmK',
    'IAxIn',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'baseCost',
    'rarity',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    '5|3|1|6|2|7|4|0',
    'split',
    'hvREW',
    'QPqJC',
    'floor'
];
(function (_0x4d02e6, _0x41485f) {
    var _0x3130ae = function (_0x1666fd) {
        while (--_0x1666fd) {
            _0x4d02e6['push'](_0x4d02e6['shift']());
        }
    };
    _0x3130ae(++_0x41485f);
}(_0x47df, 0x1b8));
var _0x5e70 = function (_0x1d408a, _0x3f9a95) {
    _0x1d408a = _0x1d408a - 0x0;
    var _0x1dd7a5 = _0x47df[_0x1d408a];
    return _0x1dd7a5;
};
class CraftingMethod {
    constructor(_0x327285, _0x386db9) {
        this[_0x5e70('0x0')] = _0x327285;
        this[_0x5e70('0x1')] = _0x386db9;
    }
}
class CraftingRequirement {
    constructor(_0x551f76, _0x122181) {
        this['craftingItem'] = _0x551f76;
        this[_0x5e70('0x2')] = _0x122181;
    }
    [_0x5e70('0x3')]() {
        var _0x20897f = {
            'vaqCZ': function (_0x368da1, _0x1c7ef7) {
                return _0x368da1 + _0x1c7ef7;
            },
            'VvgSJ': function (_0x1604ce, _0x229473) {
                return _0x1604ce + _0x229473;
            },
            'KZebK': _0x5e70('0x4')
        };
        _0x20897f[_0x5e70('0x5')](_0x20897f[_0x5e70('0x6')](this[_0x5e70('0x7')][_0x5e70('0x8')], _0x20897f[_0x5e70('0x9')]), this[_0x5e70('0x2')]);
    }
}
class CraftingItem {
    constructor(_0x33fadc, _0xa6fd46, _0x1ed295, _0x56c77c, _0x4ac3f8, _0x19c107 = null) {
        this['name'] = _0x33fadc;
        this[_0x5e70('0xa')] = _0xa6fd46;
        this['baseCost'] = _0x1ed295;
        this['rarity'] = _0x56c77c;
        this[_0x5e70('0xb')] = _0x4ac3f8;
        this[_0x5e70('0xc')] = _0x19c107;
    }
    [_0x5e70('0x3')]() {
        var _0x43c4b8 = {
            'HtoQS': function (_0x52ffcc, _0x5a3c0a) {
                return _0x52ffcc < _0x5a3c0a;
            },
            'dlHxl': function (_0x470e89, _0x382d6f) {
                return _0x470e89 + _0x382d6f;
            },
            'miqmK': function (_0x40de0c, _0x297bff) {
                return _0x40de0c + _0x297bff;
            },
            'IAxIn': _0x5e70('0x4')
        };
        var _0x1d99e0 = '';
        for (var _0x4b6ffb = 0x0; _0x43c4b8[_0x5e70('0xd')](_0x4b6ffb, this[_0x5e70('0xc')][_0x5e70('0xe')]); _0x4b6ffb++) {
            _0x1d99e0 += _0x43c4b8[_0x5e70('0xf')](_0x43c4b8[_0x5e70('0x10')](_0x43c4b8[_0x5e70('0x10')](this['craftingRequirements'][_0x4b6ffb][_0x5e70('0x7')]['name'], _0x43c4b8[_0x5e70('0x11')]), this[_0x5e70('0xc')][_0x4b6ffb][_0x5e70('0x2')]), '\x20');
        }
        return _0x43c4b8[_0x5e70('0x10')](_0x43c4b8[_0x5e70('0x10')](_0x43c4b8[_0x5e70('0x10')](_0x43c4b8[_0x5e70('0x10')](_0x43c4b8[_0x5e70('0x10')](this[_0x5e70('0x8')], ',\x20'), this['craftingTime']), _0x5e70('0x12')), this['baseCost']), _0x5e70('0x13')) + _0x1d99e0;
    }
}
class CraftingItemOutput {
    constructor(_0x509a35, _0x3e8775, _0x343689, _0x341c1a, _0x37f6a6, _0x3a17aa) {
        this['name'] = _0x509a35;
        this[_0x5e70('0xa')] = _0x3e8775;
        this[_0x5e70('0x14')] = _0x343689;
        this[_0x5e70('0x15')] = _0x341c1a;
        this[_0x5e70('0x2')] = _0x37f6a6;
        this[_0x5e70('0xb')] = _0x3a17aa;
    }
    [_0x5e70('0x16')]() {
        switch (this[_0x5e70('0x15')]) {
        case rarity[_0x5e70('0x17')]:
            return 0x0;
        case rarity[_0x5e70('0x18')]:
            return 0x1;
        default:
        case rarity[_0x5e70('0x19')]:
            return 0x2;
        case rarity[_0x5e70('0x1a')]:
            return 0x3;
        case rarity[_0x5e70('0x1b')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    ['getCraftingMethod'](_0x1bfd88) {
        var _0x4ac4c3 = {
            'hvREW': function (_0x2e7378, _0x277489) {
                return _0x2e7378 > _0x277489;
            },
            'QPqJC': function (_0x232a13, _0x221500) {
                return _0x232a13 < _0x221500;
            },
            'kuYKf': function (_0x4393d2, _0x212b65) {
                return _0x4393d2 / _0x212b65;
            },
            'aeVpS': function (_0x23d801, _0x8e8d9e) {
                return _0x23d801 <= _0x8e8d9e;
            },
            'xSzIn': function (_0x1a1e24, _0x3e2315) {
                return _0x1a1e24 * _0x3e2315;
            },
            'hzHFU': function (_0x452ada, _0x7f9837) {
                return _0x452ada * _0x7f9837;
            },
            'xuwhj': function (_0x531e09, _0x39d65f) {
                return _0x531e09 - _0x39d65f;
            },
            'ZPxPp': function (_0x15f36b, _0x2dda88) {
                return _0x15f36b === _0x2dda88;
            }
        };
        var _0x59c911 = _0x5e70('0x1c')[_0x5e70('0x1d')]('|'), _0x53b1bd = 0x0;
        while (!![]) {
            switch (_0x59c911[_0x53b1bd++]) {
            case '0':
                return [];
            case '1':
                if (_0x4ac4c3[_0x5e70('0x1e')](_0x46b8ea, this[_0x5e70('0x2')])) {
                    _0x46b8ea = this[_0x5e70('0x2')];
                    return [new CraftingMethod(0x1, this[_0x5e70('0x2')])];
                }
                continue;
            case '2':
                var _0x41bee4 = Math['ceil'](this['quantity'] / _0x46b8ea);
                continue;
            case '3':
                if (_0x4ac4c3[_0x5e70('0x1f')](this[_0x5e70('0xa')], _0x1bfd88)) {
                    _0x46b8ea = Math[_0x5e70('0x20')](_0x4ac4c3[_0x5e70('0x21')](_0x1bfd88, this['craftingTime']));
                }
                continue;
            case '4':
                for (var _0x36e341 = 0x1; _0x4ac4c3['aeVpS'](_0x36e341, _0x46b8ea); _0x36e341++) {
                    var _0x2f939d = _0x4ac4c3[_0x5e70('0x22')](_0x41bee4, _0x36e341);
                    var _0x2004e4 = _0x4ac4c3[_0x5e70('0x23')](_0x81db70, _0x4ac4c3[_0x5e70('0x24')](_0x46b8ea, _0x36e341));
                    if (_0x4ac4c3[_0x5e70('0x25')](_0x2f939d + _0x2004e4, this[_0x5e70('0x2')])) {
                        return [
                            new CraftingMethod(_0x41bee4, _0x36e341),
                            new CraftingMethod(_0x81db70, _0x4ac4c3[_0x5e70('0x24')](_0x46b8ea, _0x36e341))
                        ];
                    }
                }
                continue;
            case '5':
                var _0x46b8ea = 0x1;
                continue;
            case '6':
                if (_0x4ac4c3['ZPxPp'](_0x46b8ea, 0x1)) {
                    return [new CraftingMethod(this[_0x5e70('0x2')], 0x1)];
                }
                continue;
            case '7':
                var _0x81db70 = _0x41bee4 - 0x1;
                continue;
            }
            break;
        }
    }
    ['getCost'](_0x34495e) {
        var _0x23186e = {
            'HcZKO': function (_0x535576, _0x232c51) {
                return _0x535576 < _0x232c51;
            },
            'gjMiq': function (_0x2b55b5, _0x2fc76b) {
                return _0x2b55b5 * _0x2fc76b;
            },
            'aNJDC': function (_0x3fd2c4, _0xea805b) {
                return _0x3fd2c4 / _0xea805b;
            },
            'IQaJv': function (_0x47f345, _0x595d78) {
                return _0x47f345 + _0x595d78;
            },
            'DGBhm': function (_0x5cec2f, _0x4f760d) {
                return _0x5cec2f * _0x4f760d;
            }
        };
        var _0x3188e4 = 0x0;
        for (var _0x55b7f1 = 0x0; _0x23186e[_0x5e70('0x26')](_0x55b7f1, _0x34495e[_0x5e70('0xe')]); _0x55b7f1++) {
            _0x3188e4 += _0x23186e[_0x5e70('0x27')](_0x23186e['aNJDC'](this[_0x5e70('0x14')], 0x4), _0x23186e[_0x5e70('0x28')](Math[_0x5e70('0x29')](_0x34495e[_0x55b7f1][_0x5e70('0x0')], 0x2), _0x23186e[_0x5e70('0x2a')](0x3, _0x34495e[_0x55b7f1][_0x5e70('0x0')]))) * _0x34495e[_0x55b7f1][_0x5e70('0x1')];
        }
        return _0x3188e4;
    }
}