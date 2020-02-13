var _0x4d7f = [
    'wtOPB',
    'baseCost',
    'YGUkA',
    'split',
    'getRarityValue',
    'HIDDEN',
    'RAW',
    'RARE',
    'EPIC',
    'getCraftingMethod',
    'dBCfJ',
    'TSbpF',
    'AbmIX',
    'axXPb',
    'QXcaI',
    'Gjnhi',
    'getCost',
    'hlVrc',
    'YXkxS',
    'aonNO',
    'pow',
    'itemQuantity',
    'crafts',
    'craftingItem',
    'quantity',
    'NDScv',
    'name',
    'ytKnu',
    '4|2|5|0|1|3',
    'rarity',
    'sortingOrder',
    'craftingTime',
    'craftingRequirements',
    '\x20:\x20',
    'minutes,\x20',
    'coins.\x20Crafting\x20Requirement:\x20',
    'RqgOd',
    'length',
    'TapgH',
    'YRSZS',
    'cgtiG',
    'Pclge'
];
(function (_0x26eb70, _0x4002a1) {
    var _0x2ce820 = function (_0x56dd9e) {
        while (--_0x56dd9e) {
            _0x26eb70['push'](_0x26eb70['shift']());
        }
    };
    _0x2ce820(++_0x4002a1);
}(_0x4d7f, 0xe8));
var _0x5c37 = function (_0x3add08, _0x3d0b4b) {
    _0x3add08 = _0x3add08 - 0x0;
    var _0x55045c = _0x4d7f[_0x3add08];
    return _0x55045c;
};
class CraftingMethod {
    constructor(_0x3b8a5f, _0x5f28a1) {
        this['itemQuantity'] = _0x3b8a5f;
        this[_0x5c37('0x0')] = _0x5f28a1;
    }
}
class CraftingRequirement {
    constructor(_0x508fc1, _0x178d94) {
        this[_0x5c37('0x1')] = _0x508fc1;
        this[_0x5c37('0x2')] = _0x178d94;
    }
    ['toString']() {
        var _0x422adb = {
            'NDScv': function (_0x4bb82e, _0x2b1feb) {
                return _0x4bb82e + _0x2b1feb;
            },
            'ytKnu': '\x20:\x20'
        };
        _0x422adb[_0x5c37('0x3')](_0x422adb['NDScv'](this[_0x5c37('0x1')][_0x5c37('0x4')], _0x422adb[_0x5c37('0x5')]), this[_0x5c37('0x2')]);
    }
}
class CraftingItem {
    constructor(_0x5e291a, _0x3eb8ab, _0x36e030, _0x1af180, _0x133cdf, _0x55b2b7 = null) {
        var _0x148eee = { 'wVwTd': _0x5c37('0x6') };
        var _0x202bd6 = _0x148eee['wVwTd']['split']('|'), _0x3ab485 = 0x0;
        while (!![]) {
            switch (_0x202bd6[_0x3ab485++]) {
            case '0':
                this[_0x5c37('0x7')] = _0x1af180;
                continue;
            case '1':
                this[_0x5c37('0x8')] = _0x133cdf;
                continue;
            case '2':
                this[_0x5c37('0x9')] = _0x3eb8ab;
                continue;
            case '3':
                this[_0x5c37('0xa')] = _0x55b2b7;
                continue;
            case '4':
                this[_0x5c37('0x4')] = _0x5e291a;
                continue;
            case '5':
                this['baseCost'] = _0x36e030;
                continue;
            }
            break;
        }
    }
    ['toString']() {
        var _0x115d55 = {
            'RqgOd': function (_0x114411, _0x569fa4) {
                return _0x114411 < _0x569fa4;
            },
            'TapgH': function (_0x5ae947, _0x20d967) {
                return _0x5ae947 + _0x20d967;
            },
            'YRSZS': _0x5c37('0xb'),
            'cgtiG': function (_0x12dcf8, _0x2b85a8) {
                return _0x12dcf8 + _0x2b85a8;
            },
            'Pclge': function (_0x5182f2, _0x5653df) {
                return _0x5182f2 + _0x5653df;
            },
            'wtOPB': _0x5c37('0xc'),
            'YGUkA': _0x5c37('0xd')
        };
        var _0x4d35f9 = '';
        for (var _0x2c09f2 = 0x0; _0x115d55[_0x5c37('0xe')](_0x2c09f2, this['craftingRequirements'][_0x5c37('0xf')]); _0x2c09f2++) {
            _0x4d35f9 += _0x115d55[_0x5c37('0x10')](this[_0x5c37('0xa')][_0x2c09f2]['craftingItem'][_0x5c37('0x4')] + _0x115d55[_0x5c37('0x11')] + this[_0x5c37('0xa')][_0x2c09f2]['quantity'], '\x20');
        }
        return _0x115d55[_0x5c37('0x10')](_0x115d55[_0x5c37('0x12')](_0x115d55[_0x5c37('0x12')](_0x115d55[_0x5c37('0x13')](this[_0x5c37('0x4')] + ',\x20', this['craftingTime']), _0x115d55[_0x5c37('0x14')]) + this[_0x5c37('0x15')], _0x115d55[_0x5c37('0x16')]), _0x4d35f9);
    }
}
class CraftingItemOutput {
    constructor(_0x438c4a, _0x3e827b, _0x15d8e8, _0x47d85d, _0xa7bdea, _0x36286f) {
        var _0x58b6eb = { 'lQVCI': '0|4|1|5|2|3' };
        var _0x1ce499 = _0x58b6eb['lQVCI'][_0x5c37('0x17')]('|'), _0x34966e = 0x0;
        while (!![]) {
            switch (_0x1ce499[_0x34966e++]) {
            case '0':
                this[_0x5c37('0x4')] = _0x438c4a;
                continue;
            case '1':
                this[_0x5c37('0x15')] = _0x15d8e8;
                continue;
            case '2':
                this[_0x5c37('0x2')] = _0xa7bdea;
                continue;
            case '3':
                this['sortingOrder'] = _0x36286f;
                continue;
            case '4':
                this[_0x5c37('0x9')] = _0x3e827b;
                continue;
            case '5':
                this[_0x5c37('0x7')] = _0x47d85d;
                continue;
            }
            break;
        }
    }
    [_0x5c37('0x18')]() {
        switch (this[_0x5c37('0x7')]) {
        case rarity[_0x5c37('0x19')]:
            return 0x0;
        case rarity[_0x5c37('0x1a')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x5c37('0x1b')]:
            return 0x3;
        case rarity[_0x5c37('0x1c')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x5c37('0x1d')](_0x354149) {
        var _0xb5431a = {
            'uSDKQ': function (_0x6d7106, _0x21ecf7) {
                return _0x6d7106 < _0x21ecf7;
            },
            'dBCfJ': function (_0x384eb9, _0x13b1f2) {
                return _0x384eb9 > _0x13b1f2;
            },
            'TSbpF': function (_0x1b47be, _0x819b69) {
                return _0x1b47be === _0x819b69;
            },
            'AbmIX': function (_0x118e65, _0x2c3484) {
                return _0x118e65 <= _0x2c3484;
            },
            'axXPb': function (_0x852949, _0x5d135d) {
                return _0x852949 * _0x5d135d;
            },
            'QXcaI': function (_0x306f9a, _0x29def0) {
                return _0x306f9a - _0x29def0;
            },
            'Gjnhi': function (_0x47e1da, _0x173329) {
                return _0x47e1da === _0x173329;
            },
            'noueT': function (_0x3c24e6, _0x59f521) {
                return _0x3c24e6 + _0x59f521;
            },
            'EvqnV': function (_0x2506a5, _0x453823) {
                return _0x2506a5 - _0x453823;
            }
        };
        var _0x3e1ac7 = 0x1;
        if (_0xb5431a['uSDKQ'](this['craftingTime'], _0x354149)) {
            _0x3e1ac7 = Math['floor'](_0x354149 / this[_0x5c37('0x9')]);
        }
        if (_0xb5431a[_0x5c37('0x1e')](_0x3e1ac7, this[_0x5c37('0x2')])) {
            _0x3e1ac7 = this[_0x5c37('0x2')];
            return [new CraftingMethod(0x1, this[_0x5c37('0x2')])];
        }
        if (_0xb5431a[_0x5c37('0x1f')](_0x3e1ac7, 0x1)) {
            return [new CraftingMethod(this[_0x5c37('0x2')], 0x1)];
        }
        var _0x1ba60b = Math['ceil'](this['quantity'] / _0x3e1ac7);
        var _0x7ae902 = _0x1ba60b - 0x1;
        for (var _0x381c05 = 0x1; _0xb5431a[_0x5c37('0x20')](_0x381c05, _0x3e1ac7); _0x381c05++) {
            var _0x5d64c7 = _0xb5431a[_0x5c37('0x21')](_0x1ba60b, _0x381c05);
            var _0x183581 = _0x7ae902 * _0xb5431a[_0x5c37('0x22')](_0x3e1ac7, _0x381c05);
            if (_0xb5431a[_0x5c37('0x23')](_0xb5431a['noueT'](_0x5d64c7, _0x183581), this['quantity'])) {
                return [
                    new CraftingMethod(_0x1ba60b, _0x381c05),
                    new CraftingMethod(_0x7ae902, _0xb5431a['EvqnV'](_0x3e1ac7, _0x381c05))
                ];
            }
        }
        return [];
    }
    [_0x5c37('0x24')](_0x49e8a2) {
        var _0x376ab7 = {
            'hlVrc': function (_0x32f3fb, _0x3eb9aa) {
                return _0x32f3fb * _0x3eb9aa;
            },
            'YXkxS': function (_0x21cb61, _0x55c9a9) {
                return _0x21cb61 * _0x55c9a9;
            },
            'aonNO': function (_0x38d6f0, _0x45402a) {
                return _0x38d6f0 + _0x45402a;
            }
        };
        var _0x58bd12 = 0x0;
        for (var _0x425534 = 0x0; _0x425534 < _0x49e8a2[_0x5c37('0xf')]; _0x425534++) {
            _0x58bd12 += _0x376ab7[_0x5c37('0x25')](_0x376ab7[_0x5c37('0x26')](this[_0x5c37('0x15')] / 0x4, _0x376ab7[_0x5c37('0x27')](Math[_0x5c37('0x28')](_0x49e8a2[_0x425534][_0x5c37('0x29')], 0x2), 0x3 * _0x49e8a2[_0x425534]['itemQuantity'])), _0x49e8a2[_0x425534][_0x5c37('0x0')]);
        }
        return _0x58bd12;
    }
}