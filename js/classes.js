var _0x51be = [
    'wAgBw',
    'split',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'hHman',
    'ceil',
    'getItemsPerCraft',
    'RwQzf',
    'syJeh',
    'KZboZ',
    'getCost',
    'MzvrI',
    'pow',
    'oYEpZ',
    'quantity',
    'toString',
    'Nhojc',
    'name',
    '\x20:\x20',
    'craftingTime',
    'rarity',
    'craftingRequirements',
    'coins.\x20Crafting\x20Requirement:\x20',
    'foUoM',
    'length',
    'MZood',
    'craftingItem',
    'jcPvg',
    'qXaoR',
    'HkXOw',
    'epZNq',
    'IAjWG',
    'baseCost',
    'JgpPa',
    '3|4|2|1|0'
];
(function (_0x302bf4, _0x28c724) {
    var _0xb5f8a = function (_0x339dfb) {
        while (--_0x339dfb) {
            _0x302bf4['push'](_0x302bf4['shift']());
        }
    };
    _0xb5f8a(++_0x28c724);
}(_0x51be, 0x1d7));
var _0x5031 = function (_0x551d8f, _0x2137d0) {
    _0x551d8f = _0x551d8f - 0x0;
    var _0x407da1 = _0x51be[_0x551d8f];
    return _0x407da1;
};
class CraftingRequirement {
    constructor(_0x3f63c6, _0x4daaae) {
        this['craftingItem'] = _0x3f63c6;
        this[_0x5031('0x0')] = _0x4daaae;
    }
    [_0x5031('0x1')]() {
        var _0x298655 = {
            'Nhojc': function (_0x5cec43, _0x42eb61) {
                return _0x5cec43 + _0x42eb61;
            }
        };
        _0x298655['Nhojc'](_0x298655[_0x5031('0x2')](this['craftingItem'][_0x5031('0x3')], _0x5031('0x4')), this['quantity']);
    }
}
class CraftingItem {
    constructor(_0x44922a, _0xfd95bc, _0x5a0943, _0x4b933e, _0x19e6af = null) {
        this['name'] = _0x44922a;
        this[_0x5031('0x5')] = _0xfd95bc;
        this['baseCost'] = _0x5a0943;
        this[_0x5031('0x6')] = _0x4b933e;
        this[_0x5031('0x7')] = _0x19e6af;
    }
    [_0x5031('0x1')]() {
        var _0x273256 = {
            'foUoM': function (_0xdfda63, _0x150762) {
                return _0xdfda63 < _0x150762;
            },
            'MZood': function (_0x21983a, _0x4775e6) {
                return _0x21983a + _0x4775e6;
            },
            'jcPvg': function (_0x498bbf, _0x4f15ef) {
                return _0x498bbf + _0x4f15ef;
            },
            'qXaoR': function (_0x90d59a, _0x42127b) {
                return _0x90d59a + _0x42127b;
            },
            'HkXOw': function (_0x4d3f1e, _0x9596f4) {
                return _0x4d3f1e + _0x9596f4;
            },
            'epZNq': function (_0x41dc20, _0x49d7b2) {
                return _0x41dc20 + _0x49d7b2;
            },
            'IAjWG': 'minutes,\x20',
            'JgpPa': _0x5031('0x8')
        };
        var _0x4ed2f6 = '';
        for (var _0x325c68 = 0x0; _0x273256[_0x5031('0x9')](_0x325c68, this[_0x5031('0x7')][_0x5031('0xa')]); _0x325c68++) {
            _0x4ed2f6 += _0x273256[_0x5031('0xb')](_0x273256[_0x5031('0xb')](this[_0x5031('0x7')][_0x325c68][_0x5031('0xc')]['name'], _0x5031('0x4')) + this[_0x5031('0x7')][_0x325c68][_0x5031('0x0')], '\x20');
        }
        return _0x273256[_0x5031('0xd')](_0x273256['jcPvg'](_0x273256[_0x5031('0xd')](_0x273256[_0x5031('0xe')](_0x273256[_0x5031('0xf')](_0x273256[_0x5031('0x10')](this['name'], ',\x20'), this['craftingTime']), _0x273256[_0x5031('0x11')]), this[_0x5031('0x12')]), _0x273256[_0x5031('0x13')]), _0x4ed2f6);
    }
}
class CraftingItemOutput {
    constructor(_0x13a0c9, _0x6c28db, _0x43edc7, _0x67069, _0xa03ca8) {
        var _0x4ce95f = { 'wAgBw': _0x5031('0x14') };
        var _0x409309 = _0x4ce95f[_0x5031('0x15')][_0x5031('0x16')]('|'), _0x5a5824 = 0x0;
        while (!![]) {
            switch (_0x409309[_0x5a5824++]) {
            case '0':
                this[_0x5031('0x0')] = _0xa03ca8;
                continue;
            case '1':
                this[_0x5031('0x6')] = _0x67069;
                continue;
            case '2':
                this[_0x5031('0x12')] = _0x43edc7;
                continue;
            case '3':
                this[_0x5031('0x3')] = _0x13a0c9;
                continue;
            case '4':
                this[_0x5031('0x5')] = _0x6c28db;
                continue;
            }
            break;
        }
    }
    [_0x5031('0x17')]() {
        switch (this[_0x5031('0x6')]) {
        case rarity[_0x5031('0x18')]:
            return 0x0;
        case rarity[_0x5031('0x19')]:
            return 0x1;
        default:
        case rarity[_0x5031('0x1a')]:
            return 0x2;
        case rarity[_0x5031('0x1b')]:
            return 0x3;
        case rarity[_0x5031('0x1c')]:
            return 0x4;
        case rarity[_0x5031('0x1d')]:
            return 0x5;
        }
    }
    [_0x5031('0x1e')](_0xcbb995) {
        var _0x310061 = {
            'hHman': function (_0x90a8e9, _0x505adb) {
                return _0x90a8e9 < _0x505adb;
            }
        };
        var _0x3fbc77 = 0x1;
        if (_0x310061[_0x5031('0x1f')](this[_0x5031('0x5')], _0xcbb995)) {
            _0x3fbc77 = Math[_0x5031('0x20')](_0xcbb995 / this[_0x5031('0x5')]);
        }
        if (_0x3fbc77 > this['quantity']) {
            return this['quantity'];
        }
        return _0x3fbc77;
    }
    [_0x5031('0x21')](_0x2bfdb7) {
        var _0x2753b9 = {
            'RwQzf': function (_0x3e1292, _0x3ce938) {
                return _0x3e1292 < _0x3ce938;
            },
            'syJeh': function (_0x444402, _0x134815) {
                return _0x444402 / _0x134815;
            },
            'JEARn': function (_0x54c6b9, _0x20234) {
                return _0x54c6b9 > _0x20234;
            },
            'KZboZ': function (_0x1ee69d, _0x3a7091) {
                return _0x1ee69d / _0x3a7091;
            }
        };
        var _0x5826f5 = 0x1;
        if (_0x2753b9[_0x5031('0x22')](this[_0x5031('0x5')], _0x2bfdb7)) {
            _0x5826f5 = Math[_0x5031('0x20')](_0x2753b9[_0x5031('0x23')](_0x2bfdb7, this[_0x5031('0x5')]));
        }
        if (_0x2753b9['JEARn'](_0x5826f5, this[_0x5031('0x0')])) {
            _0x5826f5 = this[_0x5031('0x0')];
        }
        return Math['ceil'](_0x2753b9[_0x5031('0x24')](this[_0x5031('0x0')], _0x5826f5));
    }
    [_0x5031('0x25')](_0x2b6b21) {
        var _0x2127bd = {
            'MzvrI': function (_0x2e28bb, _0x1211fb) {
                return _0x2e28bb * _0x1211fb;
            },
            'SpeUn': function (_0x5e6019, _0x49581e) {
                return _0x5e6019 / _0x49581e;
            },
            'wVNPv': function (_0x5a3b3e, _0x183ae8) {
                return _0x5a3b3e + _0x183ae8;
            },
            'oYEpZ': function (_0x1d45bd, _0x60dfd7) {
                return _0x1d45bd * _0x60dfd7;
            }
        };
        var _0x475eb9 = this[_0x5031('0x21')](_0x2b6b21);
        var _0x524a93 = this[_0x5031('0x1e')](_0x2b6b21);
        return _0x2127bd[_0x5031('0x26')](_0x2127bd['SpeUn'](this[_0x5031('0x12')], 0x4) * _0x2127bd['wVNPv'](Math[_0x5031('0x27')](_0x475eb9, 0x2), _0x2127bd[_0x5031('0x28')](0x3, _0x475eb9)), _0x524a93);
    }
}