var _0x1b17 = [
    'getCost',
    'GBChP',
    'BROBB',
    'itemQuantity',
    'crafts',
    'quantity',
    'toString',
    'CsRpZ',
    'penQu',
    'name',
    'lrQFV',
    '3|4|0|2|1',
    'isQlP',
    'split',
    'baseCost',
    'rarity',
    'craftingTime',
    '\x20:\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'yUPWy',
    'craftingRequirements',
    'length',
    'tKAVo',
    'craftingItem',
    'zYaaw',
    'lPPDh',
    'dqSkJ',
    'minutes,\x20',
    'HMoMy',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'getCraftingMethod',
    'CfPAd',
    'BCbpO',
    'zuSsD',
    'ceil',
    'OkWSE',
    'SCNoa',
    'liCNt',
    'dKNSL'
];
(function (_0x465f85, _0x3c9847) {
    var _0x814dcf = function (_0x252aa3) {
        while (--_0x252aa3) {
            _0x465f85['push'](_0x465f85['shift']());
        }
    };
    _0x814dcf(++_0x3c9847);
}(_0x1b17, 0x199));
var _0x2453 = function (_0xc8703e, _0x2de5a9) {
    _0xc8703e = _0xc8703e - 0x0;
    var _0x4d7c18 = _0x1b17[_0xc8703e];
    return _0x4d7c18;
};
class CraftingMethod {
    constructor(_0x1d7f70, _0x582bc5) {
        this['itemQuantity'] = _0x1d7f70;
        this[_0x2453('0x0')] = _0x582bc5;
    }
}
class CraftingRequirement {
    constructor(_0x170800, _0x526975) {
        this['craftingItem'] = _0x170800;
        this[_0x2453('0x1')] = _0x526975;
    }
    [_0x2453('0x2')]() {
        var _0x155435 = {
            'CsRpZ': function (_0x57af9a, _0x478517) {
                return _0x57af9a + _0x478517;
            },
            'penQu': function (_0xf2b14, _0x11a17f) {
                return _0xf2b14 + _0x11a17f;
            },
            'lrQFV': '\x20:\x20'
        };
        _0x155435[_0x2453('0x3')](_0x155435[_0x2453('0x4')](this['craftingItem'][_0x2453('0x5')], _0x155435[_0x2453('0x6')]), this[_0x2453('0x1')]);
    }
}
class CraftingItem {
    constructor(_0x9e4681, _0xb85941, _0x48544a, _0x18acdd, _0x4e93db = null) {
        var _0x2d43c9 = { 'isQlP': _0x2453('0x7') };
        var _0x24b0aa = _0x2d43c9[_0x2453('0x8')][_0x2453('0x9')]('|'), _0x43705e = 0x0;
        while (!![]) {
            switch (_0x24b0aa[_0x43705e++]) {
            case '0':
                this[_0x2453('0xa')] = _0x48544a;
                continue;
            case '1':
                this['craftingRequirements'] = _0x4e93db;
                continue;
            case '2':
                this[_0x2453('0xb')] = _0x18acdd;
                continue;
            case '3':
                this[_0x2453('0x5')] = _0x9e4681;
                continue;
            case '4':
                this[_0x2453('0xc')] = _0xb85941;
                continue;
            }
            break;
        }
    }
    [_0x2453('0x2')]() {
        var _0x2e6089 = {
            'yUPWy': function (_0x422f24, _0x214681) {
                return _0x422f24 < _0x214681;
            },
            'tKAVo': function (_0x1c3aae, _0xa01001) {
                return _0x1c3aae + _0xa01001;
            },
            'zYaaw': _0x2453('0xd'),
            'lPPDh': function (_0x2279a1, _0x3b8725) {
                return _0x2279a1 + _0x3b8725;
            },
            'dqSkJ': function (_0xaebd50, _0x359a5a) {
                return _0xaebd50 + _0x359a5a;
            },
            'HMoMy': _0x2453('0xe')
        };
        var _0x2050d8 = '';
        for (var _0x26dcbb = 0x0; _0x2e6089[_0x2453('0xf')](_0x26dcbb, this[_0x2453('0x10')][_0x2453('0x11')]); _0x26dcbb++) {
            _0x2050d8 += _0x2e6089[_0x2453('0x12')](_0x2e6089[_0x2453('0x12')](this[_0x2453('0x10')][_0x26dcbb][_0x2453('0x13')][_0x2453('0x5')], _0x2e6089[_0x2453('0x14')]), this[_0x2453('0x10')][_0x26dcbb][_0x2453('0x1')]) + '\x20';
        }
        return _0x2e6089[_0x2453('0x15')](_0x2e6089[_0x2453('0x16')](_0x2e6089[_0x2453('0x16')](_0x2e6089[_0x2453('0x16')](this['name'], ',\x20') + this[_0x2453('0xc')], _0x2453('0x17')), this['baseCost']) + _0x2e6089[_0x2453('0x18')], _0x2050d8);
    }
}
class CraftingItemOutput {
    constructor(_0x3b14f3, _0x32f977, _0x1a8657, _0x49a95a, _0x4d0734) {
        this[_0x2453('0x5')] = _0x3b14f3;
        this[_0x2453('0xc')] = _0x32f977;
        this[_0x2453('0xa')] = _0x1a8657;
        this[_0x2453('0xb')] = _0x49a95a;
        this[_0x2453('0x1')] = _0x4d0734;
    }
    [_0x2453('0x19')]() {
        switch (this[_0x2453('0xb')]) {
        case rarity[_0x2453('0x1a')]:
            return 0x0;
        case rarity[_0x2453('0x1b')]:
            return 0x1;
        default:
        case rarity[_0x2453('0x1c')]:
            return 0x2;
        case rarity[_0x2453('0x1d')]:
            return 0x3;
        case rarity[_0x2453('0x1e')]:
            return 0x4;
        case rarity[_0x2453('0x1f')]:
            return 0x5;
        }
    }
    [_0x2453('0x20')](_0x2e07de) {
        var _0x283cd0 = {
            'CfPAd': function (_0x19b9e2, _0x1d2d85) {
                return _0x19b9e2 < _0x1d2d85;
            },
            'BCbpO': function (_0x345585, _0x2bfbdd) {
                return _0x345585 / _0x2bfbdd;
            },
            'DaSsp': function (_0xa8d389, _0x590a6b) {
                return _0xa8d389 > _0x590a6b;
            },
            'zuSsD': function (_0x2c6464, _0x110c0e) {
                return _0x2c6464 === _0x110c0e;
            },
            'vEiGX': function (_0x3a862e, _0x1a0df5) {
                return _0x3a862e / _0x1a0df5;
            },
            'OkWSE': function (_0x5e4190, _0x503d9a) {
                return _0x5e4190 - _0x503d9a;
            },
            'wQrRe': function (_0x3883f, _0x3a7d7b) {
                return _0x3883f <= _0x3a7d7b;
            },
            'SCNoa': function (_0x2b1c9c, _0x228b2a) {
                return _0x2b1c9c * _0x228b2a;
            },
            'liCNt': function (_0x3f617f, _0x398f98) {
                return _0x3f617f * _0x398f98;
            },
            'dKNSL': function (_0x3818a8, _0x1ed697) {
                return _0x3818a8 + _0x1ed697;
            },
            'YwrCt': function (_0x21d26a, _0x2037ca) {
                return _0x21d26a - _0x2037ca;
            }
        };
        var _0x105b23 = 0x1;
        if (_0x283cd0[_0x2453('0x21')](this[_0x2453('0xc')], _0x2e07de)) {
            _0x105b23 = Math['floor'](_0x283cd0[_0x2453('0x22')](_0x2e07de, this[_0x2453('0xc')]));
        }
        if (_0x283cd0['DaSsp'](_0x105b23, this['quantity'])) {
            _0x105b23 = this[_0x2453('0x1')];
            return [new CraftingMethod(0x1, this[_0x2453('0x1')])];
        }
        if (_0x283cd0[_0x2453('0x23')](_0x105b23, 0x1)) {
            return [new CraftingMethod(this['quantity'], 0x1)];
        }
        var _0x19977d = Math[_0x2453('0x24')](_0x283cd0['vEiGX'](this[_0x2453('0x1')], _0x105b23));
        var _0x200c7e = _0x283cd0[_0x2453('0x25')](_0x19977d, 0x1);
        for (var _0x1fe1fe = 0x1; _0x283cd0['wQrRe'](_0x1fe1fe, _0x105b23); _0x1fe1fe++) {
            var _0x3da530 = _0x283cd0[_0x2453('0x26')](_0x19977d, _0x1fe1fe);
            var _0x4c71d3 = _0x283cd0[_0x2453('0x27')](_0x200c7e, _0x283cd0['OkWSE'](_0x105b23, _0x1fe1fe));
            if (_0x283cd0[_0x2453('0x23')](_0x283cd0[_0x2453('0x28')](_0x3da530, _0x4c71d3), this[_0x2453('0x1')])) {
                return [
                    new CraftingMethod(_0x19977d, _0x1fe1fe),
                    new CraftingMethod(_0x200c7e, _0x283cd0['YwrCt'](_0x105b23, _0x1fe1fe))
                ];
            }
        }
        return [];
    }
    [_0x2453('0x29')](_0x34b0be) {
        var _0x34e3be = {
            'GBChP': function (_0x2cc7cc, _0x553350) {
                return _0x2cc7cc < _0x553350;
            },
            'VJwYm': function (_0x46e17a, _0x778712) {
                return _0x46e17a * _0x778712;
            },
            'BROBB': function (_0x36e47a, _0x25533a) {
                return _0x36e47a * _0x25533a;
            },
            'xHpVr': function (_0x87366d, _0x40451d) {
                return _0x87366d / _0x40451d;
            },
            'TetBA': function (_0x46a361, _0x3edde3) {
                return _0x46a361 + _0x3edde3;
            },
            'etSZU': function (_0x2f640f, _0x5e3ec9) {
                return _0x2f640f * _0x5e3ec9;
            }
        };
        var _0x38fe53 = 0x0;
        for (var _0x585922 = 0x0; _0x34e3be[_0x2453('0x2a')](_0x585922, _0x34b0be[_0x2453('0x11')]); _0x585922++) {
            _0x38fe53 += _0x34e3be['VJwYm'](_0x34e3be[_0x2453('0x2b')](_0x34e3be['xHpVr'](this['baseCost'], 0x4), _0x34e3be['TetBA'](Math['pow'](_0x34b0be[_0x585922]['itemQuantity'], 0x2), _0x34e3be['etSZU'](0x3, _0x34b0be[_0x585922][_0x2453('0x2c')]))), _0x34b0be[_0x585922][_0x2453('0x0')]);
        }
        return _0x38fe53;
    }
}