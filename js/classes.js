var _0x54ed = [
    'rarity',
    'toString',
    'minutes,\x20',
    'SsOGD',
    'craftingRequirements',
    'NlGRb',
    'UQXtI',
    'UlfSY',
    'hFCeI',
    'FVmNL',
    'sBHSK',
    'getRarityValue',
    'RAW',
    'RARE',
    'EPIC',
    'getCraftingMethod',
    '1|7|0|3|5|4|2|6',
    'RXYpC',
    'split',
    'lPssN',
    'OWfrZ',
    'npsmg',
    'TOxoj',
    'YDoxi',
    'ceil',
    'dPNRu',
    'floor',
    'getCost',
    'DIcIY',
    'RzMte',
    'pow',
    'itemQuantity',
    'crafts',
    'craftingItem',
    'quantity',
    'OxQWf',
    'pvpEQ',
    'name',
    '\x20:\x20',
    '1|3|2|4|0|5',
    'BtWEP',
    'sortingOrder',
    'baseCost',
    'craftingTime'
];
(function (_0x2ff00f, _0x52104c) {
    var _0x4d3349 = function (_0x5372fe) {
        while (--_0x5372fe) {
            _0x2ff00f['push'](_0x2ff00f['shift']());
        }
    };
    _0x4d3349(++_0x52104c);
}(_0x54ed, 0x77));
var _0x2165 = function (_0x1c6520, _0x461a3e) {
    _0x1c6520 = _0x1c6520 - 0x0;
    var _0x58992c = _0x54ed[_0x1c6520];
    return _0x58992c;
};
class CraftingMethod {
    constructor(_0x41b6d3, _0x374f98) {
        this[_0x2165('0x0')] = _0x41b6d3;
        this[_0x2165('0x1')] = _0x374f98;
    }
}
class CraftingRequirement {
    constructor(_0x4a7012, _0x2e2fd0) {
        this[_0x2165('0x2')] = _0x4a7012;
        this[_0x2165('0x3')] = _0x2e2fd0;
    }
    ['toString']() {
        var _0x1d6a6f = {
            'OxQWf': function (_0x9ca2b2, _0x5bfa44) {
                return _0x9ca2b2 + _0x5bfa44;
            },
            'pvpEQ': function (_0x1e9f4f, _0x4f97ff) {
                return _0x1e9f4f + _0x4f97ff;
            }
        };
        _0x1d6a6f[_0x2165('0x4')](_0x1d6a6f[_0x2165('0x5')](this['craftingItem'][_0x2165('0x6')], _0x2165('0x7')), this[_0x2165('0x3')]);
    }
}
class CraftingItem {
    constructor(_0x109606, _0x203a61, _0x21814e, _0x3f77ec, _0x246c7f, _0x426dbb = null) {
        var _0x41bdd8 = { 'BtWEP': _0x2165('0x8') };
        var _0x3a3ab6 = _0x41bdd8[_0x2165('0x9')]['split']('|'), _0x3dad67 = 0x0;
        while (!![]) {
            switch (_0x3a3ab6[_0x3dad67++]) {
            case '0':
                this[_0x2165('0xa')] = _0x246c7f;
                continue;
            case '1':
                this[_0x2165('0x6')] = _0x109606;
                continue;
            case '2':
                this[_0x2165('0xb')] = _0x21814e;
                continue;
            case '3':
                this[_0x2165('0xc')] = _0x203a61;
                continue;
            case '4':
                this[_0x2165('0xd')] = _0x3f77ec;
                continue;
            case '5':
                this['craftingRequirements'] = _0x426dbb;
                continue;
            }
            break;
        }
    }
    [_0x2165('0xe')]() {
        var _0x1cc793 = {
            'SsOGD': function (_0x2a348d, _0x42432c) {
                return _0x2a348d < _0x42432c;
            },
            'NlGRb': function (_0x1a99aa, _0x4665e9) {
                return _0x1a99aa + _0x4665e9;
            },
            'UQXtI': function (_0x468fb7, _0x1c9121) {
                return _0x468fb7 + _0x1c9121;
            },
            'IpeVG': '\x20:\x20',
            'UlfSY': function (_0x191393, _0xab1d48) {
                return _0x191393 + _0xab1d48;
            },
            'hFCeI': function (_0x1190a5, _0x3c3034) {
                return _0x1190a5 + _0x3c3034;
            },
            'FVmNL': function (_0x16a5fa, _0x597cdb) {
                return _0x16a5fa + _0x597cdb;
            },
            'sBHSK': _0x2165('0xf')
        };
        var _0x37d264 = '';
        for (var _0x2c7603 = 0x0; _0x1cc793[_0x2165('0x10')](_0x2c7603, this[_0x2165('0x11')]['length']); _0x2c7603++) {
            _0x37d264 += _0x1cc793[_0x2165('0x12')](_0x1cc793[_0x2165('0x13')](this[_0x2165('0x11')][_0x2c7603][_0x2165('0x2')][_0x2165('0x6')], _0x1cc793['IpeVG']), this[_0x2165('0x11')][_0x2c7603][_0x2165('0x3')]) + '\x20';
        }
        return _0x1cc793[_0x2165('0x14')](_0x1cc793[_0x2165('0x15')](_0x1cc793[_0x2165('0x15')](_0x1cc793[_0x2165('0x16')](this['name'], ',\x20'), this[_0x2165('0xc')]), _0x1cc793[_0x2165('0x17')]) + this['baseCost'], 'coins.\x20Crafting\x20Requirement:\x20') + _0x37d264;
    }
}
class CraftingItemOutput {
    constructor(_0xe20223, _0x10e27, _0x450f5b, _0x3fcdab, _0xdfb6e5, _0x3688e4) {
        this[_0x2165('0x6')] = _0xe20223;
        this[_0x2165('0xc')] = _0x10e27;
        this['baseCost'] = _0x450f5b;
        this[_0x2165('0xd')] = _0x3fcdab;
        this[_0x2165('0x3')] = _0xdfb6e5;
        this[_0x2165('0xa')] = _0x3688e4;
    }
    [_0x2165('0x18')]() {
        switch (this[_0x2165('0xd')]) {
        case rarity['HIDDEN']:
            return 0x0;
        case rarity[_0x2165('0x19')]:
            return 0x1;
        default:
        case rarity['COMMON']:
            return 0x2;
        case rarity[_0x2165('0x1a')]:
            return 0x3;
        case rarity[_0x2165('0x1b')]:
            return 0x4;
        case rarity['LEGENDARY']:
            return 0x5;
        }
    }
    [_0x2165('0x1c')](_0x5e4f64) {
        var _0x3ef7a2 = {
            'RXYpC': _0x2165('0x1d'),
            'lPssN': function (_0x38dcd9, _0x62a980) {
                return _0x38dcd9 > _0x62a980;
            },
            'WZqeh': function (_0x547df7, _0x36076a) {
                return _0x547df7 <= _0x36076a;
            },
            'OWfrZ': function (_0x1e3ced, _0x25c5c1) {
                return _0x1e3ced * _0x25c5c1;
            },
            'fMSDZ': function (_0x52b8d4, _0x5b3194) {
                return _0x52b8d4 - _0x5b3194;
            },
            'npsmg': function (_0x42718a, _0x46b795) {
                return _0x42718a + _0x46b795;
            },
            'TOxoj': function (_0x245cb7, _0x253491) {
                return _0x245cb7 - _0x253491;
            },
            'YDoxi': function (_0x5ef142, _0x467371) {
                return _0x5ef142 === _0x467371;
            },
            'FlyUu': function (_0x36e237, _0xdeb9f3) {
                return _0x36e237 - _0xdeb9f3;
            },
            'dPNRu': function (_0x2889a1, _0x4b491f) {
                return _0x2889a1 / _0x4b491f;
            },
            'VIcNe': function (_0x2ff0e3, _0x37a283) {
                return _0x2ff0e3 / _0x37a283;
            }
        };
        var _0x152125 = _0x3ef7a2[_0x2165('0x1e')][_0x2165('0x1f')]('|'), _0x1030e9 = 0x0;
        while (!![]) {
            switch (_0x152125[_0x1030e9++]) {
            case '0':
                if (_0x3ef7a2[_0x2165('0x20')](_0x33e43e, this[_0x2165('0x3')])) {
                    _0x33e43e = this[_0x2165('0x3')];
                    return [new CraftingMethod(0x1, this[_0x2165('0x3')])];
                }
                continue;
            case '1':
                var _0x33e43e = 0x1;
                continue;
            case '2':
                for (var _0x4ba715 = 0x1; _0x3ef7a2['WZqeh'](_0x4ba715, _0x33e43e); _0x4ba715++) {
                    var _0x5d2e8d = _0x3ef7a2[_0x2165('0x21')](_0x20ee6d, _0x4ba715);
                    var _0x3612be = _0x3ef7a2[_0x2165('0x21')](_0x477cc7, _0x3ef7a2['fMSDZ'](_0x33e43e, _0x4ba715));
                    if (_0x3ef7a2[_0x2165('0x22')](_0x5d2e8d, _0x3612be) === this[_0x2165('0x3')]) {
                        return [
                            new CraftingMethod(_0x20ee6d, _0x4ba715),
                            new CraftingMethod(_0x477cc7, _0x3ef7a2[_0x2165('0x23')](_0x33e43e, _0x4ba715))
                        ];
                    }
                }
                continue;
            case '3':
                if (_0x3ef7a2[_0x2165('0x24')](_0x33e43e, 0x1)) {
                    return [new CraftingMethod(this[_0x2165('0x3')], 0x1)];
                }
                continue;
            case '4':
                var _0x477cc7 = _0x3ef7a2['FlyUu'](_0x20ee6d, 0x1);
                continue;
            case '5':
                var _0x20ee6d = Math[_0x2165('0x25')](_0x3ef7a2[_0x2165('0x26')](this[_0x2165('0x3')], _0x33e43e));
                continue;
            case '6':
                return [];
            case '7':
                if (this[_0x2165('0xc')] < _0x5e4f64) {
                    _0x33e43e = Math[_0x2165('0x27')](_0x3ef7a2['VIcNe'](_0x5e4f64, this[_0x2165('0xc')]));
                }
                continue;
            }
            break;
        }
    }
    [_0x2165('0x28')](_0x2fad6d) {
        var _0x26b42 = {
            'DIcIY': function (_0x26f71c, _0x321d96) {
                return _0x26f71c < _0x321d96;
            },
            'ovYXt': function (_0x5e5e88, _0x42ce60) {
                return _0x5e5e88 * _0x42ce60;
            },
            'RzMte': function (_0x4a2969, _0x4840c7) {
                return _0x4a2969 + _0x4840c7;
            }
        };
        var _0x160349 = 0x0;
        for (var _0xdc08bb = 0x0; _0x26b42[_0x2165('0x29')](_0xdc08bb, _0x2fad6d['length']); _0xdc08bb++) {
            _0x160349 += _0x26b42['ovYXt'](this[_0x2165('0xb')] / 0x4, _0x26b42[_0x2165('0x2a')](Math[_0x2165('0x2b')](_0x2fad6d[_0xdc08bb][_0x2165('0x0')], 0x2), 0x3 * _0x2fad6d[_0xdc08bb][_0x2165('0x0')])) * _0x2fad6d[_0xdc08bb]['crafts'];
        }
        return _0x160349;
    }
}