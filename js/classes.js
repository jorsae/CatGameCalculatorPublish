var _0x1270 = [
    'craftingTime',
    'rarity',
    '\x20:\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'KgnYQ',
    'craftingRequirements',
    'length',
    'QueDf',
    'OfvSQ',
    'QeNTK',
    'minutes,\x20',
    'dQMrd',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'cevTs',
    'ceil',
    'vqLRQ',
    'BQDqx',
    'getItemsPerCraft',
    'OhQjy',
    'sxobg',
    'getCost',
    'iMKCB',
    'mTqgu',
    'OlQow',
    'FpHGq',
    'pow',
    'craftingItem',
    'quantity',
    'toString',
    'hNviq',
    'wQovl',
    'name',
    'kdclm',
    '0|2|1|4|3',
    'split',
    'baseCost'
];
(function (_0x1fd94c, _0x171741) {
    var _0x1d8f0c = function (_0x5647f5) {
        while (--_0x5647f5) {
            _0x1fd94c['push'](_0x1fd94c['shift']());
        }
    };
    _0x1d8f0c(++_0x171741);
}(_0x1270, 0x146));
var _0x5c07 = function (_0x304429, _0x41d9de) {
    _0x304429 = _0x304429 - 0x0;
    var _0x52f59b = _0x1270[_0x304429];
    return _0x52f59b;
};
class CraftingRequirement {
    constructor(_0x5e8c8b, _0x1bcf95) {
        this[_0x5c07('0x0')] = _0x5e8c8b;
        this[_0x5c07('0x1')] = _0x1bcf95;
    }
    [_0x5c07('0x2')]() {
        var _0x52ca09 = {
            'hNviq': function (_0xf7ec61, _0x12cacc) {
                return _0xf7ec61 + _0x12cacc;
            },
            'wQovl': function (_0xddf05b, _0x38e101) {
                return _0xddf05b + _0x38e101;
            },
            'kdclm': '\x20:\x20'
        };
        _0x52ca09[_0x5c07('0x3')](_0x52ca09[_0x5c07('0x4')](this[_0x5c07('0x0')][_0x5c07('0x5')], _0x52ca09[_0x5c07('0x6')]), this[_0x5c07('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x9a74c3, _0x279908, _0x21f5e3, _0x32021a, _0x4f4728 = null) {
        var _0x2bcee6 = { 'ckyCI': _0x5c07('0x7') };
        var _0x3733a8 = _0x2bcee6['ckyCI'][_0x5c07('0x8')]('|'), _0x322f4c = 0x0;
        while (!![]) {
            switch (_0x3733a8[_0x322f4c++]) {
            case '0':
                this[_0x5c07('0x5')] = _0x9a74c3;
                continue;
            case '1':
                this[_0x5c07('0x9')] = _0x21f5e3;
                continue;
            case '2':
                this[_0x5c07('0xa')] = _0x279908;
                continue;
            case '3':
                this['craftingRequirements'] = _0x4f4728;
                continue;
            case '4':
                this[_0x5c07('0xb')] = _0x32021a;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x5c35ac = {
            'KgnYQ': function (_0x13ca17, _0xf69fb5) {
                return _0x13ca17 < _0xf69fb5;
            },
            'QueDf': function (_0x13adc1, _0x5ab7e7) {
                return _0x13adc1 + _0x5ab7e7;
            },
            'OfvSQ': function (_0x4a035f, _0x5d7384) {
                return _0x4a035f + _0x5d7384;
            },
            'QeNTK': _0x5c07('0xc'),
            'dQMrd': _0x5c07('0xd')
        };
        var _0xd8d95a = '';
        for (var _0x3be63a = 0x0; _0x5c35ac[_0x5c07('0xe')](_0x3be63a, this[_0x5c07('0xf')][_0x5c07('0x10')]); _0x3be63a++) {
            _0xd8d95a += _0x5c35ac[_0x5c07('0x11')](_0x5c35ac[_0x5c07('0x12')](this[_0x5c07('0xf')][_0x3be63a]['craftingItem']['name'], _0x5c35ac[_0x5c07('0x13')]) + this['craftingRequirements'][_0x3be63a]['quantity'], '\x20');
        }
        return _0x5c35ac[_0x5c07('0x12')](_0x5c35ac[_0x5c07('0x12')](_0x5c35ac[_0x5c07('0x12')](this[_0x5c07('0x5')] + ',\x20', this[_0x5c07('0xa')]) + _0x5c07('0x14'), this['baseCost']), _0x5c35ac[_0x5c07('0x15')]) + _0xd8d95a;
    }
}
class CraftingItemOutput {
    constructor(_0x588591, _0x1a9663, _0x449dcb, _0x333007, _0x3675a4) {
        this[_0x5c07('0x5')] = _0x588591;
        this[_0x5c07('0xa')] = _0x1a9663;
        this['baseCost'] = _0x449dcb;
        this[_0x5c07('0xb')] = _0x333007;
        this['quantity'] = _0x3675a4;
    }
    [_0x5c07('0x16')]() {
        switch (this[_0x5c07('0xb')]) {
        case rarity[_0x5c07('0x17')]:
            return 0x0;
        case rarity[_0x5c07('0x18')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x5c07('0x19')]:
            return 0x3;
        case rarity[_0x5c07('0x1a')]:
            return 0x4;
        case rarity[_0x5c07('0x1b')]:
            return 0x5;
        }
    }
    [_0x5c07('0x1c')](_0x6ea484) {
        var _0x5312e5 = {
            'cevTs': function (_0x171e31, _0x40d8e3) {
                return _0x171e31 < _0x40d8e3;
            },
            'vqLRQ': function (_0x2ea804, _0x5b3ae9) {
                return _0x2ea804 / _0x5b3ae9;
            },
            'BQDqx': function (_0x156bff, _0x7f6820) {
                return _0x156bff > _0x7f6820;
            }
        };
        var _0x5876f4 = 0x1;
        if (_0x5312e5[_0x5c07('0x1d')](this[_0x5c07('0xa')], _0x6ea484)) {
            _0x5876f4 = Math[_0x5c07('0x1e')](_0x5312e5[_0x5c07('0x1f')](_0x6ea484, this[_0x5c07('0xa')]));
        }
        if (_0x5312e5[_0x5c07('0x20')](_0x5876f4, this[_0x5c07('0x1')])) {
            return this[_0x5c07('0x1')];
        }
        return _0x5876f4;
    }
    [_0x5c07('0x21')](_0x3fe365) {
        var _0x4f2e40 = {
            'OhQjy': function (_0x3b688a, _0x93c4a) {
                return _0x3b688a < _0x93c4a;
            },
            'LuzNM': function (_0x544250, _0x3ec967) {
                return _0x544250 / _0x3ec967;
            },
            'FFkNo': function (_0x23a501, _0x106d24) {
                return _0x23a501 > _0x106d24;
            },
            'sxobg': function (_0x5c9a2d, _0x5e35de) {
                return _0x5c9a2d / _0x5e35de;
            }
        };
        var _0x57d1a5 = 0x1;
        if (_0x4f2e40[_0x5c07('0x22')](this[_0x5c07('0xa')], _0x3fe365)) {
            _0x57d1a5 = Math[_0x5c07('0x1e')](_0x4f2e40['LuzNM'](_0x3fe365, this[_0x5c07('0xa')]));
        }
        if (_0x4f2e40['FFkNo'](_0x57d1a5, this[_0x5c07('0x1')])) {
            _0x57d1a5 = this[_0x5c07('0x1')];
        }
        return Math[_0x5c07('0x1e')](_0x4f2e40[_0x5c07('0x23')](this['quantity'], _0x57d1a5));
    }
    [_0x5c07('0x24')](_0x1debd4) {
        var _0xad2903 = {
            'iMKCB': function (_0x266662, _0x587ccb) {
                return _0x266662 * _0x587ccb;
            },
            'mTqgu': function (_0x4a5446, _0x16ef86) {
                return _0x4a5446 * _0x16ef86;
            },
            'OlQow': function (_0x9dff9, _0x4aae2d) {
                return _0x9dff9 / _0x4aae2d;
            },
            'FpHGq': function (_0x106019, _0x329410) {
                return _0x106019 + _0x329410;
            }
        };
        var _0x87b416 = this[_0x5c07('0x21')](_0x1debd4);
        var _0x466334 = this['getCrafts'](_0x1debd4);
        return _0xad2903[_0x5c07('0x25')](_0xad2903[_0x5c07('0x26')](_0xad2903[_0x5c07('0x27')](this[_0x5c07('0x9')], 0x4), _0xad2903[_0x5c07('0x28')](Math[_0x5c07('0x29')](_0x87b416, 0x2), 0x3 * _0x87b416)), _0x466334);
    }
}