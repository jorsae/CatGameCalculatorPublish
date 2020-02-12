var _0xb34f = [
    'GIqcI',
    'FhmFL',
    'WxVdA',
    'mPBRW',
    'pJUHp',
    'vypdB',
    'TcHfx',
    '1|4|2|5|0|3',
    'getRarityValue',
    'HIDDEN',
    'COMMON',
    'RARE',
    'EPIC',
    'getCraftingMethod',
    'floor',
    'SJSZX',
    'KVEPQ',
    'YZTEG',
    'ceil',
    'HuUIn',
    'kAfhC',
    'rIiSb',
    'EcEmM',
    'iHaJO',
    'fXpTz',
    'QejYq',
    'RuyvC',
    'oxfno',
    'itemQuantity',
    'crafts',
    'craftingItem',
    'toString',
    '\x20:\x20',
    'ZMDRo',
    'MdupH',
    'name',
    'QeRCo',
    'quantity',
    '3|5|4|0|2|1',
    'VyVxE',
    'split',
    'rarity',
    'craftingRequirements',
    'sortingOrder',
    'baseCost',
    'craftingTime',
    'minutes,\x20',
    'hOtEO',
    'length'
];
(function (_0x463cb3, _0x60b22) {
    var _0x16ad91 = function (_0x1ad66e) {
        while (--_0x1ad66e) {
            _0x463cb3['push'](_0x463cb3['shift']());
        }
    };
    _0x16ad91(++_0x60b22);
}(_0xb34f, 0x111));
var _0x12c3 = function (_0x326a80, _0x2a86da) {
    _0x326a80 = _0x326a80 - 0x0;
    var _0x564ba4 = _0xb34f[_0x326a80];
    return _0x564ba4;
};
class CraftingMethod {
    constructor(_0x2d4983, _0x117eaa) {
        this[_0x12c3('0x0')] = _0x2d4983;
        this[_0x12c3('0x1')] = _0x117eaa;
    }
}
class CraftingRequirement {
    constructor(_0x23fc62, _0x56b2b7) {
        this[_0x12c3('0x2')] = _0x23fc62;
        this['quantity'] = _0x56b2b7;
    }
    [_0x12c3('0x3')]() {
        var _0x376a25 = {
            'ZMDRo': function (_0x313063, _0xe31823) {
                return _0x313063 + _0xe31823;
            },
            'MdupH': function (_0x342a4e, _0x2b2f6c) {
                return _0x342a4e + _0x2b2f6c;
            },
            'QeRCo': _0x12c3('0x4')
        };
        _0x376a25[_0x12c3('0x5')](_0x376a25[_0x12c3('0x6')](this['craftingItem'][_0x12c3('0x7')], _0x376a25[_0x12c3('0x8')]), this[_0x12c3('0x9')]);
    }
}
class CraftingItem {
    constructor(_0x599163, _0x202ce2, _0x5a8c64, _0x1770dd, _0x6745f8, _0x31caec = null) {
        var _0x14cfb8 = { 'VyVxE': _0x12c3('0xa') };
        var _0x5ed9e1 = _0x14cfb8[_0x12c3('0xb')][_0x12c3('0xc')]('|'), _0x33dab6 = 0x0;
        while (!![]) {
            switch (_0x5ed9e1[_0x33dab6++]) {
            case '0':
                this[_0x12c3('0xd')] = _0x1770dd;
                continue;
            case '1':
                this[_0x12c3('0xe')] = _0x31caec;
                continue;
            case '2':
                this[_0x12c3('0xf')] = _0x6745f8;
                continue;
            case '3':
                this[_0x12c3('0x7')] = _0x599163;
                continue;
            case '4':
                this[_0x12c3('0x10')] = _0x5a8c64;
                continue;
            case '5':
                this[_0x12c3('0x11')] = _0x202ce2;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x4d4a64 = {
            'hOtEO': function (_0x3f976b, _0x469265) {
                return _0x3f976b < _0x469265;
            },
            'GIqcI': function (_0xc5a77e, _0x43869c) {
                return _0xc5a77e + _0x43869c;
            },
            'FhmFL': function (_0x4117cb, _0x394879) {
                return _0x4117cb + _0x394879;
            },
            'WxVdA': function (_0x5eb99f, _0x164941) {
                return _0x5eb99f + _0x164941;
            },
            'mPBRW': _0x12c3('0x4'),
            'pJUHp': function (_0x230ba1, _0x21686c) {
                return _0x230ba1 + _0x21686c;
            },
            'vypdB': _0x12c3('0x12'),
            'TcHfx': 'coins.\x20Crafting\x20Requirement:\x20'
        };
        var _0x2ec3f5 = '';
        for (var _0x346b19 = 0x0; _0x4d4a64[_0x12c3('0x13')](_0x346b19, this[_0x12c3('0xe')][_0x12c3('0x14')]); _0x346b19++) {
            _0x2ec3f5 += _0x4d4a64[_0x12c3('0x15')](_0x4d4a64[_0x12c3('0x16')](_0x4d4a64[_0x12c3('0x17')](this[_0x12c3('0xe')][_0x346b19][_0x12c3('0x2')][_0x12c3('0x7')], _0x4d4a64[_0x12c3('0x18')]), this[_0x12c3('0xe')][_0x346b19][_0x12c3('0x9')]), '\x20');
        }
        return _0x4d4a64['WxVdA'](_0x4d4a64[_0x12c3('0x19')](_0x4d4a64[_0x12c3('0x19')](_0x4d4a64[_0x12c3('0x19')](_0x4d4a64[_0x12c3('0x19')](this['name'], ',\x20'), this[_0x12c3('0x11')]), _0x4d4a64[_0x12c3('0x1a')]) + this[_0x12c3('0x10')], _0x4d4a64[_0x12c3('0x1b')]), _0x2ec3f5);
    }
}
class CraftingItemOutput {
    constructor(_0x1d48f1, _0x534f57, _0x82e4c2, _0x185f0d, _0x4393be, _0x56dcc2) {
        var _0x11ae26 = _0x12c3('0x1c')[_0x12c3('0xc')]('|'), _0x8982c7 = 0x0;
        while (!![]) {
            switch (_0x11ae26[_0x8982c7++]) {
            case '0':
                this[_0x12c3('0x9')] = _0x4393be;
                continue;
            case '1':
                this['name'] = _0x1d48f1;
                continue;
            case '2':
                this[_0x12c3('0x10')] = _0x82e4c2;
                continue;
            case '3':
                this[_0x12c3('0xf')] = _0x56dcc2;
                continue;
            case '4':
                this[_0x12c3('0x11')] = _0x534f57;
                continue;
            case '5':
                this['rarity'] = _0x185f0d;
                continue;
            }
            break;
        }
    }
    [_0x12c3('0x1d')]() {
        switch (this[_0x12c3('0xd')]) {
        case rarity[_0x12c3('0x1e')]:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity[_0x12c3('0x1f')]:
            return 0x2;
        case rarity[_0x12c3('0x20')]:
            return 0x3;
        case rarity[_0x12c3('0x21')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x12c3('0x22')](_0x314502) {
        var _0x39e9ca = {
            'SJSZX': function (_0x13c0d9, _0xee3b81) {
                return _0x13c0d9 / _0xee3b81;
            },
            'KVEPQ': function (_0x47028a, _0x3560f9) {
                return _0x47028a > _0x3560f9;
            },
            'YZTEG': function (_0x4cdddb, _0x406881) {
                return _0x4cdddb === _0x406881;
            },
            'HuUIn': function (_0x524b14, _0x591ef0) {
                return _0x524b14 / _0x591ef0;
            },
            'kAfhC': function (_0x2b54e8, _0x30815f) {
                return _0x2b54e8 - _0x30815f;
            },
            'rIiSb': function (_0x20d61f, _0x553469) {
                return _0x20d61f <= _0x553469;
            },
            'EcEmM': function (_0x1fe135, _0x5d35a5) {
                return _0x1fe135 * _0x5d35a5;
            },
            'iHaJO': function (_0x2736d7, _0x21fdff) {
                return _0x2736d7 - _0x21fdff;
            },
            'fXpTz': function (_0x1bbb84, _0x526cfc) {
                return _0x1bbb84 === _0x526cfc;
            },
            'QejYq': function (_0x9e7f9, _0x85c4c7) {
                return _0x9e7f9 + _0x85c4c7;
            }
        };
        var _0x5c352e = 0x1;
        if (this[_0x12c3('0x11')] < _0x314502) {
            _0x5c352e = Math[_0x12c3('0x23')](_0x39e9ca[_0x12c3('0x24')](_0x314502, this['craftingTime']));
        }
        if (_0x39e9ca[_0x12c3('0x25')](_0x5c352e, this[_0x12c3('0x9')])) {
            _0x5c352e = this['quantity'];
            return [new CraftingMethod(0x1, this[_0x12c3('0x9')])];
        }
        if (_0x39e9ca[_0x12c3('0x26')](_0x5c352e, 0x1)) {
            return [new CraftingMethod(this[_0x12c3('0x9')], 0x1)];
        }
        var _0x2dca7d = Math[_0x12c3('0x27')](_0x39e9ca[_0x12c3('0x28')](this[_0x12c3('0x9')], _0x5c352e));
        var _0x3c5647 = _0x39e9ca[_0x12c3('0x29')](_0x2dca7d, 0x1);
        for (var _0x5df378 = 0x1; _0x39e9ca[_0x12c3('0x2a')](_0x5df378, _0x5c352e); _0x5df378++) {
            var _0xb80721 = _0x39e9ca[_0x12c3('0x2b')](_0x2dca7d, _0x5df378);
            var _0x145fb7 = _0x3c5647 * _0x39e9ca[_0x12c3('0x2c')](_0x5c352e, _0x5df378);
            if (_0x39e9ca[_0x12c3('0x2d')](_0x39e9ca[_0x12c3('0x2e')](_0xb80721, _0x145fb7), this[_0x12c3('0x9')])) {
                return [
                    new CraftingMethod(_0x2dca7d, _0x5df378),
                    new CraftingMethod(_0x3c5647, _0x39e9ca[_0x12c3('0x2c')](_0x5c352e, _0x5df378))
                ];
            }
        }
        return [];
    }
    ['getCost'](_0x28d153) {
        var _0x3c48f5 = {
            'SuVle': function (_0x11d2dc, _0x3fb474) {
                return _0x11d2dc * _0x3fb474;
            },
            'RuyvC': function (_0x430fea, _0x2ae847) {
                return _0x430fea * _0x2ae847;
            },
            'oxfno': function (_0x953e67, _0x10140e) {
                return _0x953e67 / _0x10140e;
            }
        };
        var _0x2190ce = 0x0;
        for (var _0x2920a1 = 0x0; _0x2920a1 < _0x28d153['length']; _0x2920a1++) {
            _0x2190ce += _0x3c48f5['SuVle'](_0x3c48f5[_0x12c3('0x2f')](_0x3c48f5[_0x12c3('0x30')](this[_0x12c3('0x10')], 0x4), Math['pow'](_0x28d153[_0x2920a1]['itemQuantity'], 0x2) + 0x3 * _0x28d153[_0x2920a1]['itemQuantity']), _0x28d153[_0x2920a1][_0x12c3('0x1')]);
        }
        return _0x2190ce;
    }
}