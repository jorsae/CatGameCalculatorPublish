var _0x478e = [
    'DuLEP',
    'rarity',
    'craftingTime',
    'craftingRequirements',
    '\x20:\x20',
    'minutes,\x20',
    'length',
    'BbOZR',
    'awKLt',
    'AXGkH',
    'vsuqR',
    'UoRnn',
    'FqycP',
    'QTHKv',
    '1|2|3|4|0',
    'uMPyk',
    'split',
    'baseCost',
    'getRarityValue',
    'HIDDEN',
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    '4|6|7|3|1|2|5|0',
    'TbjVe',
    'tXDEg',
    'floor',
    'WneHS',
    'pYmTY',
    'getItemsPerCraft',
    'sYbWM',
    'prqoE',
    'ceil',
    'getCost',
    'getCrafts',
    'fyVGJ',
    'JmBuL',
    'JEJSf',
    'craftingItem',
    'quantity',
    'MNwRa',
    'name',
    'uZhQX',
    '2|3|0|1|4'
];
(function (_0x213baa, _0x7e3899) {
    var _0x2be197 = function (_0xf1e8a0) {
        while (--_0xf1e8a0) {
            _0x213baa['push'](_0x213baa['shift']());
        }
    };
    _0x2be197(++_0x7e3899);
}(_0x478e, 0xdb));
var _0x14a0 = function (_0x532950, _0x6c8688) {
    _0x532950 = _0x532950 - 0x0;
    var _0x5cb1cd = _0x478e[_0x532950];
    return _0x5cb1cd;
};
class CraftingRequirement {
    constructor(_0xaa4098, _0x47b4bd) {
        this[_0x14a0('0x0')] = _0xaa4098;
        this[_0x14a0('0x1')] = _0x47b4bd;
    }
    ['toString']() {
        var _0x3d2cf1 = {
            'MNwRa': function (_0x116c5e, _0x13f2c6) {
                return _0x116c5e + _0x13f2c6;
            },
            'uZhQX': '\x20:\x20'
        };
        _0x3d2cf1[_0x14a0('0x2')](_0x3d2cf1[_0x14a0('0x2')](this[_0x14a0('0x0')][_0x14a0('0x3')], _0x3d2cf1[_0x14a0('0x4')]), this['quantity']);
    }
}
class CraftingItem {
    constructor(_0x1642bd, _0x4f9757, _0x212554, _0x3397b4, _0x2abf0c = null) {
        var _0x1c1d35 = { 'DuLEP': _0x14a0('0x5') };
        var _0x5cc565 = _0x1c1d35[_0x14a0('0x6')]['split']('|'), _0x211bf2 = 0x0;
        while (!![]) {
            switch (_0x5cc565[_0x211bf2++]) {
            case '0':
                this['baseCost'] = _0x212554;
                continue;
            case '1':
                this[_0x14a0('0x7')] = _0x3397b4;
                continue;
            case '2':
                this[_0x14a0('0x3')] = _0x1642bd;
                continue;
            case '3':
                this[_0x14a0('0x8')] = _0x4f9757;
                continue;
            case '4':
                this[_0x14a0('0x9')] = _0x2abf0c;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x5521a8 = {
            'BbOZR': function (_0x4ec94d, _0x400a96) {
                return _0x4ec94d + _0x400a96;
            },
            'awKLt': function (_0x502c15, _0x59f08e) {
                return _0x502c15 + _0x59f08e;
            },
            'AXGkH': function (_0x3fa791, _0xbe30f7) {
                return _0x3fa791 + _0xbe30f7;
            },
            'vsuqR': _0x14a0('0xa'),
            'vwrEf': function (_0x2656bc, _0x499fc2) {
                return _0x2656bc + _0x499fc2;
            },
            'UoRnn': function (_0x4d27f1, _0xa792d7) {
                return _0x4d27f1 + _0xa792d7;
            },
            'FqycP': function (_0x440963, _0x22b4b8) {
                return _0x440963 + _0x22b4b8;
            },
            'QTHKv': _0x14a0('0xb')
        };
        var _0x4f2e2a = '';
        for (var _0x37349f = 0x0; _0x37349f < this['craftingRequirements'][_0x14a0('0xc')]; _0x37349f++) {
            _0x4f2e2a += _0x5521a8[_0x14a0('0xd')](_0x5521a8[_0x14a0('0xe')](_0x5521a8[_0x14a0('0xf')](this[_0x14a0('0x9')][_0x37349f][_0x14a0('0x0')][_0x14a0('0x3')], _0x5521a8[_0x14a0('0x10')]), this[_0x14a0('0x9')][_0x37349f][_0x14a0('0x1')]), '\x20');
        }
        return _0x5521a8['vwrEf'](_0x5521a8[_0x14a0('0x11')](_0x5521a8[_0x14a0('0x12')](_0x5521a8[_0x14a0('0x12')](_0x5521a8['FqycP'](this[_0x14a0('0x3')], ',\x20'), this[_0x14a0('0x8')]) + _0x5521a8[_0x14a0('0x13')], this['baseCost']), 'coins.\x20Crafting\x20Requirement:\x20'), _0x4f2e2a);
    }
}
class CraftingItemOutput {
    constructor(_0x54df86, _0x1eb0c6, _0x52793f, _0x52cfea, _0x3e38df) {
        var _0x3ab825 = { 'uMPyk': _0x14a0('0x14') };
        var _0x9bd6a1 = _0x3ab825[_0x14a0('0x15')][_0x14a0('0x16')]('|'), _0x11f16d = 0x0;
        while (!![]) {
            switch (_0x9bd6a1[_0x11f16d++]) {
            case '0':
                this['quantity'] = _0x3e38df;
                continue;
            case '1':
                this[_0x14a0('0x3')] = _0x54df86;
                continue;
            case '2':
                this[_0x14a0('0x8')] = _0x1eb0c6;
                continue;
            case '3':
                this[_0x14a0('0x17')] = _0x52793f;
                continue;
            case '4':
                this[_0x14a0('0x7')] = _0x52cfea;
                continue;
            }
            break;
        }
    }
    [_0x14a0('0x18')]() {
        switch (this[_0x14a0('0x7')]) {
        case rarity[_0x14a0('0x19')]:
            return 0x0;
        case rarity['RAW']:
            return 0x1;
        default:
        case rarity[_0x14a0('0x1a')]:
            return 0x2;
        case rarity[_0x14a0('0x1b')]:
            return 0x3;
        case rarity[_0x14a0('0x1c')]:
            return 0x4;
        case rarity[_0x14a0('0x1d')]:
            return 0x5;
        }
    }
    ['getCrafts'](_0x5743be, _0xfe6ddc, _0x48c97e) {
        var _0x396416 = {
            'TbjVe': function (_0x59d0ca, _0x7c726a) {
                return _0x59d0ca % _0x7c726a;
            },
            'tXDEg': function (_0x5999c8, _0x54d82f) {
                return _0x5999c8 - _0x54d82f;
            },
            'WneHS': function (_0x4c4fea, _0x390551) {
                return _0x4c4fea === _0x390551;
            },
            'ljmbz': function (_0x5672d4, _0x3e6d9b) {
                return _0x5672d4 < _0x3e6d9b;
            },
            'pYmTY': function (_0x468e0c, _0x5cdd70) {
                return _0x468e0c / _0x5cdd70;
            },
            'nkcWb': function (_0x41c561, _0x40a1c4) {
                return _0x41c561 > _0x40a1c4;
            }
        };
        var _0x597f66 = _0x14a0('0x1e')[_0x14a0('0x16')]('|'), _0x36f6c1 = 0x0;
        while (!![]) {
            switch (_0x597f66[_0x36f6c1++]) {
            case '0':
                return [
                    _0x4bf5ef,
                    _0xcc7bfe
                ];
            case '1':
                var _0x4bf5ef = _0x396416[_0x14a0('0x1f')](this['quantity'], _0x4f3165);
                continue;
            case '2':
                var _0xcc7bfe = _0x396416[_0x14a0('0x20')](_0x4f3165, _0x4bf5ef);
                continue;
            case '3':
                _0x4f3165 = Math[_0x14a0('0x21')](_0x4f3165);
                continue;
            case '4':
                var _0x4f3165 = 0x1;
                continue;
            case '5':
                if (_0x396416[_0x14a0('0x22')](_0x4bf5ef, 0x0)) {
                    return [
                        _0xcc7bfe,
                        _0x4bf5ef
                    ];
                }
                continue;
            case '6':
                if (_0x396416['ljmbz'](this[_0x14a0('0x8')], _0x5743be)) {
                    _0x4f3165 = _0x396416[_0x14a0('0x23')](_0x5743be, this[_0x14a0('0x8')]);
                }
                continue;
            case '7':
                if (_0x396416['nkcWb'](_0x4f3165, this[_0x14a0('0x1')])) {
                    _0x4f3165 = this[_0x14a0('0x1')];
                }
                continue;
            }
            break;
        }
    }
    [_0x14a0('0x24')](_0x19cdd3) {
        var _0x32fb09 = {
            'IwNct': function (_0x2f27da, _0x1e6e70) {
                return _0x2f27da < _0x1e6e70;
            },
            'sYbWM': function (_0x46ec22, _0x4e7fcb) {
                return _0x46ec22 / _0x4e7fcb;
            },
            'prqoE': function (_0x49f12a, _0x47417e) {
                return _0x49f12a > _0x47417e;
            }
        };
        var _0x45bebf = 0x1;
        if (_0x32fb09['IwNct'](this[_0x14a0('0x8')], _0x19cdd3)) {
            _0x45bebf = _0x32fb09[_0x14a0('0x25')](_0x19cdd3, this[_0x14a0('0x8')]);
        }
        if (_0x32fb09[_0x14a0('0x26')](_0x45bebf, this['quantity'])) {
            _0x45bebf = this[_0x14a0('0x1')];
        }
        _0x45bebf = this[_0x14a0('0x1')] / _0x45bebf;
        return [
            Math[_0x14a0('0x27')](_0x45bebf),
            Math['floor'](_0x45bebf)
        ];
    }
    [_0x14a0('0x28')](_0x5d79bd) {
        var _0x49d642 = {
            'fyVGJ': function (_0x2ead3b, _0xfcf3aa) {
                return _0x2ead3b / _0xfcf3aa;
            },
            'JmBuL': function (_0x1b8b7d, _0x4a311c) {
                return _0x1b8b7d + _0x4a311c;
            },
            'JEJSf': function (_0x2fbcee, _0x5c1a14) {
                return _0x2fbcee * _0x5c1a14;
            },
            'rjRpZ': function (_0x47e139, _0x368924) {
                return _0x47e139 * _0x368924;
            },
            'klSLf': function (_0xb61ac, _0xf643c2) {
                return _0xb61ac * _0xf643c2;
            },
            'XhJKu': function (_0xaa9782, _0xeab001) {
                return _0xaa9782 / _0xeab001;
            },
            'TpSlo': function (_0x381d5a, _0x17999) {
                return _0x381d5a * _0x17999;
            }
        };
        var _0x2570f1 = this[_0x14a0('0x24')](_0x5d79bd);
        var _0x35d2a2 = this[_0x14a0('0x29')](_0x5d79bd, _0x2570f1[0x0], _0x2570f1[0x1]);
        var _0x58e9c4 = _0x49d642[_0x14a0('0x2a')](this['baseCost'], 0x4) * _0x49d642[_0x14a0('0x2b')](Math['pow'](_0x2570f1[0x0], 0x2), _0x49d642[_0x14a0('0x2c')](0x3, _0x2570f1[0x0])) * _0x35d2a2[0x0];
        var _0x4d78da = _0x49d642['rjRpZ'](_0x49d642['klSLf'](_0x49d642['XhJKu'](this[_0x14a0('0x17')], 0x4), _0x49d642[_0x14a0('0x2b')](Math['pow'](_0x2570f1[0x1], 0x2), _0x49d642['TpSlo'](0x3, _0x2570f1[0x1]))), _0x35d2a2[0x1]);
        return _0x49d642[_0x14a0('0x2b')](_0x58e9c4, _0x4d78da);
    }
}