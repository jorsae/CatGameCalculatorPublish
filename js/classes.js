var _0x2047 = [
    'craftingItem',
    'toString',
    'NpmSE',
    'name',
    'quantity',
    '3|0|1|4|2',
    'IICnE',
    'baseCost',
    'craftingRequirements',
    'rarity',
    '\x20:\x20',
    'OJDBp',
    'LbNSb',
    'WAGrM',
    'ozdUr',
    'nIHnh',
    'WeeMU',
    'minutes,\x20',
    'craftingTime',
    'RAW',
    'COMMON',
    'RARE',
    'EPIC',
    'getCrafts',
    'jsUFa',
    'ceil',
    'AVUGZ',
    'GNdMn',
    'getItemsPerCraft',
    'OfsEa',
    'ugFgb',
    'lqEQn',
    'getCost',
    'GOwwJ',
    'hKtTM',
    'pow'
];
(function (_0x229530, _0x5293e0) {
    var _0x5914dc = function (_0x4fbaad) {
        while (--_0x4fbaad) {
            _0x229530['push'](_0x229530['shift']());
        }
    };
    _0x5914dc(++_0x5293e0);
}(_0x2047, 0xd8));
var _0x399e = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x2047[_0x1a026c];
    return _0x2d8f05;
};
class CraftingRequirement {
    constructor(_0x57cfd3, _0x23849a) {
        this[_0x399e('0x0')] = _0x57cfd3;
        this['quantity'] = _0x23849a;
    }
    [_0x399e('0x1')]() {
        var _0x55fb97 = {
            'NpmSE': function (_0x1a6111, _0x4350e6) {
                return _0x1a6111 + _0x4350e6;
            }
        };
        _0x55fb97[_0x399e('0x2')](this[_0x399e('0x0')][_0x399e('0x3')] + '\x20:\x20', this[_0x399e('0x4')]);
    }
}
class CraftingItem {
    constructor(_0x640d58, _0x586805, _0x1c4a80, _0x5c526b, _0x1e8bb5 = null) {
        var _0x31e7e4 = { 'IICnE': _0x399e('0x5') };
        var _0x145b43 = _0x31e7e4[_0x399e('0x6')]['split']('|'), _0x5c0b2f = 0x0;
        while (!![]) {
            switch (_0x145b43[_0x5c0b2f++]) {
            case '0':
                this['craftingTime'] = _0x586805;
                continue;
            case '1':
                this[_0x399e('0x7')] = _0x1c4a80;
                continue;
            case '2':
                this[_0x399e('0x8')] = _0x1e8bb5;
                continue;
            case '3':
                this[_0x399e('0x3')] = _0x640d58;
                continue;
            case '4':
                this[_0x399e('0x9')] = _0x5c526b;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x2915b7 = {
            'pnbRp': function (_0xc645e5, _0x28ba9f) {
                return _0xc645e5 < _0x28ba9f;
            },
            'OJDBp': function (_0x565ed3, _0xe4e4dd) {
                return _0x565ed3 + _0xe4e4dd;
            },
            'lFZkm': function (_0x1cad43, _0x10bc64) {
                return _0x1cad43 + _0x10bc64;
            },
            'LbNSb': _0x399e('0xa'),
            'WAGrM': function (_0x7ed23, _0x588166) {
                return _0x7ed23 + _0x588166;
            },
            'ozdUr': function (_0x9e366d, _0x52c0f4) {
                return _0x9e366d + _0x52c0f4;
            },
            'nIHnh': function (_0x1b4e67, _0x23adfc) {
                return _0x1b4e67 + _0x23adfc;
            },
            'WeeMU': function (_0x3eec84, _0x28a49b) {
                return _0x3eec84 + _0x28a49b;
            }
        };
        var _0x35b2cd = '';
        for (var _0xf7c300 = 0x0; _0x2915b7['pnbRp'](_0xf7c300, this[_0x399e('0x8')]['length']); _0xf7c300++) {
            _0x35b2cd += _0x2915b7[_0x399e('0xb')](_0x2915b7['lFZkm'](this['craftingRequirements'][_0xf7c300]['craftingItem'][_0x399e('0x3')], _0x2915b7[_0x399e('0xc')]), this[_0x399e('0x8')][_0xf7c300]['quantity']) + '\x20';
        }
        return _0x2915b7[_0x399e('0xd')](_0x2915b7[_0x399e('0xe')](_0x2915b7[_0x399e('0xf')](_0x2915b7[_0x399e('0x10')](_0x2915b7[_0x399e('0x10')](this[_0x399e('0x3')], ',\x20'), this['craftingTime']) + _0x399e('0x11'), this[_0x399e('0x7')]), 'coins.\x20Crafting\x20Requirement:\x20'), _0x35b2cd);
    }
}
class CraftingItemOutput {
    constructor(_0x2fc93b, _0x4c8ce7, _0x303b4b, _0x4d5596, _0x565829) {
        this[_0x399e('0x3')] = _0x2fc93b;
        this[_0x399e('0x12')] = _0x4c8ce7;
        this[_0x399e('0x7')] = _0x303b4b;
        this[_0x399e('0x9')] = _0x4d5596;
        this[_0x399e('0x4')] = _0x565829;
    }
    ['getRarityValue']() {
        switch (this[_0x399e('0x9')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity[_0x399e('0x13')]:
            return 0x1;
        default:
        case rarity[_0x399e('0x14')]:
            return 0x2;
        case rarity[_0x399e('0x15')]:
            return 0x3;
        case rarity[_0x399e('0x16')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x399e('0x17')](_0x17e35c) {
        var _0x410dfe = {
            'jsUFa': function (_0x1f9ffb, _0x45eb1b) {
                return _0x1f9ffb < _0x45eb1b;
            },
            'AVUGZ': function (_0x5846c0, _0x5b5605) {
                return _0x5846c0 / _0x5b5605;
            },
            'GNdMn': function (_0x335b83, _0x32cb4a) {
                return _0x335b83 > _0x32cb4a;
            }
        };
        var _0x44a938 = 0x1;
        if (_0x410dfe[_0x399e('0x18')](this[_0x399e('0x12')], _0x17e35c)) {
            _0x44a938 = Math[_0x399e('0x19')](_0x410dfe[_0x399e('0x1a')](_0x17e35c, this[_0x399e('0x12')]));
        }
        if (_0x410dfe[_0x399e('0x1b')](_0x44a938, this[_0x399e('0x4')])) {
            return this[_0x399e('0x4')];
        }
        return _0x44a938;
    }
    [_0x399e('0x1c')](_0x1e492c) {
        var _0x24737b = {
            'OfsEa': function (_0x25146a, _0x1827cb) {
                return _0x25146a < _0x1827cb;
            },
            'ugFgb': function (_0x4271b0, _0x2cbf7e) {
                return _0x4271b0 > _0x2cbf7e;
            },
            'lqEQn': function (_0x3ceb6b, _0x554d77) {
                return _0x3ceb6b / _0x554d77;
            }
        };
        var _0x2f0caf = 0x1;
        if (_0x24737b[_0x399e('0x1d')](this['craftingTime'], _0x1e492c)) {
            _0x2f0caf = Math[_0x399e('0x19')](_0x1e492c / this[_0x399e('0x12')]);
        }
        if (_0x24737b[_0x399e('0x1e')](_0x2f0caf, this[_0x399e('0x4')])) {
            _0x2f0caf = this[_0x399e('0x4')];
        }
        return Math[_0x399e('0x19')](_0x24737b[_0x399e('0x1f')](this[_0x399e('0x4')], _0x2f0caf));
    }
    [_0x399e('0x20')](_0x12601d) {
        var _0x1c8763 = {
            'GOwwJ': function (_0x5300d3, _0x475d1e) {
                return _0x5300d3 * _0x475d1e;
            },
            'hKtTM': function (_0x2ccf0d, _0x12b1de) {
                return _0x2ccf0d * _0x12b1de;
            },
            'EJgoX': function (_0x4bb945, _0x480ab5) {
                return _0x4bb945 / _0x480ab5;
            },
            'WCpiE': function (_0x215d42, _0x1544d9) {
                return _0x215d42 + _0x1544d9;
            }
        };
        var _0x555923 = this[_0x399e('0x1c')](_0x12601d);
        var _0x201993 = this[_0x399e('0x17')](_0x12601d);
        return _0x1c8763[_0x399e('0x21')](_0x1c8763[_0x399e('0x22')](_0x1c8763['EJgoX'](this[_0x399e('0x7')], 0x4), _0x1c8763['WCpiE'](Math[_0x399e('0x23')](_0x555923, 0x2), _0x1c8763[_0x399e('0x22')](0x3, _0x555923))), _0x201993);
    }
}