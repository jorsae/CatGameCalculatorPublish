var _0x4b75 = [
    'dnNPA',
    'name',
    '\x20:\x20',
    'craftingTime',
    'baseCost',
    'rarity',
    'minutes,\x20',
    'XYuMN',
    'craftingRequirements',
    'length',
    'BROKf',
    'rnYNP',
    'nNYpj',
    'unILk',
    'coins.\x20Crafting\x20Requirement:\x20',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'EPIC',
    'LEGENDARY',
    'getCrafts',
    'wTaxp',
    'ceil',
    'WDZTV',
    'gQCpZ',
    'getItemsPerCraft',
    'getCost',
    'XUfeU',
    'JuUnE',
    'pow',
    'jsbJr',
    'craftingItem',
    'quantity',
    'toString'
];
(function (_0x531548, _0x4aac69) {
    var _0x155080 = function (_0x42cfec) {
        while (--_0x42cfec) {
            _0x531548['push'](_0x531548['shift']());
        }
    };
    _0x155080(++_0x4aac69);
}(_0x4b75, 0xc9));
var _0x4b81 = function (_0x2b4eca, _0x32f47c) {
    _0x2b4eca = _0x2b4eca - 0x0;
    var _0x457f74 = _0x4b75[_0x2b4eca];
    return _0x457f74;
};
class CraftingRequirement {
    constructor(_0x2d8eb9, _0x841be1) {
        this[_0x4b81('0x0')] = _0x2d8eb9;
        this[_0x4b81('0x1')] = _0x841be1;
    }
    [_0x4b81('0x2')]() {
        var _0x871dd1 = {
            'dnNPA': function (_0x43e8a9, _0x57999b) {
                return _0x43e8a9 + _0x57999b;
            }
        };
        _0x871dd1[_0x4b81('0x3')](this['craftingItem'][_0x4b81('0x4')] + _0x4b81('0x5'), this[_0x4b81('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x1ce5c6, _0x7245e0, _0x37bff2, _0x4a0528, _0x4c16e7 = null) {
        this[_0x4b81('0x4')] = _0x1ce5c6;
        this[_0x4b81('0x6')] = _0x7245e0;
        this[_0x4b81('0x7')] = _0x37bff2;
        this[_0x4b81('0x8')] = _0x4a0528;
        this['craftingRequirements'] = _0x4c16e7;
    }
    [_0x4b81('0x2')]() {
        var _0x13b98d = {
            'XYuMN': function (_0x392024, _0x4cbdc9) {
                return _0x392024 < _0x4cbdc9;
            },
            'BROKf': function (_0x2354d7, _0xd09d54) {
                return _0x2354d7 + _0xd09d54;
            },
            'ivEJH': '\x20:\x20',
            'rnYNP': function (_0xf7085d, _0x23d435) {
                return _0xf7085d + _0x23d435;
            },
            'nNYpj': function (_0x2c4a6f, _0x37356f) {
                return _0x2c4a6f + _0x37356f;
            },
            'unILk': function (_0xd7d87d, _0x4e7869) {
                return _0xd7d87d + _0x4e7869;
            },
            'ovFxe': _0x4b81('0x9')
        };
        var _0x5e9e11 = '';
        for (var _0x8aa7bc = 0x0; _0x13b98d[_0x4b81('0xa')](_0x8aa7bc, this[_0x4b81('0xb')][_0x4b81('0xc')]); _0x8aa7bc++) {
            _0x5e9e11 += _0x13b98d[_0x4b81('0xd')](_0x13b98d[_0x4b81('0xd')](this[_0x4b81('0xb')][_0x8aa7bc]['craftingItem'][_0x4b81('0x4')], _0x13b98d['ivEJH']) + this[_0x4b81('0xb')][_0x8aa7bc][_0x4b81('0x1')], '\x20');
        }
        return _0x13b98d['BROKf'](_0x13b98d[_0x4b81('0xe')](_0x13b98d[_0x4b81('0xf')](_0x13b98d[_0x4b81('0x10')](this[_0x4b81('0x4')], ',\x20'), this[_0x4b81('0x6')]) + _0x13b98d['ovFxe'] + this[_0x4b81('0x7')], _0x4b81('0x11')), _0x5e9e11);
    }
}
class CraftingItemOutput {
    constructor(_0x39d776, _0x4a8b64, _0x571cb6, _0x37cc45, _0x3dab6d) {
        this[_0x4b81('0x4')] = _0x39d776;
        this[_0x4b81('0x6')] = _0x4a8b64;
        this[_0x4b81('0x7')] = _0x571cb6;
        this[_0x4b81('0x8')] = _0x37cc45;
        this['quantity'] = _0x3dab6d;
    }
    [_0x4b81('0x12')]() {
        switch (this[_0x4b81('0x8')]) {
        case rarity[_0x4b81('0x13')]:
            return 0x0;
        case rarity[_0x4b81('0x14')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity['RARE']:
            return 0x3;
        case rarity[_0x4b81('0x15')]:
            return 0x4;
        case rarity[_0x4b81('0x16')]:
            return 0x5;
        }
    }
    [_0x4b81('0x17')](_0x3296cc) {
        var _0xf550f7 = {
            'wTaxp': function (_0x41b228, _0x45e3d9) {
                return _0x41b228 < _0x45e3d9;
            },
            'WDZTV': function (_0x1bea3f, _0x406f1c) {
                return _0x1bea3f / _0x406f1c;
            },
            'gQCpZ': function (_0x2fa6ac, _0x3987ba) {
                return _0x2fa6ac > _0x3987ba;
            }
        };
        var _0x1dabc6 = 0x1;
        if (_0xf550f7[_0x4b81('0x18')](this[_0x4b81('0x6')], _0x3296cc)) {
            _0x1dabc6 = Math[_0x4b81('0x19')](_0xf550f7[_0x4b81('0x1a')](_0x3296cc, this['craftingTime']));
        }
        if (_0xf550f7[_0x4b81('0x1b')](_0x1dabc6, this[_0x4b81('0x1')])) {
            return this[_0x4b81('0x1')];
        }
        return _0x1dabc6;
    }
    [_0x4b81('0x1c')](_0x3cc531) {
        var _0x2bebb1 = {
            'fGCut': function (_0x20bef3, _0x39b22e) {
                return _0x20bef3 < _0x39b22e;
            }
        };
        var _0x524e71 = 0x1;
        if (_0x2bebb1['fGCut'](this[_0x4b81('0x6')], _0x3cc531)) {
            _0x524e71 = Math[_0x4b81('0x19')](_0x3cc531 / this[_0x4b81('0x6')]);
        }
        if (_0x524e71 > this[_0x4b81('0x1')]) {
            _0x524e71 = this['quantity'];
        }
        return Math[_0x4b81('0x19')](this[_0x4b81('0x1')] / _0x524e71);
    }
    [_0x4b81('0x1d')](_0x51ee83) {
        var _0x43abb3 = {
            'jsbJr': function (_0x321dd3, _0x39ea84) {
                return _0x321dd3 * _0x39ea84;
            },
            'XUfeU': function (_0x1dfc80, _0x185918) {
                return _0x1dfc80 / _0x185918;
            },
            'JuUnE': function (_0x1e7364, _0x8219e2) {
                return _0x1e7364 + _0x8219e2;
            }
        };
        var _0x6ca199 = this[_0x4b81('0x1c')](_0x51ee83);
        var _0x50076f = this[_0x4b81('0x17')](_0x51ee83);
        return _0x43abb3['jsbJr'](_0x43abb3[_0x4b81('0x1e')](this[_0x4b81('0x7')], 0x4) * _0x43abb3[_0x4b81('0x1f')](Math[_0x4b81('0x20')](_0x6ca199, 0x2), _0x43abb3[_0x4b81('0x21')](0x3, _0x6ca199)), _0x50076f);
    }
}