var _0x2fc7 = [
    'EPIC',
    'LEGENDARY',
    'getCraftingMethod',
    'floor',
    'KKwIA',
    'wQAOs',
    'SMVQv',
    'toouN',
    'FDSRO',
    'eGfAS',
    'OREHy',
    'ZnGkV',
    'pow',
    'lSRgg',
    'itemQuantity',
    'crafts',
    'craftingItem',
    'quantity',
    'toString',
    '\x20:\x20',
    'ilFud',
    'name',
    'PDaAE',
    '0|2|1|3|5|4',
    'ePPfJ',
    'craftingTime',
    'rarity',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'savAD',
    'craftingRequirements',
    'length',
    'IhElJ',
    'mhTbx',
    'iOPBd',
    'fmkTT',
    'BLSvd',
    'sortingOrder',
    'baseCost',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'COMMON',
    'RARE'
];
(function (_0x3393c5, _0x31845d) {
    var _0x36da68 = function (_0x5aed0b) {
        while (--_0x5aed0b) {
            _0x3393c5['push'](_0x3393c5['shift']());
        }
    };
    _0x36da68(++_0x31845d);
}(_0x2fc7, 0x1f3));
var _0x4ce1 = function (_0x559b30, _0x33e0f9) {
    _0x559b30 = _0x559b30 - 0x0;
    var _0x14079c = _0x2fc7[_0x559b30];
    return _0x14079c;
};
class CraftingMethod {
    constructor(_0x4d9181, _0x143101) {
        this['itemQuantity'] = _0x4d9181;
        this[_0x4ce1('0x0')] = _0x143101;
    }
}
class CraftingRequirement {
    constructor(_0x7b1ee8, _0x246818) {
        this[_0x4ce1('0x1')] = _0x7b1ee8;
        this[_0x4ce1('0x2')] = _0x246818;
    }
    [_0x4ce1('0x3')]() {
        var _0x5378d0 = {
            'ilFud': function (_0x5552e0, _0x42f045) {
                return _0x5552e0 + _0x42f045;
            },
            'ZwGmC': function (_0x588515, _0x18ee39) {
                return _0x588515 + _0x18ee39;
            },
            'PDaAE': _0x4ce1('0x4')
        };
        _0x5378d0[_0x4ce1('0x5')](_0x5378d0['ZwGmC'](this[_0x4ce1('0x1')][_0x4ce1('0x6')], _0x5378d0[_0x4ce1('0x7')]), this[_0x4ce1('0x2')]);
    }
}
class CraftingItem {
    constructor(_0x5220bd, _0x2b1ad4, _0x38a0ff, _0x46174a, _0x9de3c1, _0x7caa7d = null) {
        var _0x27badc = { 'ePPfJ': _0x4ce1('0x8') };
        var _0x477dc9 = _0x27badc[_0x4ce1('0x9')]['split']('|'), _0x4e4449 = 0x0;
        while (!![]) {
            switch (_0x477dc9[_0x4e4449++]) {
            case '0':
                this[_0x4ce1('0x6')] = _0x5220bd;
                continue;
            case '1':
                this['baseCost'] = _0x38a0ff;
                continue;
            case '2':
                this[_0x4ce1('0xa')] = _0x2b1ad4;
                continue;
            case '3':
                this[_0x4ce1('0xb')] = _0x46174a;
                continue;
            case '4':
                this['craftingRequirements'] = _0x7caa7d;
                continue;
            case '5':
                this['sortingOrder'] = _0x9de3c1;
                continue;
            }
            break;
        }
    }
    [_0x4ce1('0x3')]() {
        var _0xbf096f = {
            'savAD': function (_0x2da507, _0x38c6ab) {
                return _0x2da507 < _0x38c6ab;
            },
            'IhElJ': function (_0x3373f5, _0xd56924) {
                return _0x3373f5 + _0xd56924;
            },
            'mhTbx': function (_0x3d2b31, _0x4b26cb) {
                return _0x3d2b31 + _0x4b26cb;
            },
            'jUxNA': function (_0x1c21b7, _0xfdf9e3) {
                return _0x1c21b7 + _0xfdf9e3;
            },
            'iOPBd': function (_0x556245, _0x3db1be) {
                return _0x556245 + _0x3db1be;
            },
            'fmkTT': function (_0x30eaaf, _0x195fed) {
                return _0x30eaaf + _0x195fed;
            },
            'KLZAd': _0x4ce1('0xc'),
            'BLSvd': _0x4ce1('0xd')
        };
        var _0x1123fd = '';
        for (var _0x1dcba0 = 0x0; _0xbf096f[_0x4ce1('0xe')](_0x1dcba0, this[_0x4ce1('0xf')][_0x4ce1('0x10')]); _0x1dcba0++) {
            _0x1123fd += _0xbf096f[_0x4ce1('0x11')](_0xbf096f[_0x4ce1('0x12')](this[_0x4ce1('0xf')][_0x1dcba0][_0x4ce1('0x1')][_0x4ce1('0x6')] + _0x4ce1('0x4'), this['craftingRequirements'][_0x1dcba0]['quantity']), '\x20');
        }
        return _0xbf096f['jUxNA'](_0xbf096f[_0x4ce1('0x13')](_0xbf096f[_0x4ce1('0x14')](_0xbf096f['fmkTT'](_0xbf096f['fmkTT'](this[_0x4ce1('0x6')], ',\x20'), this[_0x4ce1('0xa')]), _0xbf096f['KLZAd']), this['baseCost']), _0xbf096f[_0x4ce1('0x15')]) + _0x1123fd;
    }
}
class CraftingItemOutput {
    constructor(_0x286cfb, _0x26e8c5, _0x43626e, _0x3966b8, _0x110e7f, _0x28418a) {
        var _0x4ea5ad = { 'pEcZJ': '4|3|5|1|2|0' };
        var _0x46c585 = _0x4ea5ad['pEcZJ']['split']('|'), _0xbe3721 = 0x0;
        while (!![]) {
            switch (_0x46c585[_0xbe3721++]) {
            case '0':
                this[_0x4ce1('0x16')] = _0x28418a;
                continue;
            case '1':
                this[_0x4ce1('0xb')] = _0x3966b8;
                continue;
            case '2':
                this[_0x4ce1('0x2')] = _0x110e7f;
                continue;
            case '3':
                this['craftingTime'] = _0x26e8c5;
                continue;
            case '4':
                this[_0x4ce1('0x6')] = _0x286cfb;
                continue;
            case '5':
                this[_0x4ce1('0x17')] = _0x43626e;
                continue;
            }
            break;
        }
    }
    [_0x4ce1('0x18')]() {
        switch (this['rarity']) {
        case rarity[_0x4ce1('0x19')]:
            return 0x0;
        case rarity[_0x4ce1('0x1a')]:
            return 0x1;
        default:
        case rarity[_0x4ce1('0x1b')]:
            return 0x2;
        case rarity[_0x4ce1('0x1c')]:
            return 0x3;
        case rarity[_0x4ce1('0x1d')]:
            return 0x4;
        case rarity[_0x4ce1('0x1e')]:
            return 0x5;
        }
    }
    [_0x4ce1('0x1f')](_0x86e4f9) {
        var _0x37c863 = {
            'PaIfN': function (_0x347394, _0x4e838f) {
                return _0x347394 < _0x4e838f;
            },
            'KKwIA': function (_0x1b401c, _0x4e583f) {
                return _0x1b401c === _0x4e583f;
            },
            'NMLcT': function (_0x4790bd, _0x298ef7) {
                return _0x4790bd / _0x298ef7;
            },
            'toouN': function (_0x3efccc, _0x294865) {
                return _0x3efccc - _0x294865;
            },
            'wQAOs': function (_0x377eab, _0x418c94) {
                return _0x377eab <= _0x418c94;
            },
            'SMVQv': function (_0x4f57f2, _0x2c0771) {
                return _0x4f57f2 * _0x2c0771;
            },
            'FDSRO': function (_0x9ac470, _0x2b5652) {
                return _0x9ac470 + _0x2b5652;
            },
            'KNvkE': function (_0x504179, _0x461d11) {
                return _0x504179 - _0x461d11;
            }
        };
        var _0x3e2597 = 0x1;
        if (_0x37c863['PaIfN'](this['craftingTime'], _0x86e4f9)) {
            _0x3e2597 = Math[_0x4ce1('0x20')](_0x86e4f9 / this['craftingTime']);
        }
        if (_0x3e2597 > this[_0x4ce1('0x2')]) {
            _0x3e2597 = this[_0x4ce1('0x2')];
            return [new CraftingMethod(0x1, this['quantity'])];
        }
        if (_0x37c863[_0x4ce1('0x21')](_0x3e2597, 0x1)) {
            return [new CraftingMethod(this[_0x4ce1('0x2')], 0x1)];
        }
        var _0x58e052 = Math['ceil'](_0x37c863['NMLcT'](this['quantity'], _0x3e2597));
        var _0x1e9a11 = _0x37c863['toouN'](_0x58e052, 0x1);
        for (var _0x3bb830 = 0x1; _0x37c863[_0x4ce1('0x22')](_0x3bb830, _0x3e2597); _0x3bb830++) {
            var _0x3c9358 = _0x37c863[_0x4ce1('0x23')](_0x58e052, _0x3bb830);
            var _0xed52a0 = _0x1e9a11 * _0x37c863[_0x4ce1('0x24')](_0x3e2597, _0x3bb830);
            if (_0x37c863[_0x4ce1('0x21')](_0x37c863[_0x4ce1('0x25')](_0x3c9358, _0xed52a0), this[_0x4ce1('0x2')])) {
                return [
                    new CraftingMethod(_0x58e052, _0x3bb830),
                    new CraftingMethod(_0x1e9a11, _0x37c863['KNvkE'](_0x3e2597, _0x3bb830))
                ];
            }
        }
        return [];
    }
    ['getCost'](_0x3beb6f) {
        var _0x299441 = {
            'eGfAS': function (_0x517a0f, _0x594f25) {
                return _0x517a0f < _0x594f25;
            },
            'OREHy': function (_0x1b9304, _0xcd8d5f) {
                return _0x1b9304 * _0xcd8d5f;
            },
            'cUnCV': function (_0x164f28, _0x2165f4) {
                return _0x164f28 / _0x2165f4;
            },
            'ZnGkV': function (_0x48ad37, _0x379280) {
                return _0x48ad37 + _0x379280;
            },
            'lSRgg': function (_0x5819e6, _0x58b09c) {
                return _0x5819e6 * _0x58b09c;
            }
        };
        var _0x5d7588 = 0x0;
        for (var _0xcb5eea = 0x0; _0x299441[_0x4ce1('0x26')](_0xcb5eea, _0x3beb6f[_0x4ce1('0x10')]); _0xcb5eea++) {
            _0x5d7588 += _0x299441[_0x4ce1('0x27')](_0x299441['OREHy'](_0x299441['cUnCV'](this['baseCost'], 0x4), _0x299441[_0x4ce1('0x28')](Math[_0x4ce1('0x29')](_0x3beb6f[_0xcb5eea]['itemQuantity'], 0x2), _0x299441[_0x4ce1('0x2a')](0x3, _0x3beb6f[_0xcb5eea][_0x4ce1('0x2b')]))), _0x3beb6f[_0xcb5eea][_0x4ce1('0x0')]);
        }
        return _0x5d7588;
    }
}